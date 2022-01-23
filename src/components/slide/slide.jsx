import { useEffect, useRef, useState } from 'react';
import SlideListImage from '../slide_list_image/slide_list_image';
import './slide.css';

const Slide = ({ slideImages }) => {
  const [currentIndex, setCurrentIndex] = useState(2);
  let [slideWidth, setSlideWidth] = useState(0);
  const [isMove, setIsMove] = useState(false);
  const [isLoad, setIsLoad] = useState(false);

  let slideList = useRef(null);
  let intervalTimeOut = useRef(null);
  let reSizeTime = useRef(null);
  let touchStartX = useRef(null);
  let touchEndX = useRef(null);

  let innerWidth = window.innerWidth;
  // slideList.current?.children[0].getBoundingClientRect().width;
  // currentIndex state가 변할때마다 실행하고, nowIndex로 현재 가운데 위치를 파악하여, brightness, display 스타일 값을 줌
  // clearInterval로 인해 callStack이 쌓이는걸 막고, 3초마다 다음 이미지로 넘어가도록 구현
  useEffect(() => {
    const currentImage = slideList.current.querySelectorAll('.list-card');
    const currentInfo = slideList.current.querySelectorAll('.info');
    currentImage.forEach((image, index) => {
      if (index === currentIndex) {
        image.style.filter = 'brightness(100%)';
      } else {
        image.style.filter = 'brightness(30%)';
      }
      currentInfo.forEach((info, index) => {
        if (index === currentIndex) {
          info.style.display = 'block';
        } else {
          info.style.display = 'none';
        }
      });
      clearInterval(intervalTimeOut.current);
      intervalTime();
    });
  }, [currentIndex]);

  // screen 사이즈가 변할때 마다 이미지 위치를 재정렬
  window.addEventListener('resize', () => {
    console.log('resize');
    clearTimeout(reSizeTime);
    reSizeTime = setTimeout(() => {
      setIsLoad(!isLoad);
      slideImageReSize();
    }, 200);
  });

  // swiper 기능을 위해 마우스를 처음 클랙 햇을때 마우스를 클릭한 x좌표를 구함
  const handlerTouchStart = (e) => {
    e.preventDefault();
    touchStartX = e.clientX;
  };

  // swiper 기능을 위해 마우스를 놓았을때, 마우스를 놓은 x좌료를 구함
  // touchStartX, touchEndX 값을 계산하여 조건에 맞게 nowIndex 값을 바꾸고, moveImage함수를 실행 함
  const handlerTouchEnd = (e) => {
    touchEndX = e.clientX;
    let nextIndex;
    if (touchStartX + 100 < touchEndX) {
      nextIndex = currentIndex - 1;
    } else if (touchStartX > touchEndX + 100) {
      nextIndex = currentIndex + 1;
    } else {
      return;
    }
    moveImage(nextIndex);
  };

  // 이미지 선택시 setInterval 멈춤
  const handlerMouseOver = () => {
    clearInterval(intervalTimeOut.current);
  };

  // 이미지에서 선택을 안하면 다시 setInterval 실행
  const handlerMouseOut = () => {
    intervalTime();
  };

  // 버튼을 연속으로 누르는걸 방지 하기 위해 isMove state값이 true일때는 return 시킴
  // 버튼을 클릭시, 다음 버튼인지 이전 버튼인지 파악하고, 조건에 맞게 nowIndex값을 바꿈
  const generateNextIndex = (e) => {
    if (isMove) {
      return;
    }
    let nextIndex;
    setIsMove(true);
    const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.closest('.btn');
    if (target.className.includes('btn_pre')) {
      nextIndex = currentIndex - 1;
    } else {
      nextIndex = currentIndex + 1;
    }
    moveImage(nextIndex);
  };

  // window.addEventListener('load', async () => {
  //   const nowWidth = await slideList.current?.children[0].getBoundingClientRect().width;
  //   setSlideWidth(nowWidth);
  // });

  useEffect(() => {
    const nowWidth = slideList.current?.children[0].getBoundingClientRect().width;
    setSlideWidth(nowWidth);
  }, []);

  // transition 우선 실행 하고, nowIndex값으로 cuurentIndex state값을 바꿈
  // 0.5초 후에 이미지가 처음이나 마지막일 경우 조건에 맞게 nowIndex값을 바꾸고, transition 값을 0으로 주고, currentIndex state값을 바꿈
  // isMove state 값도 false로 바꾸어줌
  const moveImage = (nextIndex) => {
    slideList.current.style.transition = '300ms';
    setCurrentIndex(nextIndex);
    setTimeout(() => {
      nextIndex = nextIndex <= 1 ? slideImages.length - 3 : nextIndex > slideImages.length - 3 ? 2 : nextIndex;
      slideList.current.style.transition = '0s';
      setCurrentIndex(nextIndex);
      setIsMove(false);
    }, 500);
  };

  // 이미지에 위치를 정하는 함수
  const slideImageReSize = () => {
    console.log(slideWidth);
    return {
      transform: `translateX(calc(${(innerWidth - slideWidth) / 2}px - ${slideWidth * currentIndex}px))`,
    };
  };

  // 인터벌이 일어나는 함수
  const intervalTime = () => {
    clearInterval(intervalTimeOut.current);
    intervalTimeOut.current = setInterval(() => {
      moveImage(currentIndex + 1);
    }, 2000);
  };

  return (
    <div className='slide'>
      <ul
        className='slide_list'
        ref={slideList}
        style={slideImageReSize()}
        onMouseDown={handlerTouchStart}
        onMouseUp={handlerTouchEnd}
        onMouseOver={handlerMouseOver}
        onMouseOut={handlerMouseOut}
      >
        {slideImages.map((img, index) => (
          <SlideListImage key={img.id} img={img} index={index} setSlideWidth={setSlideWidth} />
        ))}
      </ul>
      <button className='btn btn_pre' onClick={generateNextIndex}>
        <i className='fas fa-chevron-left'></i>
      </button>
      <button className='btn btn_next' onClick={generateNextIndex}>
        <i className='fas fa-chevron-right'></i>
      </button>
    </div>
  );
};

export default Slide;
