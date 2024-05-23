import { useEffect } from 'react';
import Slider from 'react-slick';
import { galleryData } from '../../../data/data';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Gallery.css';

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

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
    <motion.div 
      className="gallery--home" 
      initial="hidden" 
      animate={controls} 
      variants={pricingVariants}
      ref={ref}
    >
      <motion.h1 variants={containerVariants(2)}>Галерея</motion.h1>
      <motion.div variants={containerVariants(2.4)} className="separator--home"></motion.div>
      <Slider {...settings}>
        {galleryData.map((image, index) => (
          <motion.div 
            key={image.id} 
            className="gallery-item--home"
            variants={containerVariants(2.5 + index * 0.5)}
          >
            <img src={image.src} alt={`Gallery ${image.id}`} className="gallery-image--home" />
          </motion.div>
        ))}
      </Slider>
    </motion.div>
  );
};

export default Gallery;
