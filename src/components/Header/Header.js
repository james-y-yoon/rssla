import React from 'react';
import './Header.css'; 


function Header() {
  return (
    <div>
        <div class='top-bar' id = 'my-top-bar'>
          <div class='top-rssla'>RSSLA</div>
          <div class='menu'>
              <a class='menu-item' href='/'><em>home</em></a>
              <a class='menu-item' href='/programs'><em>programs</em></a>
              <a class='menu-item' href='/board'><em>board</em></a>
              <a class='menu-item' href='/prospectives'><em>prospectives</em></a>
              <a class='menu-item' href='/contact'><em>contact</em></a>
          </div>
      </div>
    </div>
  ); }

export default Header; 

