import React from "react";
import background from "./img/IMG_2186.jpg";
import cmflg1 from "./img/camouflage1.jpeg";
import cmflg2 from "./img/camouflage2.jpeg";
import cmflg3 from "./img/camouflage3.jpeg";
import cmflg4 from "./img/camouflage4.jpeg";
import cmflg5 from "./img/camouflage5.jpeg";
import cmflg6 from "./img/camouflage6.jpeg";
import nbp from "./img/national-business-park.png";
import icm1 from "./img/icm1-bw.png";
import icm2 from "./img/icm2-bw.png";
import icm3 from "./img/icm3-bw.png";
import table1 from "./img/table1-bw.png";
import table2 from "./img/table2-bw.png";
import kg from "./img/knight-gekker-bw.png";
import so from "./img/standard-organisations-bw.png";
import re from "./img/rogers-eden-bw.png";

import ReactPlayer from "react-player";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App" style={{ backgroundImage: `url(${background})` }}>
        <div className="wrapper">
          <div id="box1" className="box">
            <div
              className="box-items"
              style={{ backgroundImage: `url(${cmflg1})` }}
            >
              <a
                href="https://creativetimereports.org/2014/01/07/the-architecture-of-surveillance/"
                target="_blank"
                rel="noreferrer"
              >
                <p className="title"> Burrington </p>
              </a>
              <p className="box-text"> Bland Temples </p>
              <p className="box-text"> Surveillance Aesthetics </p>
              <p className="box-text"> Invisibility </p>
              <p className="box-text"> Camouflage </p>
              <p className="box-text"> Exploration </p>
              <p className="box-text"> Architectural Sites </p>
              <p className="box-text"> New Form of Power </p>
              <p className="box-text"> Infrastructure Ecology </p>
            </div>
          </div>

          <div id="box2" className="box">
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

          <div id="box3" className="box">
            <div
              className="box-items"
              style={{ backgroundImage: `url(${cmflg2})` }}
            >
              <a
                href="https://core.ac.uk/download/pdf/161893186.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <p className="title"> Rogers and Eden </p>
              </a>
              <p className="box-text"> Power of Standards </p>
              <p className="box-text"> Role of Intelligence Agencies </p>
              <p className="box-text"> Trustworthiness </p>
              <p className="box-text"> Snowden </p>
              <p className="box-text"> HRPC </p>
              <p className="box-text"> Digital Citizenship </p>
              <p className="box-text"> Governing Infrastructure </p>
              <p className="box-text"> Group Dynamics </p>
              <p className="box-text"> Who Participates? </p>
              <p className="box-text"> Transparency </p>
              <p className="box-text"> Openness </p>
              <p className="box-text"> Vulnerabilities </p>
              <p className="box-text"> Lawful Intercept Surveillance</p>
              <p className="box-text"> Backdoors </p>
            </div>
          </div>

          <div id="box4" className="box">
            <a
              href="https://uvaauas.figshare.com/articles/ICM_Interfacial_Regime_apendix_2_Map_pdf/12315218/1"
              target="_blank"
              rel="noreferrer"
            >
              <div className="box-image-wrapper">
                <img className="box-image" src={icm1} alt="ICM1" />
                <img className="box-image" src={icm2} alt="ICM2" />
                <img className="box-image" src={table1} alt="table1" />
                <img className="box-image" src={icm3} alt="ICM3" />
                <img className="box-image" src={table2} alt="table2" />
                <img className="box-image" src={kg} alt="knight-gekker" />
              </div>
            </a>
          </div>

          <div id="box5" className="box">
            <div
              className="box-items"
              style={{ backgroundImage: `url(${cmflg6})` }}
            >
              <p className="title"> Surveillance Cultures: Infrastructures </p>
              <p className="box-text"> Societies of Control </p>
              <p className="box-text"> Surveillant Assemblage </p>
              <p className="box-text"> Protological Control </p>
              <p className="box-text"> Surveillance Capitalism </p>
              <p className="box-text"> Surveillance Society </p>
              <p className="box-text"> Surveillance Culture </p>
            </div>
          </div>

          <div id="box6" className="box">
            <img
              className="box-image"
              src={so}
              alt="Standard organisations participants"
            />
            <img className="box-image" src={re} alt="Rogers Eden" />
          </div>

          <div id="box7" className="box">
            <div
              className="box-items"
              style={{ backgroundImage: `url(${cmflg5})` }}
            >
              <a
                href="https://www.academia.edu/43537554/Knight_and_Gekker_2020_Mapping_Interfacial_Regimes_of_Control_Palantirs20200707_53602_182s4d1"
                target="_blank"
                rel="noreferrer"
              >
                <p className="title"> Gekker and Knight </p>
              </a>
              <p className="box-text"> Interfacial Regime </p>
              <p className="box-text"> Control </p>
              <p className="box-text"> Decentralisation </p>
              <p className="box-text"> Datafication </p>
              <p className="box-text"> Platformisation </p>
              <p className="box-text"> Interfacialisation </p>
              <p className="box-text"> Surface </p>
              <p className="box-text"> Visibility </p>
              <p className="box-text"> Private In The Public </p>
              <p className="box-text"> Data Doubles </p>
              <p className="box-text"> Depersonalisation </p>
              <p className="box-text"> Who Decides?</p>
            </div>
          </div>

          <div id="box8" className="box">
            <iframe
              className="video"
              width="560"
              height="315"
              title="Data Center"
              src="https://www.youtube-nocookie.com/embed/bs3Et540-_s"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div id="box9" className="box">
            <div
              className="box-items"
              style={{ backgroundImage: `url(${cmflg4})` }}
            >
              <a
                href="http://www-personal.umich.edu/~csandvig/research/Sandvig_The_Internet_as_Infrastructure.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <p className="title"> Sandvig </p>
              </a>
              <p className="box-text"> Internet Infrastructure </p>
              <p className="box-text"> Collision </p>
              <p className="box-text"> Turtles All The Way Down </p>
              <p className="box-text"> Relationists </p>
              <p className="box-text"> New Materialists </p>
              <p className="box-text"> Splintering Urbanism </p>
              <p className="box-text"> 1975 </p>
              <p className="box-text"> QWERTY </p>
              <p className="box-text"> Who Is The Master? </p>
              <p className="box-text"> Modernist Ideal </p>
              <p className="box-text"> Decay </p>
              <p className="box-text"> Maintenance </p>
              <p className="box-text"> Momentum </p>
              <p className="box-text"> Evolution </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
