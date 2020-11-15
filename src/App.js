import React from "react";
import background from "./img/IMG_2186.jpg";
import cmflg1 from "./img/camouflage1.jpeg";
import cmflg2 from "./img/camouflage2.jpeg";
import cmflg3 from "./img/camouflage3.jpeg";
import cmflg4 from "./img/camouflage4.jpeg";
import nbp from "./img/national-business-park.png";
import icm1 from "./img/icm1.png";
import icm2 from "./img/icm2.png";
import icm3 from "./img/icm3.png";
import table1 from "./img/table1.png";
import table2 from "./img/table2.png";
import kg from "./img/knight-gekker.png";
import so from "./img/standard-organisations.png";
import re from "./img/rogers-eden.png";

import ReactPlayer from "react-player";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App" style={{ backgroundImage: `url(${background})` }}>
        <div className="wrapper">
          <div
            id="box1"
            className="box"
            style={{ backgroundImage: `url(${cmflg1})` }}
          >
            <div className="box-empty"></div>
          </div>

          <div id="box2" className="box">
            <img
              className="box-image"
              src={so}
              alt="Standard organisations participants"
            />
            <a
              href="https://core.ac.uk/download/pdf/161893186.pdf"
              target="_blank"
              rel="noreferrer"
            >
            <img
              className="box-image"
              src={re}
              alt="Rogers Eden"
            />
          </a>
          </div>

          <div
            id="box3"
            className="box"
            style={{ backgroundImage: `url(${cmflg2})` }}
          >
            <div className="box-empty"></div>
          </div>
          <div id="box4" className="box">
          <a
            href="https://www.google.com/maps/place/410+National+Business+Pkwy,+Annapolis+Junction,+MD+20701,+USA/@39.134935,-76.7697111,1142m/data=!3m1!1e3!4m5!3m4!1s0x89b7e6d1d529fbab:0x7e75297c4fb8327b!8m2!3d39.1346854!4d-76.7684558?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="box-image"
              src={nbp}
              alt="National Business Park"
            />
          </a>
          </div>
          <div id="box5" className="box">
            <div className="box-empty"></div>
          </div>
          <div id="box6" className="box">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/bs3Et540-_s"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div
            id="box7"
            className="box"
            style={{ backgroundImage: `url(${cmflg3})` }}
          >
            <div className="box-empty"></div>
          </div>
          <div id="box8" className="box">
          <a
            href="https://uvaauas.figshare.com/articles/ICM_Interfacial_Regime_apendix_2_Map_pdf/12315218/1"
            target="_blank"
            rel="noreferrer"
          >
          <div className="box-image-wrapper">
          <img
            className="box-image"
            src={icm1}
            alt="ICM1"
          />
          <img
            className="box-image"
            src={icm2}
            alt="ICM2"
          />
          <img
            className="box-image"
            src={table1}
            alt="table1"
          />
          <img
            className="box-image"
            src={icm3}
            alt="ICM3"
          />
          <img
            className="box-image"
            src={table2}
            alt="table2"
          />
          <img
            className="box-image"
            src={kg}
            alt="knight-gekker"
          />
          </div>
          </a>
          </div>
          <div
            id="box9"
            className="box"
            style={{ backgroundImage: `url(${cmflg4})` }}
          >
            <div className="box-empty"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
