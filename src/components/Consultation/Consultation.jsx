import { useState } from 'react'
import './Consultation.css'
import axios from 'axios'

const Consultation = () => {
  const [form, setForm] = useState({
    email: "",
    name: "",
    phone: "",
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({...form, [name]: value})
  }

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
  }

  return (
    <div id="contacts" className="consultation">
      <h1>Получи консультацию онлайн</h1>

      <form className="consultation__form" onSubmit={handleSubmit}>
        <input 
          type="email" 
          name="email" 
          value={form.email} 
          onChange={handleChange} 
          placeholder="Электронная почта" 
          required 
        />
        <input 
          type="text" 
          name="name" 
          value={form.name} 
          onChange={handleChange} 
          placeholder="Имя" 
          required 
        />
        <input 
          type="tel"  
          name="phone" 
          value={form.phone} 
          onChange={handleChange} 
          placeholder="Телефон" 
          required 
        />
        <button type="submit" className="consultation__button">Оставить заявку</button>
      </form>
      <p><sup>*</sup>Я соглашаюсь на обработку персональных данных</p>
    </div>
  )
}

export default Consultation
