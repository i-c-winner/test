import React from 'react';
import workers from '../workers';
import './card.css';

const src = 'img1.png';
export default Card;

function Card(props) {
  const responsibility = workers[props.index].responsibility;

  return (
    <div className='card'>
      <p className='card_title'>Опыт работы</p>
      <div className='card_body'>
        <img
          className='card_img'
          alt='Изображение не понял чего '
          src={require(`../img/${workers[props.index].img}`).default}
        />
        <div className='card_info'>
          <p className='card_text card_text__title'>
            {workers[props.index].work}
          </p>
          <p className='card_text card_text__work-time'>
            {workers[props.index].workTime}
          </p>
          <p className='card_text card_text__time'>
            {workers[props.index].time}
          </p>
          <p className='card_text card_text__sity'>
            {workers[props.index].sity}
          </p>
          <div className='card_text card_text__responsibility'>
            <p className='card_text card_text__title'>Список обязаностей</p>
            {responsibility.map((elem) => {
              return <p className='card_text__responsibilit-item'>{elem}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
