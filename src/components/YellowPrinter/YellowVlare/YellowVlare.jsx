import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import VlareImage1 from '../../../../public/VlareImage.png';
import './YellowVlare.css';

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
    <motion.div 
      className="vlare__container"
      initial="hidden" 
      animate={controls} 
      variants={vlareVariants}
      ref={ref}
    >
      <motion.div className="vlare__left" variants={itemVariants(0.5)}>
        <motion.h1 className="vlare__title--yellow" variants={itemVariants(0.7)}>
          Vlare Slicer
        </motion.h1>
        <motion.p className="vlare__description" variants={itemVariants(0.9)}>
          Сервис подготовки модели Vlare Slicer облегчает процесс подготовки модели к печати
        </motion.p>
      </motion.div>
      <motion.div className="vlare__right" variants={itemVariants(1.1)}>
        <motion.img 
          className="vlare__image" 
          src={VlareImage1}
          alt="Vlare Slicer"
          variants={itemVariants(1.3)}
        />
      </motion.div>
    </motion.div>
  );
}

export default Vlare;
