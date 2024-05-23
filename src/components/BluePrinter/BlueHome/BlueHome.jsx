import {useEffect} from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './BlueHome.css'

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
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div className="home__container" animate={controls} variants={pricingVariants} ref={ref} initial="hidden">
    <motion.h1 variants={containerVariants(1)}>Neopixel <motion.span variants={containerVariants(1.4)} className="home__titleBlue">Sapphire</motion.span></motion.h1>
      <motion.span variants={containerVariants(2)} className="home__description">
          <motion.p variants={containerVariants(2.5)}>Фотополимерный 3D принтер повышенной точности NeоPixel</motion.p>
          <motion.div variants={containerVariants(3)} className="home__button__wrapper">
              <motion.a href="#contacts" className="home__button">Заказать</motion.a>
          </motion.div>
      </motion.span>
    </motion.div>
  )
}

export default Home
