import Contact from "../../components/contact";
import PageType from "../../components/pageType";
import Referance from "../../components/referance";

const ContactUs = () => {
  return (
    <PageType
      pageType="İLETİŞİME GEÇ"
      section1={<Contact />}
      section2={<Referance />}
      bg="./img/aaa.jpg"
    />
  );
};

export default ContactUs;
