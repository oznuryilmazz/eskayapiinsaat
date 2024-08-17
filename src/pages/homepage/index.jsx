import Slider from "../../components/slider";
import Projects from "../../components/projects";
import Referance from "../../components/referance";
import Contact from "../../components/contact";
import AboutMe from "../../components/aboutme";

import style from "./style.module.scss";
import SliderPicture from "../../components/sliderPicture";

const HomePage = () => {
  return (
    <>
      <div className={style.slider}>
        <Slider />
      </div>

      <div className={style.container}>
        <AboutMe />
      </div>

      <SliderPicture />

      <div className={style.container}>
        <Referance />
      </div>

      <Projects start={0} end={5} />

      <div className={style.container}>
        <Contact />
      </div>
    </>
  );
};

export default HomePage;
