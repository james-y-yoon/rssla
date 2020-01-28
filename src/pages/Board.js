import React from 'react';
import './Board.css';
import Banner from "./pictures/board_bg1.png"
import Aditya from './../eboard-pictures/aditya.jpg';
import Alex from './../eboard-pictures/alex.jpg';
import Andrew from './../eboard-pictures/andrew.jpg';
import Becca from './../eboard-pictures/becca.jpg';
import Bryan from './../eboard-pictures/bryan.jpg';
import Chelsey from './../eboard-pictures/chelsey.jpg';
import Donya from './../eboard-pictures/donya.jpg';
import James from './../eboard-pictures/james.jpg';
import Jason from './../eboard-pictures/jason.jpg';
import Kajal from './../eboard-pictures/kajal.jpg';
import Krista from './../eboard-pictures/krista.jpg';
import Maggie from './../eboard-pictures/maggie.JPG';
import Nikki from './../eboard-pictures/nikki.JPG';
import Nilla from './../eboard-pictures/nilla.png';
import Pranit from './../eboard-pictures/pranit.jpg';
import Raymond from './../eboard-pictures/Raymond.jpeg';

function Board(){
    return([
      <div>
        <div className="banner">
          <p id="heading">2019-2020 Executive Board</p>
          <p id="description">16 students in 15 positions lead the Regents Scholar Society and all of its programs. From event planning to budget balancing, our team is responsible for making sure that RSS is running effectively.</p>
        </div>
        <div className="grid-container">
          <div className="grid-row1">
            <div className="grid-item">
              <img src={Krista}/>
              <p className="title">PRESIDENT</p>
              <p className="name">KRISTA YANG</p>
              <p className="major">psychobiology, 2020</p>
            </div>
            <div className="grid-item">
              <img src={Kajal}/>
              <p className="title">INTERNAL VICE PRESIDENT</p>
              <p className="name">KAJAL MARAN</p>
              <p className="major">bioengineering, 2020</p>
            </div>
            <div className="grid-item">
              <img src={Alex}/>
              <p className="title">EXTERNAL VICE PRESIDENT</p>
              <p className="name">ALEX SOOHOO</p>
              <p className="major">chemical engineering, 2020</p>
            </div>
            <div className="grid-item">
              <img src={Nilla}/>
              <p className="title">SECRETARY</p>
              <p className="name">NILLA SIVAKUMAR</p>
              <p className="major">neuroscience, 2020</p>
            </div>
          </div>
          <div className="grid-row2">
            <div className="grid-item">
              <img src={Chelsey}/>
              <p className="title">ACTIVITIES DIRECTOR</p>
              <p className="name">CHELSEY WANG</p>
              <p className="major">computer science, 2022</p>
            </div>
            <div className="grid-item">
              <img src={Pranit}/>
              <p className="title">ACTIVITIES DIRECTOR</p>
              <p className="name">PRANIT KUMARAN</p>
              <p className="major">neuroscience, 2022</p>
            </div>
            <div className="grid-item">
              <img src={Bryan}/>
              <p className="title">ALUMNI RELATIONS AND INTER-UC DIRECTOR</p>
              <p className="name">BRYAN HU</p>
              <p className="major">mathematics, 2020</p>
            </div>
            <div className="grid-item">
              <img src={James}/>
              <p className="title">COMMUNICATIONS DIRECTOR</p>
              <p className="name">JAMES YOON</p>
              <p className="major">chemistry, 2022</p>
            </div>
          </div>
          <div className="grid-row3">
            <div className="grid-item">
              <img src={Andrew}/>
              <p className="title">COMMUNITY SERVICE DIRECTOR</p>
              <p className="name">ANDREW KANG</p>
              <p className="major">biochemistry, 2022</p>
            </div>
            <div className="grid-item">
              <img src={Aditya}/>
              <p className="title">CORPORATE RELATIONS DIRECTOR</p>
              <p className="name">ADITYA GURU</p>
              <p className="major">mimg, 2022</p>
            </div>
            <div className="grid-item">
              <img src={Donya}/>
              <p className="title">EDUCATIONAL PROGRAMS DIRECTOR</p>
              <p className="name">DONYA MAZDEYASNAN</p>
              <p className="major">psychobiology, 2022</p>
            </div>
            <div className="grid-item">
              <img src={Maggie}/>
              <p className="title">L.A.M.P. DIRECTOR</p>
              <p className="name">MAGGIE BUI</p>
              <p className="major">mcbd, 2020</p>
            </div>
          </div>
          <div className="grid-row4">
            <div className="grid-item">
              <img src={Becca}/>
              <p className="title">OUTREACH DIRECTOR</p>
              <p className="name">REBECCA ZHU</p>
              <p className="major">business economics, 2020</p>
            </div>
            <div className="grid-item">
              <img src={Nikki}/>
              <p className="title">PUBLICITY DIRECTOR</p>
              <p className="name">NIKKI WOO</p>
              <p className="major">electrical engineering, 2021</p>
            </div>
            <div className="grid-item">
              <img src={Raymond}/>
              <p className="title">TRANSFER AFFAIRS DIRECTOR</p>
              <p className="name">RAYMOND DEANGELO</p>
              <p className="major">english, 2020</p>
            </div>
            <div className="grid-item">
              <img src={Jason}/>
              <p className="title">TREASURER</p>
              <p className="name">JASON LIO</p>
              <p className="major">neuroscience, 2020</p>
            </div>
          </div>
        </div>
      </div>
    ]);
}

export default Board;