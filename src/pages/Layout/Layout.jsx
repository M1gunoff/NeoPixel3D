import css from './Layout.module.css';
import Header from '../../components/HomePage/Header/Header';
import Home from '../../components/HomePage/Home/Home';
import Application from '../../components/HomePage/Application/Application';
import Events from '../../components/HomePage/Events/Events';
import Gallery from '../../components/HomePage/Gallery/Gallery';
import Consultation from '../../components/HomePage/Consultation/Consultation';
import Questions from '../../components/HomePage/Questions/Questions';
import Footer from '../../components/HomePage/Footer/Footer';

const Layout = () => {
  return (
  <>
    <div id="home" className={css.layout}>
        <div className={css.layout__container}>
            <Header/>
            <Home/>
        </div>
    </div>
    <Application/>
    <Events/>
    <Gallery/>
    <Consultation/>
    <Questions/>
    <Footer/>
  </>
  )
}

export default Layout
