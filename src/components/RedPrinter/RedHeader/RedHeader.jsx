import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './RedHeader.css';
import logo from '../../../../public/GroupRed.png';

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
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

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const headerOffset = 100; 
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    document.querySelectorAll('.header__link--red').forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        scrollToSection(targetId);
      });
    });
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const controls = useAnimation();

  const headerVariants = (delay = 0) => ({
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
      className={`header__container--red ${isFixed ? 'header__fixed--red' : ''}`} 
      initial="hidden"
      animate={controls}
      variants={headerVariants(0.5)}
      ref={ref}
    >
      <motion.img 
        variants={headerVariants(0.6)} 
        src={logo} 
        width={453} 
        height={40} 
        alt="logotype" 
      />
      <nav className="header__navbarItems--red">
        <motion.a 
          variants={headerVariants(0.8)} 
          href="#home" 
          className="header__link--red"
        >
          Главная
        </motion.a>
        <motion.a 
          variants={headerVariants(0.85)} 
          href="#characteristics" 
          className="header__link--red"
        >
          Характеристики
        </motion.a>
        <motion.a 
          variants={headerVariants(0.9)} 
          href="#spheres" 
          className="header__link--red"
        >
          Применение
        </motion.a>
        <motion.a 
          variants={headerVariants(0.95)} 
          href="#examples" 
          className="header__link--red"
        >
          Примеры
        </motion.a>
        <motion.a 
          variants={headerVariants(1)} 
          href="#contacts" 
          className="header__link--red"
        >
          Контакты
        </motion.a>
      </nav>
    </motion.div>
  );
  };    


export default Header;
