import React from 'react';
import './Header.css';
import RSS_logo from './nav_bar_logo.png'; // RSS logo
console.log(RSS_logo);


function Header() {
  return (
    <div>
<<<<<<< HEAD
      <div class='top-bar' id='my-top-bar'>
        <a class='top-rssla' href='/about'>
          <img src={RSS_logo} alt='logo' class='logo' /> RSSLA
        </a>
        
        <div class='menu'>
          <a class='menu-item' href='/programs'>PROGRAMS</a>
          <a class='menu-item' href='/board'>BOARD</a>
          <a class='menu-item' href='/prospectives'>PROSPECTIVES</a>
          <a class='menu-item' href='/contact'>CONTACT</a>
        </div>
=======
        <div class='top-bar' id = 'my-top-bar'>
          <div class='top-rssla'>RSSLA</div>
          <div class='menu'>
              <a class='menu-item' href='/'><em>home</em></a>
              <a class='menu-item' href='/programs'><em>programs</em></a>
              <a class='menu-item' href='/board'><em>board</em></a>
              <a class='menu-item' href='/prospectives'><em>prospectives</em></a>
              <a class='menu-item' href='/contact'><em>contact</em></a>
          </div>
>>>>>>> b079f247b94e632c056d3246e52f06a99521056b
      </div>
    </div>
  );
}

export default Header;

