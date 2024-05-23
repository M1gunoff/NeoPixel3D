import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import VlareImage from '../../../../public/VlareImage.png'
import './Vlare.css'

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
        <motion.div initial="hidden" animate={controls} variants={vlareVariants} ref={ref} className="vlare__container">
            <motion.div variants={itemVariants(1)} className="vlare__left">
                <motion.h1 variants={itemVariants(1.2)} className="vlare__title">Vlare Slicer</motion.h1>
                <motion.p variants={itemVariants(1.4)} className="vlare__description">Сервис подготовки модели Vlare Slicer облегчает процесс подготовки модели к печати</motion.p>
            </motion.div>
            <motion.div variants={itemVariants(1.6)} className="vlare__right">
            <motion.img variants={itemVariants(1.8)} className="vlare__image" src={VlareImage}/>
            </motion.div>
        </motion.div>
      )
}

export default Vlare
