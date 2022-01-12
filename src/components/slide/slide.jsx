import React, { useRef, useState } from 'react';
import slideOrder from '../../util/slide_order';
import './slide.css';

const Slide = ({ slideImages }) => {
  const [preImg, setPreImg] = useState('https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg');
  const [currentImg, setCurrentImg] = useState('https://static.wanted.co.kr/images/banners/1438/015566ac.jpg');
  const [nextImg, setNextImg] = useState('https://static.wanted.co.kr/images/banners/1454/e504b006.jpg');
  let nowOrder = useRef(2);
  let preOrder = useRef(1);
  let nextOrder = useRef(3);

  const onClickHandler = (e) => {
    const target = e.target.closest('.btn');

    nowOrder.current = target.className.includes('next') ? nowOrder.current + 1 : nowOrder.current - 1;
    if (nowOrder.current <= 0) {
      nowOrder.current = slideImages.length;
    } else if (nowOrder.current > slideImages.length) {
      nowOrder.current = 1;
    }
    preOrder.current = nowOrder.current - 1 <= 0 ? slideImages.length : nowOrder.current - 1;
    nextOrder.current = nowOrder.current + 1 > slideImages.length ? 1 : nowOrder.current + 1;

    const chageNowImg = slideOrder(slideImages, nowOrder.current);
    const chagePreImg = slideOrder(slideImages, preOrder.current);
    const chageNextImg = slideOrder(slideImages, nextOrder.current);

    console.log(preOrder, nowOrder, nextOrder);
    setCurrentImg(chageNowImg[0].image);
    setPreImg(chagePreImg[0].image);
    setNextImg(chageNextImg[0].image);
  };

  return (
    <div className='slide'>
      <div className='slide_list'>
        <img className='list-img preImg' src={preImg} alt='pre' />
        <img className='list-img nowImg' src={currentImg} alt='now' />
        <img className='list-img nextImg' src={nextImg} alt='next' />
      </div>
      <div className='slide_btn' onClick={onClickHandler}>
        <button className='btn pre'>
          <i className='fas fa-chevron-left'></i>
        </button>
        <button className='btn next'>
          <i className='fas fa-chevron-right'></i>
        </button>
      </div>
    </div>
  );
};

export default Slide;
