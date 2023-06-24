import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";


const Home = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid ">
                <div className="logo-arrage">
                    <a aria-current="page" href="/#">
                        <img className="logo" src="https://agnikul.in/static/media/logo.6463c17c.png" alt="logo pic"/>
                    </a>
                </div>
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                    <div className="navbar-nav text-center info-align">
                        <Link className="nav-link" to="#.">About</Link>
                        <Link className="nav-link" to="#.">Engineering</Link>
                        <Link className="nav-link" to="#.">Products</Link>
                        <Link className="nav-link" to="#.">Team</Link>
                        <Link className="nav-link" to="#.">News</Link>
                        <Link className="nav-link" to="#.">Careers</Link>
                        <div className="button-align" >
                        <Link className="nav-link" to="#."><span style={{color:"white"}} >BOOK A LANUCH</span></Link>
                        </div>
                    </div>
                </div>
                
            </div>
           
        </nav>
        <div className="about-background ">
            <div className="about-content-arrage">
                <h1 className="first-line">Bringing Space Within</h1>
                <h1 className="second-line">Everyone's Reach</h1>
                <p className="third-line">Going to space shouldn’t be the hardest part of utilizing, living in or working
                 from space. So, why not design & build a product that makes the earth-to-space journey as simple, as quick and as affordable as possible?</p>
                <a className="fourth-line" href="#.">Check out Agnibaan</a>
            </div>
            
        </div>
    </>
  );
};

export default Home;
