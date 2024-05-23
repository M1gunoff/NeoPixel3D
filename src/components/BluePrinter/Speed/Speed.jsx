import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Speed.css';

const Speed = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const controls = useAnimation();

  const speedVariants = {
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
      className="speed__container"
      initial="hidden" 
      animate={controls} 
      variants={speedVariants}
      ref={ref}
    >
      <motion.div className="speed__left" variants={itemVariants(1)}>
        <motion.h1 className="speed__title" variants={itemVariants(1.2)}>
          Скорость печати
        </motion.h1>
        <motion.p className="speed__description" variants={itemVariants(1.4)}>
          Благодаря съёмному модулю печатной платформы становится удобно снимать отпечатки с рабочей зоны, минимизируется загрязнение рабочего пространства и исключается риск нарушения позиционирования
        </motion.p>
      </motion.div>
      <motion.img 
        className="speed__image" 
        src='../../../../public/SpeedImage.png' 
        alt="Speed" 
        variants={itemVariants(1.6)}
      />
    </motion.div>
  );
};

export default Speed;
