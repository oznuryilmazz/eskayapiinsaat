import { reference } from "../../data/data";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import style from "./style.module.scss";

const Referance = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });

  return (
    <div className={style.container}>
      <div className={style.referenceContainer}>
        <h2>REFERANSLAR</h2>
        <div className={style.referance} ref={ref}>
          {reference.numbers.map((number, index) => (
            <motion.div
              className={style.col}
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: index * 1.5 }}
            >
              <h1>
                <span className={style.counter}>{number.number}</span>
              </h1>
              <p>{number.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Referance;
