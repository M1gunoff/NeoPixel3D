import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import QualityImage from '../../../../public/QualityImage.png'
import './RedQuality.css';


const Quality = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
      });
    
      const controls = useAnimation();
    
      const qualityVariants = {
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
    <motion.div className="quality__container" initial="hidden" animate={controls} variants={qualityVariants} ref={ref}>
        <motion.div variants={itemVariants(0.5)} className="quality__left">
            <motion.h1 variants={itemVariants(0.7)} className="quality__title">Премиальное качество печати</motion.h1>
            <motion.p variants={itemVariants(0.9)} className="quality__description">4K Mono LCD обеспечивает беспрецедентный уровень качества получаемого изделия</motion.p>
            <motion.a  variants={itemVariants(1.1)} href="#contacts" className="quality__button--red">Заказать</motion.a>
        </motion.div>
        <motion.img variants={itemVariants(1.3)} className="quality__image" src={QualityImage} alt="Quality Image"/>
    </motion.div>
  )
}

export default Quality
