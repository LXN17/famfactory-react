import React from "react";

const Header = () => {
  return (
    <header class="header">
      <div class="header-inner">
        <nav class="header-navigation">
          <div class="header-navigation__left">
            <a href="tel:+79253431696">+7 925 343 16 96</a>
            <a href="">Перезвоните мне</a>
          </div>
          <div class="header-navigation__center">
            <a href="#">
              <h1>FAMFACTORY</h1>
            </a>
            <p>ШВЕЙНАЯ ФАБРИКА</p>
          </div>
          <div class="header-navigation__right">
            <a href="mailto:MAIL@FAMFACTORY.RU">MAIL@FAMFACTORY.RU</a>
            <p>Наша почта</p>
          </div>
        </nav>
        <p class="header-inner_description">
          Сделано
          <br />в Санкт-Петербурге
        </p>
        <button class="header-inner__button yellow-button">
          Отправить запрос
        </button>
      </div>
    </header>
  );
};

export default Header;
