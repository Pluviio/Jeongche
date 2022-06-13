import React from "react";
import { Link } from 'react-router-dom';
import './Nav.css'
import flowers from '../images/KOCIS_Korea_Mugunghwa_Gwanhwamun_02_(9491022675).jpg'

const Nav = () => {
  return (
    <div>

      <div className="header">

        <div className="tradition">
          <h1>정체</h1>
          <img className="headerImg" src={flowers} alt="Mugunghwa" />
        </div>

        <div className="title">
          <h1>Jeongche</h1>
        </div>

      </div>

      <nav className="links">
        <Link to={'/'} className='navBtn'>Home</Link>
        <Link to={'/'} className='navBtn'>About</Link>
        <Link to={'/'} className='navBtn'>Shop</Link>

      </nav>
    </div>
  );

};

export default Nav;