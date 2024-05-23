import { useState, useEffect } from "react";
import { QuestionData } from "../../../data/data";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import down from '../../../../public/chevron-down.png';
import './Question.css';

const Questions = () => {
  const [showAnswers, setShowAnswers] = useState({});

  const toggleQuestion = (index) => {
    setShowAnswers((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const controls = useAnimation();

  const questionVariants = (delay = 0) => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay } },
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div className="questions__wrapper">
        <motion.div 
          className="questions"
          initial="hidden"
          animate={controls}
          variants={questionVariants(2)}
          ref={ref}
        >
            <div className="questions__header">
                <motion.h1 variants={questionVariants(1.2)}>Ответы на вопросы</motion.h1>
            </div>
            <div className="questions__content">
                {
                QuestionData.map((item, index) => (
                    <motion.div key={index} className="question_item" variants={questionVariants(2 + (index * 0.3))}>
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
                                <motion.li 
                                  key={ansIndex} 
                                  className="question__answer"
                                  variants={questionVariants}
                                >
                                  {answer}
                                </motion.li>
                            ))}
                            </ul>
                        </div>
                        )
                    }
                    </motion.div>
                ))
                }
            </div>
        </motion.div>
        <motion.div 
          className="question__description--wrapper"
          variants={questionVariants(5)}
        >
          <p className="question__description"><sup>*</sup>Большая часть проблем связана с фотополимером. Смените смолу на более новую или, рекомендованную производителем!</p>
        </motion.div>
    </div>
  );
};

export default Questions;
