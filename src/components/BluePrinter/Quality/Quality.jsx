import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import QualityImage1 from '../../../../public/QualityImage.png';
import './Quality.css';

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
    <motion.div 
      className="quality__container"
      initial="hidden" 
      animate={controls} 
      variants={qualityVariants}
      ref={ref}
    >
      <motion.div className="quality__left" variants={itemVariants(1)}>
        <motion.h1 className="quality__title" variants={itemVariants(1.7)}>
          Премиальное качество печати
        </motion.h1>
        <motion.p className="quality__description" variants={itemVariants(1.9)}>
          4K Mono LCD обеспечивает беспрецедентный уровень качества получаемого изделия
        </motion.p>
        <motion.a href="#contacts" className="quality__button" variants={itemVariants(2.1)}>
          Заказать
        </motion.a>
      </motion.div>
      <motion.img 
        className="quality__image" 
      src={QualityImage1}
        alt="Quality Image"
        variants={itemVariants(2.3)}
      />
    </motion.div>
  );
}

export default Quality;
