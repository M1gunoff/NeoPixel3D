import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import RedInterface1 from '../../../../public/RedInterface1.png'
import RedInterface2 from '../../../../public/RedInterface2.png'
import RedInterface3 from '../../../../public/Blue3.png'
import './RedInterface.css';

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
    <motion.div className="interface__container" initial="hidden" animate={controls} variants={interfaceVariants} ref={ref}>
        <motion.div variants={itemVariants(0.5)} className="interface__left">
            <motion.h1 variants={itemVariants(0.7)} className="interface__title">Понятный интерфейс управления</motion.h1>
            <motion.p variants={itemVariants(0.9)} className="interface__description">Позволит ускорить процесс обмена данными и сделать вашу работу еще комфортнее. Не имея опыта и знаний о данном виде печати, вы беспрепятственно сможете приступить к работе после ознакомления инструкции</motion.p>
            <motion.a variants={itemVariants(1.1)} href="#contacts" className="interface__button--red">Заказать</motion.a>
        </motion.div>
        <motion.div variants={itemVariants(1.3)} className="interface__right">
            <motion.img variants={itemVariants(1.5)} className="interface__image" src={RedInterface1}/>
            <motion.img variants={itemVariants(1.7)} className="interface__image" src={RedInterface2}/> 
            <motion.img variants={itemVariants(1.9)} className="interface__image" src={RedInterface3}/> 
        </motion.div>
    </motion.div>
  )
}

export default Interface;
