import React from 'react';
import './slide_list_image.css';

const SlideListImage = ({ img, handlerTouchStart, handlerTouchEnd, handlerMouseOver, handlerMouseOut }) => {
  return (
    <li
      className='list-card'
      onMouseDown={handlerTouchStart}
      onMouseUp={handlerTouchEnd}
      onMouseOver={handlerMouseOver}
      onMouseOut={handlerMouseOut}
      style={{ width: window.innerWidth - 100 }}
    >
      <img className='list-img' src={img.image} alt='' />
      <div className='info'>
        <h2 className='info_title'>{img.title}</h2>
        <h3 className='info_subTitle'>{img.subTitle}</h3>
        <div href='#' className='info_link'>
          <span className='info_tag'>바로가기 ></span>
        </div>
      </div>
    </li>
  );
};

export default SlideListImage;
