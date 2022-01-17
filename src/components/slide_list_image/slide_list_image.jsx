import React, { useRef } from 'react';
import './slide_list_image.css';

const SlideListImage = ({ img, handlerTouchStart, handlerTouchEnd }) => {
  return (
    <li className='list-card' onMouseDown={handlerTouchStart} onMouseUp={handlerTouchEnd}>
      <img className='list-img' src={img.image} alt='' />
      <div className='info'>
        <h2 className='info_title'>{img.title}</h2>
        <h3 className='info_subTitle'>{img.subTitle}</h3>
        <p className='info_tag'>바로가기 ></p>
      </div>
    </li>
  );
};

export default SlideListImage;
