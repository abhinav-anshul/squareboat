import React from "react";
import "./style.css";
import "../../main.css";
import { Link, useHistory } from "react-router-dom";
import HeroImage from "../../Assets/hero-section.jpg";
import Mock from "../../MockData";
import partnerImg from "../../Assets/partnerImg.png";

function Home() {
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  const history = useHistory();
  if (userData) {
    history.push("/dashboard");
  }
  return (
    <div className='main_container m-0'>
      <div className='welcome_container mt-5 pt-4'>
        <div className='container'>
          <div className='row justify-content-end'>
            <div className='col-md-6 py-5'>
              <div className='welcome_text'>
                <h1 className='welcome_heading'>
                  Welcome to My<span style={{ color: "#43AFFF" }}>Jobs</span>
                </h1>
                <div style={{ marginTop: "40px" }}>
                  <Link to='/login' className='primary_button '>
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <img src={HeroImage} className='banner_image' alt='bannerImage' />
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <section id='why_us'>
          <h5 className='py-4 why_us_heading'>Why Us</h5>
          <div className='row pb-4'>
            {Mock.heroTexts.map((item, index) => (
              <div key={index} className='col-md-4'>
                <div className='service_card p-4'>
                  <p className='service_card_heading'>{item.heading}</p>
                  <p className='service_card_details'>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id='partners'>
          <h5 className='py-4 why_us_heading'>Companies Who Trust Us</h5>
          <div className='row pb-4'>
            <div>
              <img src={partnerImg} width='40%' alt='partnerImage' />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
