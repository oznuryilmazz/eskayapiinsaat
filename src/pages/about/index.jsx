import AboutMe from "../../components/aboutme";
import PageType from "../../components/pageType";
import Referance from "../../components/referance";

const AboutUs = () => {
  return (
    <PageType
      pageType="HAKKIMIZDA"
      section1={<AboutMe />}
      section2={<Referance />}
      bg="./img/aaa.jpg"
    />
  );
};

export default AboutUs;
