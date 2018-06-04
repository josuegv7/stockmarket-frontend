import React, { Component } from 'react';
import main from '../style/Main.css';
import logo from '../assets/bar.png';

class Header extends Component {
  render(){
    return(
      <header>
      <nav className={main.row}>
        <img src={logo} alt="logo" className={main.logo}></img>
        <ul className={main.main_nav}>
          <li><a href="/">Home</a> </li>
          <li><a href="#Stocks">Stocks</a> </li>
          <li><a href="/">Info</a> </li>
        </ul>
      </nav>
         <div className={main.hero_text_box}>
           <h1>My Portfolio</h1>
         </div>
      </header>
    )
  }
};

export default Header;
