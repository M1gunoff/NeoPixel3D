import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BlueCharacteristicsList } from '../../../data/data';
import './BlueCharacteristics.css';

const BlueCharacteristics = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const controls = useAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        staggerChildren: 0.2,
        delay: 0,
        duration: 2.2,
      },
    },
  };

  const itemVariants = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', duration: 2, delay } },
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      id="characteristics"
      className="blueCharacteristics__container"
      animate={controls}
      initial="hidden"
      variants={containerVariants}
      ref={ref}
    >
      <motion.h1 variants={itemVariants(0.5)}>Характеристики Принтера</motion.h1>
      <div className="blueCharacteristics__list">
        {BlueCharacteristicsList.map((item, index) => (
          <motion.div key={item.id} className="blueCharacteristics__item" variants={itemVariants(0.5 + index * 0.2)}>
            <div className="blueCharacteristics__title--wrapper">
              <span className="blueCharacteristics__title">{item.title}</span>
            </div>
            <div className="blueCharacteristics__desc--wrapper">
              <span className="blueCharacteristics__desc">{item.desc}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default BlueCharacteristics;
