import React from "react";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundColor: "rgba(25, 25, 25, 1)" }}
    >
      <div className="footer-inner" style={{ width: 1129, margin: "0 auto" }}>
        <nav
          className="footer-navigation"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 0",
          }}
        >
          <div
            className="footer-navigation__left"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <a style={{ color: "white", fontSize: 14 }} href="tel:+79253431696">
              +7 925 343 16 96
            </a>
            <a style={{ color: "white", fontSize: 14 }} href="#">
              Перезвоните мне
            </a>
          </div>
          <div
            className="footer-navigation__center"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a style={{ color: "white", textDecoration: "none" }} href="#">
              <h4 style={{ fontSize: 25, margin: 0 }}>FAMFACTORY</h4>
            </a>
            <p style={{ color: "white", fontSize: 16 }}>
              швейная фабрика в Санкт-Петербурге
            </p>
          </div>
          <div
            className="footer-navigation__right"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a
              style={{ color: "white", fontSize: 14 }}
              href="mailto:MAIL@FAMFACTORY.RU"
            >
              MAIL@FAMFACTORY.RU
            </a>
            <p style={{ color: "white", fontSize: 14 }}>Наша почта</p>
          </div>
        </nav>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 48 }}
        >
          <button className="footer-inner__button yellow-button">
            Отправить запрос
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
