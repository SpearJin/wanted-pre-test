import './slide.css';

const Slide = ({ handlerClick, preImg, currentImg, nextImg }) => {
  const onClick = (e) => {
    handlerClick(e);
  };

  return (
    <div className='slide'>
      <div className='slide_list'>
        <img className='list-img preImg' src={preImg} alt='pre' />
        <img className='list-img nowImg' src={currentImg} alt='now' />
        <img className='list-img nextImg' src={nextImg} alt='next' />
      </div>
      <div className='slide_btn' onClick={onClick}>
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
