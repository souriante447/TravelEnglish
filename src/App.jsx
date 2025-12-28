import React, { useState, useEffect } from 'react';

import './styles.css';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    const runway = document.querySelector('.runway-lights');
    if (runway && runway.children.length === 0) {
      const colors = ['blue', 'gold', 'orange'];
      for (let i = 0; i < 15; i++) {
        const light = document.createElement('div');
        light.className = `light ${colors[Math.floor(Math.random() * 3)]}`;
        light.style.left = `${5 + Math.random() * 90}%`;
        light.style.top = `${5 + Math.random() * 90}%`;
        light.style.animationDelay = `${Math.random() * 3}s`;
        runway.appendChild(light);
      }
    }
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Пожалуйста, заполните ФИО и телефон.');
      return;
    }
    alert(`Спасибо, ${formData.name}!\nВаша заявка принята. Я свяжусь с вами по телефону ${formData.phone} в ближайшее время.`);
    closeModal();
    setFormData({ name: '', phone: '', message: '' });
  };

  const program = [
    { title: "Аэропорт без стресса", desc: "Регистрация, паспортный контроль, вопросы на таможне — всё на английском. Уверенность уже в первые часы за границей." },
    { title: "В отеле: заселение и помощь", desc: "Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi. Практика вежливых фраз и повседневной лексики." },
    { title: "Кафе и рестораны", desc: "Заказ еды, вопросы про аллергены, счёт и чаевые. Развитие гастрономического словаря и уверенности в общении." },
    { title: "На улице: ориентирование и просьбы", desc: "Как спросить дорогу, вызвать такси или найти аптеку. Понимание устной речи и произношения в реальных ситуациях." },
    { title: "Экстренные случаи", desc: "Потеря вещей, болезнь, помощь полиции — всё это на английском. Важные фразы, которые могут спасти отпуск." },
    { title: "Туризм и развлечения", desc: "Покупка билетов, экскурсии, общение с гидами, музеи и парки. Погружение в культурный контекст через язык." },
    { title: "Туризм и развлечения (продвинутый)", desc: "Музеи, театры, фестивали — как обсуждать искусство и культуру на английском." }, // ✅ исправил дубль
    { title: "Туризм и развлечения (экотуризм)", desc: "Походы, заповедники, экологические туры — природная лексика и этичное общение." }, // ✅ исправил дубль
    { title: "Дружба в путешествиях", desc: "Как познакомиться с другими детьми или подростками за границей. Игровая практика диалогов и неформального общения." },
    { title: "Дипломный проект: 'Мой идеальный отпуск'", desc: "Ребёнок планирует воображаемое путешествие и представляет его на английском. Развитие связной речи и творческого самовыражения." }
  ];

  return (
    <div className="travel-theme">
      <div className="runway-lights"></div>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1>Курс «Английский для путешествий»</h1>
          <div className="hero-subtitle">Как говорить по-английски в поездках уверенно, спокойно и без страха</div>
          <p className="hero-desc">
            Мечтаете свободно общаться за границей — от заказа кофе до поиска утраченного чемодана? Этот курс научит вашего ребёнка реальному разговорному английскому, который пригодится в отпуске, поездках и будущих путешествиях!
          </p>
          <div className="hero-btns">
            <button className="btn btn-primary">Подробнее о курсе</button>
            <button className="btn btn-secondary" onClick={openModal}>Записаться</button>
          </div>
        </div>
      </section>

      {/* Level & Requirements */}
      <section style={{ background: 'rgba(15, 22, 40, 0.4)' }}>
        <div className="container">
          <div className="level-req-row">
            <div className="level-card">
              <h3 className="card-title">Уровень</h3>
              <p>Курс подойдёт тем, кто:</p>
              <ul className="level-list">
                <li>знает базовую грамматику (Present/Past/Future Simple, модальные глаголы),</li>
                <li>имеет словарный запас ~800–1500 слов,</li>
                <li>может построить простое предложение, но теряется в реальном диалоге.</li>
              </ul>
            </div>

            <div className="req-card">
              <h3 className="card-title">Что потребуется</h3>
              <ul className="req-list">
                <li>Устройство с камерой и микрофоном</li>
                <li>Учебные материалы (выдам бесплатно)</li>
                <li>Готовность говорить. Даже если страшно 😊</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Special */}
      <section>
        <div className="container">
          <h2 className="section-title">✨ Почему этот курс особенный?</h2>
          <div className="why-grid">
            {[
              { icon: '💬', title: 'Только живая речь', desc: 'Никаких скучных упражнений из учебника' },
              { icon: '🌍', title: 'Реальные ситуации', desc: 'От check-in до спора с таксистом' },
              { icon: '🔄', title: 'Обратная связь в моменте', desc: 'Коррекция произношения, интонации, лексики' },
              { icon: '🎁', title: 'Материалы на всю жизнь', desc: 'Чек-листы, фразы, шпаргалки в PDF' }
            ].map((item, i) => (
              <div className="why-card" key={i}>
                <div className="why-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program */}
      <section className="program-section">
        <div className="container">
          <h2 className="section-title">Программа курса</h2>
          {program.map((item, i) => (
            <div className="program-item" key={i}>
              <div>
                <span className="program-number">{i + 1}.</span>
                <span className="program-title">{item.title}</span>
              </div>
              <p className="program-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Schedule & Price */}
      <section style={{ background: 'rgba(15, 22, 40, 0.5)' }}>
        <div className="container">
          <h2 className="section-title">Расписание и стоимость</h2>
          <div className="schedule-price-row">
            <div className="schedule-col">
              <h3 className="card-title">Расписание</h3>
              <ul className="schedule-list">
                <li>Группа 1: Пн/Ср, 18:00–19:00</li>
                <li>Группа 2: Вт/Чт, 17:00–18:00</li>
                <li>Индивидуальные — по договорённости</li>
              </ul>
            </div>

            <div className="price-col">
              <h3 className="card-title">Стоимость</h3>
              <ul className="price-list">
                <li>
                  <div className="price-item">
                    <span>Пробное занятие / знакомство</span>
                    <span className="price-amount">500₽</span>
                  </div>
                  <span className="price-note">30 минут</span>
                </li>
                <li>
                  <div className="price-item">
                    <span>Полный курс (10 уроков)</span>
                    <span className="price-amount">12 000₽</span>
                  </div>
                  <span className="price-note">по 60 минут</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section>
        <div className="container">
          <div className="final-cta">
            <p>Группы маленькие — максимум 6 детей, чтобы каждый получил внимание.<br />Места ограничены! Запишитесь сейчас — и следующее путешествие станет первым, где ваш ребёнок заговорит по-английски без страха.</p>
            <button className="cta-btn" onClick={openModal}>
              Записаться на курс
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className="modal-overlay" 
          onClick={closeModal}
          onKeyDown={(e) => e.key === 'Escape' && closeModal()}
          tabIndex="-1"
        >
          <div 
            className="modal" 
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={closeModal} aria-label="Закрыть">&times;</button>
            <h3>Запись на курс</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">ФИО *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Телефон *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-control"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+7"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Сообщение (необязательно)</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Например: возраст ребёнка, цели, пожелания"
                />
              </div>
              <button type="submit" className="submit-btn">
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}