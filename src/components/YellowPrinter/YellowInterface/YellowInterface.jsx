import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './YellowInterface.css';

const Interface = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const controls = useAnimation();

  const interfaceVariants = {
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
      className="interface__container"
      initial="hidden" 
      animate={controls} 
      variants={interfaceVariants}
      ref={ref}
    >
      <motion.div className="interface__left" variants={itemVariants(0.5)}>
        <motion.h1 className="interface__title" variants={itemVariants(0.7)}>
          Понятный интерфейс управления
        </motion.h1>
        <motion.p className="interface__description" variants={itemVariants(0.9)}>
          Позволит ускорить процесс обмена данными и сделать вашу работу еще комфортнее. Не имея опыта и знаний о данном виде печати, вы беспрепятственно сможете приступить к работе после ознакомления инструкции
        </motion.p>
        <motion.a href="#contacts" className="interface__button--yellow" variants={itemVariants(1.1)}>
          Заказать
        </motion.a>
      </motion.div>
      <motion.div className="interface__right" variants={itemVariants(1.3)}>
        <motion.img 
          className="interface__image" 
          src='../../../../public/YellowInterface1.png' 
          alt="Interface Image 1"
          variants={itemVariants(1.5)}
        />
        <motion.img 
          className="interface__image" 
          src='../../../../public/YellowInterface2.png' 
          alt="Interface Image 2"
          variants={itemVariants(1.7)}
        /> 
        <motion.img 
          className="interface__image" 
          src='../../../../public/Blue3.png' 
          alt="Interface Image 3"
          variants={itemVariants(1.9)}
        /> 
      </motion.div>
    </motion.div>
  );
}

export default Interface;
