import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { eventsData } from '../../data/data';
import Arrow from './Arrow';
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
    nextArrow: <Arrow direction="down" onClick={() => setCurrentSlide(currentSlide + 1)} />,
    prevArrow: <Arrow direction="up" onClick={() => setCurrentSlide(currentSlide - 1)} />,
  };

  useEffect(() => {
    setImageClass('slider-image slider-image-enter');
    const timer = setTimeout(() => {
      setImageClass('slider-image');
    }, 500);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div id="events" className="slider-container">
      <div className="slider-left">
        <h1>Мероприятия</h1>
        <div className="slider-wrapper">
            <Slider {...settings} className="slider">
            {eventsData.map((event) => (
                <div key={event.id} className="slider-item">
                  <div className="event__first">
                    <date>{event.date}</date>
                    <h2>{event.title}</h2>
                    <span>{event.desc}</span>
                  </div>
                </div>
            ))}
            </Slider>
            <div className="slider-controls">
              <div className="arrow-container">
                <div className="slider-counter">
                  {currentSlide + 1}/{eventsData.length}
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className="slider-right">
        <img 
          src={eventsData[currentSlide].srl} 
          alt="Event" 
          width={739} 
          height={517} 
          className={imageClass} 
        />
      </div>
    </div>
  );
};

export default SliderComponent;

