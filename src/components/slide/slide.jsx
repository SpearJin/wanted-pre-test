import { useRef, useState } from 'react';
import SlideListImage from '../slide_list_image/slide_list_image';
import './slide.css';

const Slide = () => {
  const [slide, setSlide] = useState([
    { id: -1, image: 'https://static.wanted.co.kr/images/banners/1434/fdbbcb06.jpg', order: 5 }, // 더미
    { id: 0, image: 'https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg', order: 6 }, // 더미

    { id: 1, image: 'https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg', order: 1 },
    { id: 2, image: 'https://static.wanted.co.kr/images/banners/1438/015566ac.jpg', order: 2 },
    { id: 3, image: 'https://static.wanted.co.kr/images/banners/1454/e504b006.jpg', order: 3 },
    { id: 4, image: 'https://static.wanted.co.kr/images/banners/1452/be4ec643.jpg', order: 4 },
    { id: 5, image: 'https://static.wanted.co.kr/images/banners/1434/fdbbcb06.jpg', order: 5 },
    { id: 6, image: 'https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg', order: 6 },

    { id: 7, image: 'https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg', order: 1 }, // 더미
    { id: 8, image: 'https://static.wanted.co.kr/images/banners/1438/015566ac.jpg', order: 2 }, // 더미
  ]);

  const slideList = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isMove, setIsMove] = useState(false);
  const nowIndex = useRef(2);

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
      if (nowIndex.current > slide.length - 3) {
        nowIndex.current = 2;
        slideList.current.style.transition = '0s';
        setCurrentIndex(nowIndex.current);
      }
      setIsMove(false);
    }, 500);
  };

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
        nowIndex.current = slide.length - 3;
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
        {slide.map((img) => {
          return <SlideListImage key={img.id} img={img} />;
        })}
      </ul>
      <div className='slide_btn'>
        <button className='btn pre' onClick={preClick}>
          <i className='fas fa-chevron-left'></i>
        </button>
        <button className='btn next' onClick={nextClick}>
          <i className='fas fa-chevron-right'></i>
        </button>
      </div>
    </div>
  );
};

export default Slide;
