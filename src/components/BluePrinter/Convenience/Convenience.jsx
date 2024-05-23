import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ConvenienceImage from '../../../../public/ConvenienceImage.png';
import './Convenience.css';

const Convenience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const controls = useAnimation();

  const convenienceVariants = {
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
      className="convenience__container"
      initial="hidden" 
      animate={controls} 
      variants={convenienceVariants}
      ref={ref}
    >
      <motion.div className="convenience__left" variants={itemVariants(1.5)}>
        <motion.h1 className="convenience__title" variants={itemVariants(1.7)}>
          Удобство в каждом действии
        </motion.h1>
        <motion.p className="convenience__description" variants={itemVariants(1.9)}>
          Комплектация включает набор для первого запуска печати: смола, перчатки и жидкость для очистки модели от излишков материала.
        </motion.p>
        <motion.p className="convenience__description" variants={itemVariants(2.1)}>
          Устройство готово к работе сразу же после распаковки и не требует дополнительных настроек для первого пользования
        </motion.p>
      </motion.div>
      <motion.img 
        className="convenience__image" 
        src={ConvenienceImage} 
        alt="Convenience" 
        variants={itemVariants(2.3)}
      />
    </motion.div>
  );
};

export default Convenience;
