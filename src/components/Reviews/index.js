import React from "react";
import { DoneIcon } from "../../icons";
import "./Reviews.scss";

const dataItems = [
  {
    img: "https://sun4-17.userapi.com/s/v1/ig2/2Ad6zyBV_voNeFZqI612aUln6khJZu9bEfrn5YD-yqoN2VHdPcOCHyy9TBvzMPi7SHa9oj-b2RH7wcMGoDgOnZvE.jpg?size=50x50&quality=96&crop=200,0,1200,1200&ava=1",
    name: "Ангелина Литвиненко",
    description: `OMG, сестра выйграла Спасибо всем!
    Я даже уже не надеялась , а тут она на первом месте`,
  },
  {
    img: "https://sun4-11.userapi.com/s/v1/ig2/r-tuLIf5weht-ao29Oo_Vop3jdD5j39voTV77orzeDUwcL8uURt8u6laembTFtB6JSeYKy2gJk-gixnwCLvIzVJt.jpg?size=50x50&quality=96&crop=0,0,785,785&ava=1",
    name: "Милена Головко",
    description: `Скажу за себя, думала что какой то 
    очередной развод пока меня подруга не заставила голосовать за не и ей приятно сделала и на шаву заработала`,
  },
  {
    img: "https://sun4-17.userapi.com/s/v1/ig2/iCWNfAVg5NXnVjA66HQ5O_zXNF76h6tOPgJyVz-J76q4EYidmlWJi8cnvgY5RoSse1ifDmb9zO4A5Z3tBi7vq_sa.jpg?size=50x50&quality=96&crop=0,0,1440,1440&ava=1",
    name: "Екатерина Андреева",
    description: `не могу проголосовать админ исправь`,
  },
  {
    img: "https://sun4-16.userapi.com/s/v1/ig2/kiM9_n5QO06WRoqdEvWD2QBussjwwNw6iFgPCMK72s1xuUXOLUaHDFN_NHCROd1i_6Uxb4LatYEXbT0yUSLaAKBQ.jpg?size=50x50&quality=96&crop=0,0,1456,1456&ava=1",
    name: "Марьяна Борисенко",
    description: `Ужасно приятно наблюдать радостью моего парня, 
    когда он победил. Благодарен всем кто голосовал за него.`,
  },
  {
    img: "https://sun4-11.userapi.com/s/v1/ig2/cXWkUHpQUzwUFuwd8E8IUUEmni3ZYEglwDrqAOCH5dXSlQjo-dMbPvF9zK8FKG9SpON_eafZpocKBpB6aB4a3Tqi.jpg?size=50x50&quality=96&crop=0,0,960,960&ava=1",
    name: "Милана Федоренко",
    description: `все просто супер приятный интерфейс и много позитива. 
    Большое спасибо вам за это приложение`,
  },
  {
    img: "https://sun4-17.userapi.com/s/v1/ig2/Y5iC027HLpAJjHWjALs2QmHzJCEP47Krvmh2jtcTJ8zeDtcS0nS4tJEC_NLTZj8HAWXZzIAypi5CZW4J-2vyuK2o.jpg?size=50x50&quality=96&crop=288,0,1732,1732&ava=1",
    name: "Элина Куценко",
    description: `вставлю и свои 5 копеек. 2 раза проходила верификацию 
    выдавало ошибку с 3 раза все получилось. 
    Я уже думала что все пиздец развод, но все в итоге хорошо`,
  },
  {
    img: "https://sun4-11.userapi.com/s/v1/ig2/n0UK0aawHo9vuQs2DORO-auzYJvFWQa691biK9axpAgYRrk4OlIQpnB3dJBH6u0hroRixshOKZWl37EX29TZcY8v.jpg?size=50x50&quality=96&crop=0,0,640,640&ava=1",
    name: "Маргарита Калинина",
    description: `написала какая то левая тёлка слёзно просила проголосовать 
    за неё, обещяла стикосы если проголосую за неё. В итоге я обладатель классных 
    стикеров. А она так и не победила (`,
  },
  {
    img: "https://sun4-17.userapi.com/s/v1/ig2/IESKX1aJkoleE3Ytkh_K4oRUVfgSdaaRiT-db0LL6ttievazWBIDGSA_I4SZLXJ_pxORqx8ahKVQKN24vUSKnxp_.jpg?size=50x50&quality=96&crop=0,0,1440,1440&ava=1",
    name: "Камила Дорофеева",
    description: `хочу принять участие, можете написать мне в лс?`,
  },
  {
    img: "https://sun4-10.userapi.com/s/v1/ig2/rzDWoOg2Gnq-UvjBSgNkJKRo7bX0AtOO3kUPiEdBjDaCenePjL5Q5V0C5xzWckschEwfnyNouATX2Nb78FLvfY18.jpg?size=50x50&quality=96&crop=0,0,1363,1363&ava=1",
    name: "Ксения Ершова",
    description: `спасибо огромное я просто в восторге проголосовала 
    за сестру и получила приятный сюрприз вывела 12 к досих пор в шоке`,
  },
  {
    img: "https://sun4-10.userapi.com/s/v1/ig2/KB_5FDgRVXhgKDAbmYxl1_OJ_1rsaRVDhA5WaJ5iLBFmrTOHFBdVZ3TEFaHVDPvAl37FIAyhnjdqohDDHOKc_oeQ.jpg?size=50x50&quality=96&crop=562,0,1436,1436&ava=1",
    name: "Ирина Шестакова",
    description: `хотела поделиться с вами своими эмоциями, поучаствовала 
    в голосовании тупо по фану сильно испугало что нужно подтверждать свой 
    вк думала как только впишу данные страницу заблочат. Использовала фейк 
    страницу для проверки и все прошло отлично страница все ещё моя подключений 
    не каких не было спам не приходил. Надеюсь мой отзыв будет полезен`,
  },
];

const Reviews = () => {
  return (
    <div className="app-reviews">
      <div className="app-reviews__header">
        <div className="app-reviews__header-title">
          ﻿Отзывы пользователей принявших участие
        </div>
      </div>
      <div className="app-reviews__main">
        {dataItems.map((item, index) => {
          return (
            <div key={index} className="app-reviews__main-item">
              <div className="item-icon">
                <img className="img" src={item.img} alt="avatar" />
              </div>
              <div className="item-text-container">
                <div className="item-title">{item.name}</div>
                <div className="item-description">{item.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Reviews };
