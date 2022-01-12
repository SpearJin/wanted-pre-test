import React from 'react';

const Navbar = () => (
  <nav className='navbar'>
    <div className='navbar_logo'>
      <i class='fas fa-bars'></i>
      <span className='logo_name'>Wanted</span>
    </div>
    <ul className='navbar_menu'>
      <li className='navbar_item'>
        <span className='item_name'>채용</span>
      </li>
      <li className='navbar_item'>
        <span className='item_name'>이벤트</span>
      </li>
      <li className='navbar_item'>
        <span className='item_name'>직군별 연봉</span>
      </li>
      <li className='navbar_item'>
        <span className='item_name'>이력서</span>
      </li>
      <li className='navbar_item'>
        <span className='item_name'>커뮤니티</span>
        <span>New</span>
      </li>
      <li className='navbar_item'>
        <span className='item_name'>프리렌서</span>
      </li>
      <li className='navbar_item'>
        <span className='item_name'>AI 합격예측</span>
        <span>New</span>
      </li>
    </ul>
    <div className='side_menu'>
      <div className='left_menu'>
        <div className='menu_icon'>
          <i class='fas fa-search'></i>
        </div>
        <div className='menu_icon'>
          <i class='far fa-bell'></i>
          <span>N</span>
        </div>
        <div className='menu_icon'>
          <i class='fas fa-user'></i>
          <span>N</span>
        </div>
      </div>
      <div className='right_menu'></div>
    </div>
  </nav>
);

export default Navbar;
