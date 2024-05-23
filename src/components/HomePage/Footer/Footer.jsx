import { useEffect } from 'react';
import { FiPhone } from "react-icons/fi";
import { LuMailPlus } from "react-icons/lu";
import { IoLogoInstagram } from "react-icons/io5";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Footer.css';

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const controls = useAnimation();

  const footerVariants = (delay = 0) => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay } },
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="footer--home"
      initial="hidden"
      animate={controls}
      variants={footerVariants(0.5)}
      ref={ref}
    >
      <motion.h1 variants={footerVariants(1)} className="footer__title--home primary">Несравнимый аналог.</motion.h1>
      <motion.h1 variants={footerVariants(1.5)} className="footer__title--home second">Доступная цена</motion.h1>
      <div className="footer__contacts--home">
        <motion.div variants={footerVariants(1.8)} className="footer__contact--home">
          <FiPhone className="footer__icon--home"/>
          <p>8-985-192-48-93</p>
        </motion.div>
        <motion.div variants={footerVariants(2)} className="footer__contact--home">
          <LuMailPlus className="footer__icon--home"/>
          <p>max.bogush@mail.ru</p>
        </motion.div>
        <motion.div variants={footerVariants(2.2)} className="footer__contact--home">
          <IoLogoInstagram className="footer__icon--home"/>
          <p>@hide_3d</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Footer;
