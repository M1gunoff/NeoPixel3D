import { useState, useEffect } from 'react';
import './Consultation.css';
import axios from 'axios';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Consultation = () => {
  const [form, setForm] = useState({
    email: "",
    name: "",
    phone: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({...form, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post('https://sheet.best/api/sheets/75959467-3ea7-4f7b-913b-25baee5ff149', form)
    .then((response) => {
      console.log(response);
      setForm({
        email: "",
        name: "",
        phone: "",
      });
    });
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const controls = useAnimation();

  const formVariants = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        staggerChildren: 0.2,
        delay,
        duration: 1.2,
      },
    },
  });

  const inputVariants = (delay = 0) => ({
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', duration: 0.8, delay } },
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div 
      id="contacts" 
      className="consultation" 
      initial="hidden" 
      animate={controls} 
      variants={formVariants(1)} 
      ref={ref}
    >
      <motion.h1 variants={inputVariants(2)}>Получи консультацию онлайн</motion.h1>

      <motion.form 
        className="consultation__form" 
        onSubmit={handleSubmit} 
        variants={formVariants(2.2)}
      >
        <motion.input 
          type="email" 
          name="email" 
          value={form.email} 
          onChange={handleChange} 
          placeholder="Электронная почта" 
          required 
          variants={inputVariants(2.4)}
        />
        <motion.input 
          type="text" 
          name="name" 
          value={form.name} 
          onChange={handleChange} 
          placeholder="Имя" 
          required 
          variants={inputVariants(2.6)}
        />
        <motion.input 
          type="tel"  
          name="phone" 
          value={form.phone} 
          onChange={handleChange} 
          placeholder="Телефон" 
          required 
          variants={inputVariants(2.8)}
        />
        <motion.button 
          type="submit" 
          className="consultation__button" 
          variants={inputVariants(3)}
        >
          Оставить заявку
        </motion.button>
      </motion.form>
      <motion.p variants={inputVariants(3.2)}>
        <sup>*</sup>Я соглашаюсь на обработку персональных данных
      </motion.p>
    </motion.div>
  );
}

export default Consultation;
