import Slider from 'react-slick';
import { galleryData } from '../../data/data';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
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

  return (
    <div className="gallery">
      <h1>Галерея</h1>
      <div className="separator"></div>
      <Slider {...settings}>
        {galleryData.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={`Gallery ${image.id}`} className="gallery-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
