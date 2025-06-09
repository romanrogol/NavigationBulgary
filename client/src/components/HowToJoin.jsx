// const HowToJoin = () => (
//     <section className="section">
//       <h2>📲 Как записаться?</h2>
//       <ol>
//         <li>Заполните заявку ниже</li>
//         <li>Внесите предоплату — 200 €</li>
//         <li>Получили подтверждение — и начинаем готовиться к путешествию самостоятельно.</li>
//       </ol>
//       <a href="#contact-form" className="cta-button">👉 <strong>Оставить заявку</strong></a>
//       <p>💬 Остались вопросы? Напишите нам в Telegram или WhatsApp</p>
//     </section>
//   );
  
//   export default HowToJoin;
  
import { useEffect, useState } from 'react';

const TELEGRAM_GROUP_LINK = 'https://t.me/+zfIlZv5iZjlkOTQy';

const HowToJoin = () => {
  const [qrUrl, setQrUrl] = useState('');

  useEffect(() => {
    const encodedUrl = encodeURIComponent(TELEGRAM_GROUP_LINK);
    setQrUrl(`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodedUrl}`);
  }, []);

  return (
    <section className="section">
      <h2>📲 Как записаться?</h2>
      <ol>
        <li>Заполните заявку ниже</li>
        <li>Внесите предоплату — 200 €</li>
        <li>Получили подтверждение — и начинаем готовиться к путешествию самостоятельно.</li>
      </ol>
      <a href="#contact-form" className="cta-button">👉 <strong>Оставить заявку</strong></a>
      <p>💬 Остались вопросы? Напишите нам в Telegram или WhatsApp</p>

      <div style={{ marginTop: '1.5rem' }}>
  <p style={{ textAlign: 'left' }}>
    📱 Сканируйте QR-код, чтобы перейти в Telegram-группу:
  </p>
  <div style={{ textAlign: 'center' }}>
    <a href={TELEGRAM_GROUP_LINK} target="_blank" rel="noopener noreferrer">
      <img src={qrUrl} alt="Telegram Group QR Code" />
    </a>
  </div>
</div>
    </section>
  );
};

export default HowToJoin;
