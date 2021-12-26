import React from "react";
import { DoneIcon } from "../../icons";
import "./AppVerified.scss";

const dataItems = [
  {
    title: "Быстро.",
    description: "Быстрое голосование в два клика.",
  },
  {
    title: "Для чего нужна авторизация?",
    description: "Для защиты данного голосования от накрутки.",
  },
  {
    title: "Это безопасно?",
    description: "Да. Это официальное голосование ВКонтакте.",
  },
];

const AppVerified = () => {
  return (
    <div className="app-verified">
      <div className="app-verified__header">
        <div className="app-verified__header-title">
          Официальное голосование.
        </div>
        <div className="app-verified__header-description">
          Приложение официально подтверждено.
        </div>
      </div>
      <div className="app-verified__main">
        {dataItems.map((item, index) => {
          return (
            <div key={index} className="app-verified__main-item">
              <div className="item-icon">
                <DoneIcon />
              </div>
              <div>
                <div className="item-title">{item.title}</div>
                <div className="item-description">{item.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { AppVerified };
