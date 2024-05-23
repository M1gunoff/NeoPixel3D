import './PrinterFooter.css';
import { FiPhone } from "react-icons/fi";
import { LuMailPlus } from "react-icons/lu";
import { IoLogoInstagram } from "react-icons/io5";
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
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
    <motion.div className="footer" initial="hidden" animate={controls} variants={vlareVariants} ref={ref} >
      <div className="footer__contacts">
        <motion.div variants={itemVariants(2)} initial="hidden" animate="visible" className="footer__contact">
          <FiPhone className="footer__icon"/>
          <p>8-985-192-48-93</p>
        </motion.div>
        <motion.div variants={itemVariants(2.2)} initial="hidden" animate="visible" className="footer__contact">
          <LuMailPlus className="footer__icon"/>
          <p>max.bogush@mail.ru</p>
        </motion.div>
        <motion.div variants={itemVariants(2.4)} initial="hidden" animate="visible" className="footer__contact">
          <IoLogoInstagram className="footer__icon"/>
          <p>@hide_3d</p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Footer;
