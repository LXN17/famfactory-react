import React from "react";

const Prices = () => {
  return (
    <section
      className="prices"
      style={{ marginTop: 120, display: "flex", justifyContent: "center" }}
    >
      <div className="prices-inner">
        <h2 style={{ fontSize: 42, textAlign: "center" }}>
          Современный <br />
          мерчендайз для бизнеса
        </h2>
        <p style={{ fontSize: 16, textAlign: "center" }}>
          Над реализацией проектов по разработке и производству одежды и
          аксессуаров трудится огромная команда профессионалов, поэтому мы можем
          создавать проекты любой сложности и масштабов под ключ или воплотить
          конкретные задачи на любом из этапов производства.
        </p>
        <div className="prices-inner__categories">
          {[
            { src: "../images/hoodie.png", text: "Худи от 1650 ₽" },
            { src: "../images/tshirt.png", text: "Футболки от 510 ₽" },
            { src: "../images/svitshot.png", text: "Свитшоты от 890 ₽" },
            { src: "../images/trousers.png", text: "Штаны от 1230 ₽" },
            { src: "../images/bag.png", text: "Шопперы от 330 ₽" },
            { src: "../images/cap.png", text: "Кепки от 400 ₽" },
          ].map((item, index) => (
            <div className="prices-card" key={index}>
              <div className="prices-card__top">
                <img src={item.src} alt={item.text} />
              </div>
              <div className="prices-card__bottom">
                <p style={{ fontSize: 24 }}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prices;
