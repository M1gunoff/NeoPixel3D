import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './RedVlare.css'

const Vlare = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
      });
    
      const controls = useAnimation();
    
      const vlareVariants = {
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
        <motion.div className="vlare__container" initial="hidden" animate={controls} variants={vlareVariants} ref={ref}>
            <motion.div variants={itemVariants(0.5)} className="vlare__left">
                <motion.h1 variants={itemVariants(0.7)} className="vlare__title--red">Vlare Slicer</motion.h1>
                <motion.p variants={itemVariants(0.9)} className="vlare__description">Сервис подготовки модели Vlare Slicer облегчает процесс подготовки модели к печати</motion.p>
            </motion.div>
            <motion.div variants={itemVariants(1.1)} className="vlare__right">
            <motion.img variants={itemVariants(1.3)} className="vlare__image" src='../../../../public/VlareImage.png'/>
            </motion.div>
        </motion.div>
      )
}

export default Vlare
