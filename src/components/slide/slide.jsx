import { useEffect, useRef, useState } from 'react';
import SlideListImage from '../slide_list_image/slide_list_image';
import './slide.css';
import slideImages from './slideImageData';

const Slide = () => {
  const slideList = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isMove, setIsMove] = useState(false);
  const nowIndex = useRef(2);
  let timeOut = useRef(null);

  const slideWidth = slideList.current?.children[0].clientWidth || 1080;
  const innerWidth = window.innerWidth;

  const nextClick = () => {
    if (isMove) {
      return;
    }
    setIsMove(true);
    nowIndex.current = nowIndex.current + 1;

    slideList.current.style.transition = '300ms';
    setCurrentIndex(nowIndex.current);

    setTimeout(() => {
      if (nowIndex.current > slideImages.length - 3) {
        nowIndex.current = 2;
        slideList.current.style.transition = '0s';
        setCurrentIndex(nowIndex.current);
      }
      setIsMove(false);
    }, 500);
  };

  useEffect(() => {
    const currentImage = slideList.current.querySelectorAll('.list-card');
    currentImage.forEach((image, index) => {
      if (index === nowIndex.current) {
        image.style.filter = 'brightness(100%)';
      } else {
        image.style.filter = 'brightness(30%)';
      }

      clearInterval(timeOut.current);
      timeOut.current = setInterval(() => {
        nowIndex.current = nowIndex.current + 1;

        slideList.current.style.transition = '300ms';
        setCurrentIndex(nowIndex.current);

        setTimeout(() => {
          if (nowIndex.current > slideImages.length - 3) {
            nowIndex.current = 2;
            slideList.current.style.transition = '0s';
            setCurrentIndex(nowIndex.current);
          }
          setIsMove(false);
        }, 500);
      }, 3000);
    });
  }, [currentIndex]);

  const preClick = () => {
    if (isMove) {
      return;
    }
    setIsMove(true);
    nowIndex.current = nowIndex.current - 1;
    slideList.current.style.transition = '300ms';
    setCurrentIndex(nowIndex.current);

    setTimeout(() => {
      if (nowIndex.current <= 1) {
        nowIndex.current = slideImages.length - 3;
        slideList.current.style.transition = '0s';
        setCurrentIndex(nowIndex.current);
      }
      setIsMove(false);
    }, 500);
  };

  return (
    <div className='slide'>
      <ul
        className='slide_list'
        ref={slideList}
        style={{ transform: `translateX(calc(${(innerWidth - slideWidth) / 2}px - ${slideWidth * currentIndex}px))` }}
      >
        {slideImages.map((img) => {
          return <SlideListImage key={img.id} img={img} />;
        })}
      </ul>
      <button className='btn btn_pre' onClick={preClick}>
        <i className='fas fa-chevron-left'></i>
      </button>
      <button className='btn btn_next' onClick={nextClick}>
        <i className='fas fa-chevron-right'></i>
      </button>
    </div>
  );
};

export default Slide;
