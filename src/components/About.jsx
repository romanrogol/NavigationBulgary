import { motion } from 'framer-motion';
import './About.css';

const About = () => (
  <motion.section
    id="about"
    className="about-section"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h2>🌱 О ЧЁМ ЭТО ПУТЕШЕСТВИЕ?</h2>

    <strong><p>О тебе. О возвращении к внутренней опоре. <br />О способностях твоего сердца и твоего тела.</p>

    <p>Мы приглашаем в путешествие тех, кто:</p>
    <ul>
      <li>— устал держаться на силе воли и хочет вернуться к своей аутентичной природе</li>
      <li>— стремится к ясности, внутренней опоре, но не знает с чего начать</li>
    </ul>

    <p>
      Эти 5 дней шаг за шагом будут вести тебя к цели мягко и уверенно.
      Мы соединим экологию и осознанные практики, чтобы ты услышал — это внутреннее «ДА» жизни.
    </p></strong>
  </motion.section>
);

export default About;
