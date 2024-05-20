import css from './Layout.module.css';
import Header from '../../components/Header/Header';
import Home from '../../components/Home/Home';
import Application from '../../components/Application/Application';
import Events from '../../components/Events/Events';
import Gallery from '../../components/Gallery/Gallery';
import Consultation from '../../components/Consultation/Consultation';
import Questions from '../../components/Questions/Questions';
import Footer from '../../components/Footer/Footer';

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
