import { useState, useEffect, useRef } from 'react';
import './FloatingQuestion.css';

const FloatingQuestion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [question, setQuestion] = useState('');
  const [status, setStatus] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  const formRef = useRef(null);

  const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

  // Обновление isMobile при изменении ширины окна
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 480);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Закрытие при клике вне формы
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && formRef.current && !formRef.current.contains(e.target)) {
        setIsOpen(false);
        setStatus(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    setStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    if (!name.trim() || !phone.trim() || !question.trim()) {
      setStatus('❗ Пожалуйста, заполните все поля.');
      return;
    }

    try {
      const response = await fetch(`${API_URL}/send-message`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, message: question }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('✅ Вопрос отправлен!');
        setName('');
        setPhone('');
        setQuestion('');

        setTimeout(() => {
          setIsOpen(false);
          setStatus(null);
        }, 5000);
      } else {
        setStatus('❌ Ошибка при отправке.');
      }
    } catch {
      setStatus('❌ Сервер недоступен.');
    }
  };

  return (
    <>
      <button className="floating-button" onClick={toggleOpen} aria-label="Задать вопрос">
        {isMobile ? '?' : 'Есть вопросы?'}
      </button>

      {isOpen && (
        <div className={`floating-form open`} ref={formRef}>
            <button className="close-button" onClick={() => setIsOpen(false)} aria-label="Закрыть">×</button>
          <h4 style={{ marginTop: 0 }}>Задать вопрос</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Ваше имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Телефон"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <textarea
              placeholder="Ваш вопрос"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              rows={4}
              required
            />
            <button type="submit">Отправить</button>
          </form>
          {status && (
            <p style={{ color: status.startsWith('✅') ? 'green' : 'red' }}>{status}</p>
          )}
        </div>
      )}
    </>
  );
};

export default FloatingQuestion;
