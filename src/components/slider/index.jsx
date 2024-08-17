import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import { projectsList } from "../../data/data";

import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";

const Slider = () => {
  return (
    <Swiper className="mySwiper" modules={[Navigation]} navigation={true}>
      {projectsList.map(
        (project, index) =>
          project.slide && (
            <SwiperSlide key={index}>
              <img src={project.slide} alt={`Slide ${index}`} />
              <div className="sliderContainer">
                <p className="subTitle">İÇ MİMARLIK</p>
                <h2 className="title">{project.title}</h2>
                <p className="description">
                  Mekânları sanata, hayalleri gerçeğe dönüştürüyoruz.
                </p>
                <Link to={`../proje/${project.slug}`}>
                  <button className="button">PROJEYİ GÖRÜNTÜLE</button>
                </Link>
              </div>
            </SwiperSlide>
          )
      )}
    </Swiper>
  );
};

export default Slider;
