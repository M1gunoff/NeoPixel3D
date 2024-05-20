import { useEffect, useState } from 'react';
import css from './Header.module.css';
import logo from '../../../public/Group.png';

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);

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

  return (
    <div className={`${css.header__container} ${isFixed ? css.header__fixed : ''}`}>
      <img src={logo} width={453} height={40} alt="logotype" />
      <nav className={css.header__navbarItems}>
        <a href="#home" className={css.header__link}>Главная</a>
        <a href="#printers" className={css.header__link}>Принтеры</a>
        <a href="#events" className={css.header__link}>Мероприятия</a>
        <a href="#contacts" className={css.header__link}>Контакты</a>
      </nav>
    </div>
  );
};

export default Header;
