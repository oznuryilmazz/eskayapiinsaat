import SliderPicture from "../sliderPicture";
import style from "./style.module.scss";

const PageType = ({ pageType, section1, section2, bg }) => {
  return (
    <>
      <div
        className={style.header}
        style={{
          background: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
        }}
      >
        <h2>{pageType}</h2>
      </div>
      <div className={style.container}>{section1}</div>

      <SliderPicture />

      <div className={style.container}>{section2}</div>

      <SliderPicture />
    </>
  );
};

export default PageType;
