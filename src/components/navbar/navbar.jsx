import React from 'react';
import './navbar.css';

const Navbar = () => (
  <nav className='navbar'>
    <div className='navbar_container'>
      <div className='navbar_logo'>
        <span className='logo_icon'>
          <i className='fas fa-bars icon'></i>
        </span>
        <span className='logo_name'>wanted</span>
      </div>
      <ul className='navbar_menu'>
        <li className='navbar_item media'>
          <span className='item_name'>홈</span>
        </li>
        <li className='navbar_item media'>
          <span className='item_name'>채용</span>
        </li>
        <li className='navbar_item media'>
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
          <span className='item_tag'>New</span>
        </li>
        <li className='navbar_item'>
          <span className='item_name'>프리렌서</span>
        </li>
        <li className='navbar_item'>
          <span className='item_name'>AI 합격예측</span>
          <span className='item_tag'>New</span>
        </li>
      </ul>
      <div className='sideMenu'>
        <ul className='sideMenu_list'>
          <li className='sideMenu_item'>
            <i className='fas fa-search icon'></i>
          </li>
          <li className='sideMenu_item'>
            <i className='far fa-bell icon'></i>
            <span className='sideMenu_tag'>N</span>
          </li>
          <li className='sideMenu_item'>
            <i className='fas fa-user icon'></i>
            <span className='sideMenu_tag'>N</span>
          </li>
          <li className='sideMenu_item'>
            <button className='side_btn'>기업 서비스</button>
          </li>
          <li className='sideMenu_item'>
            <i class='fas fa-ellipsis-h icon'></i>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
