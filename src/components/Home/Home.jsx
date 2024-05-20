import css from './Home.module.css'

const Home = () => {
  return (
    <div className={css.home__container}>
      <h1>Точность. <span className={css.home__titleBlue}>Превосходство.</span><br/>Технологичность.</h1>
      <span className={css.home__description}>
          <p>Первый отечественный фотополимерный 3D-принтер повышенной точности</p>
          <div className={css.home__button__wrapper}>
              <a href="#contacts" className={css.home__button}>Заказать</a>
          </div>
      </span>
    </div>
  )
}

export default Home
