import './Price.css';

const Price = () => (
  <section className="section">
    <h2>💰 Стоимость участия — 789 €</h2>
    <p>Включено:</p>
    <ul>
      <li><span className="check">✔</span> Проживание 4 ночи</li>
      <li><span className="check">✔</span> Полное питание</li>
      <li><span className="check">✔</span> Все практики и материалы</li>
      <li><span className="check">✔</span> Индивидуальная консультация</li>
    </ul>
    <p>Дополнительно оплачивается:</p>
    <ul>
      <li><span className="cross">✘</span> Авиаперелёт</li>
      <li><span className="cross">✘</span> Трансферы</li>
      <li><span className="cross">✘</span> Экскурсии по выбору</li>
    </ul>
    <p>👥 Камерная группа — всего 12 участников</p>
    <p>Уютно. Глубоко. По-настоящему.</p>
  </section>
);

export default Price;

  