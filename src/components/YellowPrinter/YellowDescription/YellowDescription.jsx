import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './YellowDescription.css';

const YellowDescription = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const controls = useAnimation();

  const containerVariants = {
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
    <motion.div className="yellowDescription" animate={controls} initial="hidden" variants={containerVariants} ref={ref}>
      <motion.h1 variants={itemVariants(0.5)}>Описание Модели</motion.h1>
      <motion.ul className="yellowDescription__list">
        <motion.li className="yellowDescription__item" variants={itemVariants(1)}>
          Эргономичный внешний вид, превосходное качество и высокая скорость печати, все это делает продукт по истине уникальным и многофункциональным.
        </motion.li>
        <motion.li className="yellowDescription__item" variants={itemVariants(1.2)}>
          Понятный интерфейс управления оснащенный полноцветный сенсорным экраном 3,5 дюйма обеспечивает удобство использования устройства.
        </motion.li>
        <motion.li className="yellowDescription__item" variants={itemVariants(1.4)}>
          Устройство адаптировано к работе к такими операционными системами как Windows и MacOS. Флэш накопитель типа type-c сочетает в себе удобство и комфорт, вы можете использовать порт типа USB-B или же USB-С, при этом вам больше не придется искать переходник в случае отсутствия нужного порта на устройстве
        </motion.li>
      </motion.ul>
    </motion.div>
  );
}

export default YellowDescription;
