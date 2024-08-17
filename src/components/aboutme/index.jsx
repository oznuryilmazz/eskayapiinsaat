import { aboutUsData } from "../../data/data";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import style from "./style.module.scss";

const aboutDetail = [
  {
    heading: "Hakkımızda",
    title:
      "Hayalinizdeki yaşam alanlarını birlikte tasarlıyoruz. Konfor, estetik ve işlevselliği bir araya getirerek, müşterilerimizin rüyalarını gerçeğe dönüştürüyoruz.",
    icon: "01.",
  },
  {
    heading: "Prensiplerimiz",
    title:
      "Hayalinizdeki yaşam alanlarını birlikte tasarlıyoruz. Konfor, estetik ve işlevselliği bir araya getirerek, müşterilerimizin rüyalarını gerçeğe dönüştürüyoruz.",
    icon: "02.",
  },
  {
    heading: "Dekor & Tasarım",
    title:
      "Hayalinizdeki yaşam alanlarını birlikte tasarlıyoruz. Konfor, estetik ve işlevselliği bir araya getirerek, müşterilerimizin rüyalarını gerçeğe dönüştürüyoruz.",
    icon: "03.",
  },
];

const AboutMe = () => {
  // Intersection Observer hook to detect visibility
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className={style.container}>
      <div className={style.aboutContainer}>
        <h2 className={inView ? style.fadeInUp : ""}>
          {aboutUsData.title}
          <span className={style.aboutTitle}>{aboutUsData.companyName}</span>
        </h2>

        <motion.div
          className={style.aboutMeContainer}
          ref={ref}
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 1 }}
        >
          <div className={style.textContainer}>
            <div className={style.title}>
              fikirleri sanat eserlerine dönüştürüyoruz
            </div>
            <div className={style.text}>
              {aboutUsData.aboutUsText1} <br />
              <br />
              <br />
              {aboutUsData.aboutUsText2}
            </div>
          </div>
          <img src={aboutUsData.image} alt="" width={550} />
        </motion.div>

        <motion.div
          className={style.referance}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1 }}
        >
          {aboutDetail.map((x, index) => (
            <div className={style.col} key={index}>
              <div className={style.colRow}>
                <h3>
                  <span className={style.counter}>{x.heading}</span>
                </h3>
                <h1 className={style.counter}>{x.icon}</h1>
              </div>
              <p>{x.title}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
