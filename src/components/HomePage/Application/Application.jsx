import './Application.css';
import { useEffect } from 'react';
import printer__red from '../../../../public/application__printer--red.png';
import printer__blue from '../../../../public/application__printer--blue.png';
import printer__yellow from '../../../../public/application__printer--yellow.png';
import { NavLink } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Application = () => {
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
    <>
      <motion.div
        id="printers"
        className="application__container"
        initial="hidden"
        animate={controls}
        variants={pricingVariants}
        ref={ref}
      >
        <motion.h1 className="application__text--title" variants={containerVariants()}>
          Сферы применения
        </motion.h1>

        <div className="application__text--description">
          <motion.p variants={containerVariants(0.3)}>
            Фотополимерная печать используется в тех отраслях, где подходит по следующим факторам: качество, точность построения, физические свойства и максимальные габариты создаваемого изделия
          </motion.p>
          <div className="application__text-list">
            <ul>
              <motion.li variants={containerVariants(0.5)} className="application__text--item">ювилерное дело</motion.li>
              <motion.li variants={containerVariants(0.7)} className="application__text--item">стоматология</motion.li>
              <motion.li variants={containerVariants(0.9)} className="application__text--item">машиностроение</motion.li>
            </ul>
            <ul>
              <motion.li variants={containerVariants(1.1)} className="application__text--item">медицина</motion.li>
              <motion.li variants={containerVariants(1.3)} className="application__text--item">автомобилестроение</motion.li>
              <motion.li variants={containerVariants(1.5)} className="application__text--item">архитектура</motion.li>
            </ul>
            <ul>
              <motion.li variants={containerVariants(1.7)} className="application__text--item">прототипирование</motion.li>
              <motion.li variants={containerVariants(1.9)} className="application__text--item">текстильная промышленность</motion.li>
              <motion.li variants={containerVariants(2.1)} className="application__text--item">обувная промышленность</motion.li>
            </ul>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="cards"
        initial="hidden"
        animate={controls}
        variants={pricingVariants}
        ref={ref}
      >
        <motion.div className="card printer__red">
          <div className="card__image-container">
            <motion.img variants={containerVariants(0)} src={printer__red} className="card__image" alt="Ruby (R Lite / R Pro)" />
          </div>
          <div className="card__content">
            <motion.h2 variants={containerVariants(1)}>Ruby (R Lite / R Pro)</motion.h2>
            <NavLink className="card__content__actions" to="red" title={"Dashboard"}>
              <motion.a variants={containerVariants(1.2)} href="#" className="card__details">Подробнее</motion.a>
              <motion.a variants={containerVariants(1.4)} href="#contacts" className="card__button">Заказать</motion.a>
            </NavLink>
          </div>
        </motion.div>
        <motion.div className="card printer__blue">
          <div className="card__image-container">
            <motion.img variants={containerVariants(1.5)} src={printer__blue} className="card__image blue__image" alt="Sapphire (S Lite / S Pro)" />
          </div>
          <div className="card__content">
            <motion.h2 variants={containerVariants(2)}>Sapphire (S Lite / S Pro)</motion.h2>
            <NavLink className="card__content__actions" to="blue" title={"Dashboard"}>
              <motion.a variants={containerVariants(2.2)} href="#" className="card__details">Подробнее</motion.a>
              <motion.a variants={containerVariants(2.4)} href="#contacts" className="card__button">Заказать</motion.a>
            </NavLink>
          </div>
        </motion.div>
        <motion.div className="card printer__yellow">
          <div className="card__image-container">
            <motion.img variants={containerVariants(2.5)} src={printer__yellow} className="card__image yellow__image" alt="Heliodorus (H Lite / H Pro)" />
          </div>
          <div className="card__content">
            <motion.h2 variants={containerVariants(3.5)}>Heliodorus (H Lite / H Pro)</motion.h2>
            <NavLink className="card__content__actions" to="yellow" title={"YellowPrinter"}>
              <motion.a variants={containerVariants(3.7)} href="#" className="card__details">Подробнее</motion.a>
              <motion.a variants={containerVariants(3.9)} href="#contacts" className="card__button">Заказать</motion.a>
            </NavLink>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Application;
