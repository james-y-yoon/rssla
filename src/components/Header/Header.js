import React from 'react';
import './Header.css'; 


function Header() {
  return (
    <div>
        <div class='top-bar' id = 'my-top-bar'>
          <div class='top-rssla'>RSSLA</div>
          <div class='menu'>
              <div class='menu-item'><em>programs</em></div>
              <div class='menu-item'><em>board</em></div>
              <div class='menu-item'><em>prospectives</em></div>
              <div class='menu-item'><em>contact</em></div>
          </div>
      </div>
    </div>
  ); }

export default Header; 

