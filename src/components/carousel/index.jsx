import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import PhotoSwipeLightbox from "photoswipe/lightbox";

import { NextIcon, PrevIcon } from "../../helpers/useIcons";

import "photoswipe/style.css";
import "./style.css";
import { Link } from "react-router-dom";

const EmblaCarousel = ({ slides, height, project }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#embla",
      bgOpacity: 0.9,
      children: ".embla__slide a",
      pswpModule: () => import("photoswipe"),
    });

    lightbox.init();

    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <div className="embla" id="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <a
                href={slide.url}
                data-pswp-width="800"
                data-pswp-height="600"
                data-pswp-index={index}
              >
                <img
                  src={slide.url}
                  alt={`Slide ${index}`}
                  height={height}
                  className="embla__slide__img"
                />
                {index === 0 && (
                  <div className="embla__slide-overlay">
                    <div className="embla__slide-overlay-text">
                      {project.name}
                    </div>
                  </div>
                )}
              </a>
            </div>
          ))}
        </div>
      </div>

      <Link
        to={`../proje/${project.slug}`}
        className="embla__button embla__button--project"
      >
        PROJE DETAYINA GİT
      </Link>
      <button
        className="embla__button embla__button--prev"
        onClick={scrollPrev}
        disabled={!prevBtnEnabled}
      >
        <PrevIcon />
      </button>
      <button
        className="embla__button embla__button--next"
        onClick={scrollNext}
        disabled={!nextBtnEnabled}
      >
        <NextIcon />
      </button>
    </div>
  );
};

export default EmblaCarousel;
