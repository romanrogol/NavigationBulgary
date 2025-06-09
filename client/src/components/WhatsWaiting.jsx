import "./WhatsWaiting.css";

const WhatsWaiting = () => (
  <section className="section">
    <h2>💎 Что тебя ждёт?</h2>
    <ul className="waiting-list">
      <li className="waiting-item">
        <div className="waiting-row">
          <div className="waiting-image">
            <img src="/images/speakers/elena.jpg" alt="Елена Роголь" />
          </div>
          <div className="waiting-text">
            ✨ <strong>Телесные практики</strong> — глубокое заземление, расслабление, мягкий контакт с телом. <br />
            <strong>Ведущая:</strong> Елена Роголь — психолог, телесноориентированный психотерапевт, расстановщик, бизнес-тренер, специалист по методу Фельденкрайза.
          </div>
        </div>
      </li>

      <li className="waiting-item">
        <div className="waiting-row">
          <div className="waiting-image">
            <img src="/images/speakers/anna.jpg" alt="Анна Сеглина" />
          </div>
          <div className="waiting-text">
            🎨 <strong>Арт-терапия и нейрографика</strong> — арт-практики и игры, создание амулета силы. <br />
            <strong>Ведущая:</strong> Анна Сеглина – коуч PCC ICF, сертифицированный специалист, ученица Мэрилин Аткинсон, Джудит Луазье. Арт-терапевт, автор и ведущий трансформационных игр.
          </div>
        </div>
      </li>

      <li>💬 <strong>Индивидуальные консультации</strong> — каждый вечер пространство личной поддержки</li>
      <li>🌿 <strong>Природа как третий мастер</strong> — медитации, прогулки, тишина, море, скалы, пещеры</li>
    </ul>
  </section>
);

export default WhatsWaiting;
