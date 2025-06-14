

import { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    try {
      // const response = await fetch('http://localhost:3001/send-message',{ Заменить your-backend-domain.com на адрес сервера Railway с подключённым доменом или временным .railway.app.

 
      const response = await fetch(`${process.env.REACT_APP_API_URL}/send-message`, {

      
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, message }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('✅ Заявка отправлена!');
        setName('');
        setPhone('');
        setMessage('');
      } else {
        setStatus('❌ Ошибка при отправке.');
      }
    } catch {
      setStatus('❌ Сервер не отвечает.');
    }
  };

  return (
    <form className='contact-form' id='contact-form' onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Ваше имя"
        required
      />
      <input
        type="tel"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        placeholder="Ваш номер телефона"
        required
      />
      <textarea
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder="Комментарий (необязательно)"
      />
      <button type="submit">Отправить</button>
      {status && <p>{status}</p>}
    </form>
  );
};

export default ContactForm;
