import React from "react";

const Services = () => {
  return (
    <section
      className="services"
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "rgba(238, 238, 238, 1)",
      }}
    >
      <div className="services-inner" style={{ width: 1129 }}>
        <h2 style={{ textAlign: "center", fontSize: 48 }}>
          Производство одежды
          <br />
          для компаний, брендов,
          <br />
          артистов
        </h2>
        <p
          style={{
            fontSize: 16,
            textAlign: "center",
            marginBottom: 80,
          }}
        >
          Наша команда по разработке и производству одежды может реализовать
          проекты любой сложности, независимо от их масштаба. Мы можем взять на
          себя всю работу под ключ, или решить конкретные задачи на любом из
          этапов производства.
        </p>
        <div
          className="services-list"
          style={{
            marginBottom: 130,
            display: "flex",
            gap: 34,
          }}
        >
          <div className="services-list__element" style={{ width: 350 }}>
            <img src="/images/service_element1.png" alt="Разработка лекал" />
            <h3 style={{ textAlign: "center", fontSize: 20 }}>
              Разработка лекал и<br />
              дизайна
            </h3>
            <p style={{ textAlign: "center", fontSize: 16 }}>
              Поможем создать уникальные лекала для вашей одежды или
              адаптировать уже имеющиеся. Разработаем индивидуальный дизайн
              ваших товаров.
            </p>
          </div>
          <div className="services-list__element" style={{ width: 350 }}>
            <img src="/images/service_element2.png" alt="Пошив одежды" />
            <h3 style={{ textAlign: "center", fontSize: 20 }}>
              Пошив одежды
              <br />
              на заказ
            </h3>
            <p style={{ textAlign: "center", fontSize: 16 }}>
              Пошив трикотажных изделий любой сложности и в любых объемах, как
              по вашим образцам, так и по нашим базовым лекалам.
            </p>
          </div>
          <div className="services-list__element" style={{ width: 350 }}>
            <img
              src="/images/service_element3.png"
              alt="Бренд одежды под ключ"
            />
            <h3 style={{ textAlign: "center", fontSize: 20 }}>
              Бренд одежды
              <br />
              под ключ
            </h3>
            <p style={{ textAlign: "center", fontSize: 16 }}>
              Поможем разработать линейку одежды для вашего бренда, от пошива до
              реализации.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
