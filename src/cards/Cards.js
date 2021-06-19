import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import workers from '../workers';
import './cards.css';

export default Cards;

function Cards() {
  const [lgthList, setLgthList] = useState(workers.length);
  const [close, setClose] = useState(true);

  function checkLengthList() {
    if (lgthList > 1) {
      return true;
    } else {
      return false;
    }
  }
  useEffect(() => {
    const cardBox = document.querySelector('.cards-box');
    const button = document.querySelector('.button');

    if (close) {
      cardBox.classList.add('cards-box__close');
      button.classList.remove('button__open');
      button.classList.add('button__close');
    } else {
      cardBox.classList.remove('cards-box__close');
      button.classList.remove('button__close');
      button.classList.add('button__open');
    }
  });
  function click() {
    setClose(() => {
      return !close;
    });
  }

  return (
    <div className='cards'>
      <Card index={0} />
      <hr />
      <div className='cards-box cards-box__close'>
        {workers.map((elem, index) => {
          let card = null;
          if (index !== 0) {
            card = <Card index={index} />;
          }
          return card;
        })}
      </div>

      {checkLengthList() ? (
        <button onClick={click} className='button button__close'></button>
      ) : (
        <></>
      )}
    </div>
  );
}
