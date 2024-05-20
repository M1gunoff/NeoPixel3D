import { useState } from "react";
import { QuestionData } from "../../data/data";
import down from '../../../public/chevron-down.png';
import './Question.css';

const Questions = () => {
  const [showAnswers, setShowAnswers] = useState({});

  const toggleQuestion = (index) => {
    setShowAnswers((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="questions__wrapper">
        <div className="questions">
            <div className="questions__header">
                <h1>Ответы на вопросы</h1>
            </div>
            <div className="questions__content">
                {
                QuestionData.map((item, index) => (
                    <div key={index} className="question_item">
                    <div className="question__header" onClick={() => toggleQuestion(index)}>
                        <h2 className="question__header--title">{item.question}</h2>
                        <button 
                        className={`question__header--icon ${showAnswers[index] ? 'rotate' : ''}`} 
                        style={{ backgroundImage: `url(${down})` }}>
                        </button>
                    </div>
                    {
                        showAnswers[index] && (
                        <div className="question__answers">
                            <ul>
                            {item.answers.map((answer, ansIndex) => (
                                <li key={ansIndex} className="question__answer">{answer}</li>
                            ))}
                            </ul>
                        </div>
                        )
                    }
                    </div>
                ))
                }
            </div>
        </div>
        <div className="question__description--wrapper">
                <p className="question__description"><sup>*</sup>Большая часть проблем связана с фотополимером. Смените смолу на более новую или, рекомендованную производителем!</p>
        </div>
    </div>
  );
};

export default Questions;
