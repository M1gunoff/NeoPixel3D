import { useEffect, useState } from 'react';
import css from './Header.module.css';
import logo from '../../../../public/Group.png';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // New state for menu

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const controls = useAnimation();

  const headerVariants = (delay = 0) => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay} },
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <motion.div className={`${css.header__container} ${isFixed ? css.header__fixed : ''}`} initial="hidden"
    animate={controls}
    variants={headerVariants(0.5)}
    ref={ref}>
      <motion.img className={css.header__image} variants={headerVariants(0.6)} src={logo} width={453} height={40} alt="logotype" />
      <nav className={`${css.header__navbarItems} ${menuOpen ? css.open : ''}`}>
        <motion.a variants={headerVariants(0.8)} href="#home" className={css.header__link} onClick={toggleMenu}>Главная</motion.a>
        <motion.a variants={headerVariants(0.85)} href="#printers" className={css.header__link} onClick={toggleMenu}>Принтеры</motion.a>
        <motion.a variants={headerVariants(0.9)} href="#events" className={css.header__link} onClick={toggleMenu}>Мероприятия</motion.a>
        <motion.a variants={headerVariants(0.95)} href="#contacts" className={css.header__link} onClick={toggleMenu}>Контакты</motion.a>
      </nav>
      {menuOpen ? <IoClose className={css.menu__close} onClick={toggleMenu}/> : <IoMenu className={css.menu__image} onClick={toggleMenu} />}
    </motion.div>
  );
};

export default Header;
