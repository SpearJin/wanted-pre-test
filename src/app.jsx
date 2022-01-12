import { useRef, useState } from 'react';
import './app.css';
import Navbar from './components/navbar/navbar';
import Slide from './components/slide/slide';
import slideOrder from './util/slide_order';

const slideImages = [
  { id: 1, image: 'https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg', order: 1 },
  { id: 2, image: 'https://static.wanted.co.kr/images/banners/1438/015566ac.jpg', order: 2 },
  { id: 3, image: 'https://static.wanted.co.kr/images/banners/1454/e504b006.jpg', order: 3 },
  { id: 4, image: 'https://static.wanted.co.kr/images/banners/1452/be4ec643.jpg', order: 4 },
  { id: 5, image: 'https://static.wanted.co.kr/images/banners/1434/fdbbcb06.jpg', order: 5 },
  { id: 6, image: 'https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg', order: 6 },
];

const App = () => {
  const [preImg, setPreImg] = useState('https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg');
  const [currentImg, setCurrentImg] = useState('https://static.wanted.co.kr/images/banners/1438/015566ac.jpg');
  const [nextImg, setNextImg] = useState('https://static.wanted.co.kr/images/banners/1454/e504b006.jpg');
  let nowOrder = useRef(2);
  let preOrder = useRef(1);
  let nextOrder = useRef(3);

  const handlerClick = (e) => {
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

    // console.log(preOrder, nowOrder, nextOrder);
    setCurrentImg(chageNowImg[0].image);
    setPreImg(chagePreImg[0].image);
    setNextImg(chageNextImg[0].image);
  };

  return (
    <>
      <Navbar />
      <Slide
        slideImages={slideImages}
        handlerClick={handlerClick}
        preImg={preImg}
        currentImg={currentImg}
        nextImg={nextImg}
      />
    </>
  );
};

export default App;
