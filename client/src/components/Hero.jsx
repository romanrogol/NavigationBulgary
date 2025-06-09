import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => (
  <motion.section 
    className="hero"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    id="hero"
  >
    {/* Фоновое видео */}
    <video autoPlay muted loop className="background-video">
      <source src="/bg-video.mp4" type="video/mp4" />
      Ваш браузер не поддерживает видео.
    </video>

    {/* Контент */}
    <div className="hero-content">
      <h1>🌿 «НавигациЯ» — тренинг-путешествие в Болгарии</h1>
      <p className="sub"><strong>Для тех, кто выбирает жизнь</strong></p>
      <p className="date-location">📍 13–17 сентября 2025 г.</p>
      <p> Приморско, Болгария</p>
      <p><strong>Есть места, где шум уходит. Где начинается настоящее. <br/>
      Где дыхание становится глубже, голос сердца — слышнее.</strong></p>
      <p>Это не просто отпуск. Это возвращение к себе.</p>
      <p>Без ролей. Без суеты. Без давления.</p>

      <a href="#contact-form" className="cta-button">👉 Записаться сейчас</a>
    </div>
  </motion.section>
);

export default Hero;

