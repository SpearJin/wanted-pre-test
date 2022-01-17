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
  let touchStartX = useRef(null);
  let touchStartY = useRef(null);
  let touchEndX = useRef(null);
  let touchEndY = useRef(null);

  const slideWidth = slideList.current?.children[0].clientWidth || 1011;
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  window.addEventListener('resize', () => {
    setInnerWidth(window.innerWidth);
  });

  useEffect(() => {
    const currentImage = slideList.current.querySelectorAll('.list-card');
    const currentInfo = slideList.current.querySelectorAll('.info');
    currentImage.forEach((image, index) => {
      if (index === nowIndex.current) {
        image.style.filter = 'brightness(100%)';
      } else {
        image.style.filter = 'brightness(30%)';
      }
      currentInfo.forEach((info, index) => {
        if (index === nowIndex.current) {
          info.style.display = 'block';
        } else {
          info.style.display = 'none';
        }
      });
      clearInterval(timeOut.current);
      timeOut.current = setInterval(() => {
        nowIndex.current = nowIndex.current + 1;
        timeOutImage();
      }, 3000);
    });
  }, [currentIndex]);

  const moveImage = (e) => {
    if (isMove) {
      return;
    }
    setIsMove(true);
    const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.closest('.btn');
    if (target.className.includes('btn_pre')) {
      nowIndex.current = nowIndex.current - 1;
    } else {
      nowIndex.current = nowIndex.current + 1;
    }
    timeOutImage();
  };

  const timeOutImage = () => {
    slideList.current.style.transition = '300ms';
    setCurrentIndex(nowIndex.current);
    setTimeout(() => {
      nowIndex.current =
        nowIndex.current <= 1
          ? slideImages.length - 3
          : nowIndex.current > slideImages.length - 3
          ? 2
          : nowIndex.current;
      slideList.current.style.transition = '0s';
      setCurrentIndex(nowIndex.current);
      setIsMove(false);
    }, 500);
  };

  const slideImageReSize = () => {
    return {
      transform: `translateX(calc(${(innerWidth - slideWidth) / 2}px - ${slideWidth * currentIndex}px))`,
    };
  };

  const handlerTouchStart = (e) => {
    e.preventDefault();
    touchStartX = e.clientX;
    touchStartY = e.clientY;
  };

  const handlerTouchEnd = (e) => {
    touchEndX = e.clientX;
    touchEndY = e.clientY;
    let result = touchEndX - touchStartX;
    console.log(result);
    if (result < -100) {
      nowIndex.current = nowIndex.current + 1;
    } else if (result > 100) {
      nowIndex.current = nowIndex.current - 1;
    }
    timeOutImage();
  };

  return (
    <div className='slide'>
      <ul className='slide_list' ref={slideList} style={slideImageReSize()}>
        {slideImages.map((img) => {
          return (
            <SlideListImage
              key={img.id}
              img={img}
              handlerTouchStart={handlerTouchStart}
              handlerTouchEnd={handlerTouchEnd}
            />
          );
        })}
      </ul>
      <button className='btn btn_pre' onClick={moveImage}>
        <i className='fas fa-chevron-left'></i>
      </button>
      <button className='btn btn_next' onClick={moveImage}>
        <i className='fas fa-chevron-right'></i>
      </button>
    </div>
  );
};

export default Slide;
