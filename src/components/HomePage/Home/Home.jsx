import {useEffect} from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import css from './Home.module.css'


const Home = () => {

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const controls = useAnimation();

  const pricingVariants = {
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

  const containerVariants = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', duration: 2, delay } },
  });

  useEffect(() => {
      controls.start('visible');
  }, [controls, inView]);

  return (
    <motion.div className={css.home__container} animate={controls} variants={pricingVariants} ref={ref} initial="hidden">
      <motion.h1 variants={containerVariants(1)}>Точность. <motion.span variants={containerVariants(1.4)} className={css.home__titleBlue}>Превосходство.</motion.span><br/><motion.span variants={containerVariants(1.8)}>Технологичность.</motion.span></motion.h1>
      <motion.span variants={containerVariants(2)} className={css.home__description}>
          <motion.p variants={containerVariants(2.5)}>Первый отечественный фотополимерный 3D-принтер повышенной точности</motion.p>
          <motion.div variants={containerVariants(3)} className={css.home__button__wrapper}>
              <a href="#contacts" className={css.home__button}>Заказать</a>
          </motion.div>
      </motion.span>
    </motion.div>
  )
}

export default Home
