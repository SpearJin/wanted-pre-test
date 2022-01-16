import React from 'react';
import './slide_list_image.css';

const SlideListImage = ({ img }) => (
  <li className='list-card'>
    <img className='list-img' src={img.image} alt='' />
  </li>
);

export default SlideListImage;
