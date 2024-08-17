import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import style from "./style.module.scss";

const SliderPicture = () => {
  const { ref: containerRef, inView: containerInView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <div className={style.container} ref={containerRef}>
      <motion.div
        className={style.referenceContainer}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={containerInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={containerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          YAŞAM & KONFOR
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={containerInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Hayalinizdeki yaşam alanlarını birlikte tasarlıyoruz. Konfor, estetik
          ve işlevselliği bir araya getirerek, müşterilerimizin rüyalarını
          gerçeğe dönüştürüyoruz.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default SliderPicture;
