import './Application.css'
import printer__red from '../../../public/application__printer--red.png';
import printer__blue from '../../../public/application__printer--blue.png'
import printer__yellow from '../../../public/application__printer--yellow.png';

const Application = () => {
  return (
    <>
        <div id="printers" className="application__container">
                <h1 className="application__text--title">
                    Сферы применения
                </h1>

                <div className="application__text--description">
                    <p>Фотополимерная печать используется в тех отраслях, где подходит по следующим факторам: качество, точность построения, физические свойства и максимальные габариты создаваемого изделия</p>
                    <div className="application__text-list">
                        <ul>
                            <li className="application__text--item">ювилерное дело</li>
                            <li className="application__text--item">стоматология</li>
                            <li className="application__text--item">машиностроение</li>
                        </ul>
                        <ul>
                            <li className="application__text--item">медицина</li>
                            <li className="application__text--item">автомобилестроение</li>
                            <li className="application__text--item">архитектура</li>
                        </ul>
                        <ul>
                            <li className="application__text--item">прототипирование</li>
                            <li className="application__text--item">текстильная промышленность</li>
                            <li className="application__text--item">обувная промышленность</li>
                        </ul>
                    </div>
                </div>
        </div>
        <div className="cards">
        <div className="card printer__red">
          <div className="card__image-container">
            <img src={printer__red} className="card__image" alt="Ruby (R Lite / R Pro)" />
          </div>
          <div className="card__content">
            <h2>Ruby (R Lite / R Pro)</h2>
            <div className="card__content__actions">
                <a href="#">Подробнее</a>
                <a href="#contacts" className="card__button">Заказать</a>
            </div>
          </div>
        </div>
        <div className="card printer__blue">
          <div className="card__image-container">
            <img src={printer__blue} className="card__image" alt="Sapphire (S Lite / S Pro)" />
          </div>
          <div className="card__content">
            <h2>Sapphire (S Lite / S Pro)</h2>
            <div className="card__content__actions">
                <a href="#">Подробнее</a>
                <a href="#contacts" className="card__button">Заказать</a>
            </div>
          </div>
        </div>
        <div className="card printer__yellow">
          <div className="card__image-container">
            <img src={printer__yellow} className="card__image" alt="Heliodorus (H Lite / H Pro)" />
          </div>
          <div className="card__content">
            <h2>Heliodorus (H Lite / H Pro)</h2>
            <div className="card__content__actions">
                <a href="#">Подробнее</a>
                <a href="#contacts" className="card__button">Заказать</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Application
