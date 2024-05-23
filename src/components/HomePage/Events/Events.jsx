import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { eventsData } from '../../../data/data';
import Arrow from './Arrow';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Events.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageClass, setImageClass] = useState('slider-image');

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: (current, next) => setCurrentSlide(next),
    nextArrow: <Arrow className="custom-arrow" direction="down" onClick={() => setCurrentSlide(currentSlide + 1)} />,
    prevArrow: <Arrow className="custom-arrow" direction="up" onClick={() => setCurrentSlide(currentSlide - 1)} />,
  };

  useEffect(() => {
    setImageClass('slider-image slider-image-enter');
    const timer = setTimeout(() => {
      setImageClass('slider-image');
    }, 500);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const controls = useAnimation();

  const containerVariants = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', duration: 2, delay }
    },
  });

  const listItemVariants = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', duration: 1 , delay} },
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div id="events" className="slider-container" initial="hidden" animate={controls} variants={containerVariants(1)} ref={ref}>
      <div className="slider-left">
        <motion.h1 variants={containerVariants(1.6)}>Мероприятия</motion.h1>
        <div className="slider-wrapper">
          <Slider {...settings} className="slider">
            {eventsData.map((event) => (
              <motion.div key={event.id} className="slider-item" variants={listItemVariants(2)}>
                <div className="event__first">
                  <date>{event.date}</date>
                  <h2>{event.title}</h2>
                  <span>{event.desc}</span>
                </div>
              </motion.div>
            ))}
          </Slider>
          <motion.div variants={containerVariants(2.1)} className="slider-controls">
            <div className="arrow-container">
              <div className="slider-counter">
                {currentSlide + 1}/{eventsData.length}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="slider-right">
        <motion.img
          src={eventsData[currentSlide].srl}
          alt="Event"
          width={739}
          height={517}
          className={imageClass}
          variants={listItemVariants(2.3)}
        />
      </div>
    </motion.div>
  );
};

export default SliderComponent;
