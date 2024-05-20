import './Footer.css'
import { FiPhone } from "react-icons/fi";
import { LuMailPlus } from "react-icons/lu";
import { IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="footer">
        <h1 className="footer__title primary">Несравнимый аналог.</h1>
        <h1 className="footer__title second">Доступная цена</h1>
        <div className="footer__contacts">
          <div className="footer__contact">
            <FiPhone className="footer__icon"/>
            <p>8-985-192-48-93</p>
          </div>
          <div className="footer__contact">
            <LuMailPlus className="footer__icon"/>
            <p>max.bogush@mail.ru</p>
          </div>
          <div className="footer__contact">
           <IoLogoInstagram className="footer__icon"/>
           <p>@hide_3d</p>
          </div>
        </div>
    </div>
  )
}

export default Footer;
