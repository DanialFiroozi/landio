import React from "react";

const OurServicesMain = () => {
  return (
    <section id="services" className="gap services">
      <div className="container">
        <div className="heading two">
          <span>We offer Virtual Consultations</span>
          <h2>The most powerful services for build professional websites.</h2>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="service-text">
              <i>
                <img alt="icon" src="/img/service-icon-1.png" />
              </i>
              <a href="#">
                <h4>Creative Design</h4>
              </a>
              <p>
                A custom logo design is a crucial part of your overall branding
                process. Your logo design is a significant.
              </p>
            </div>
            <div className="service-text two">
              <i>
                <img alt="icon" src="/img/service-icon-2.png" />
              </i>
              <a href="#">
                <h4>Dedicated Server</h4>
              </a>
              <p>
                A custom logo design is a crucial part of your overall branding
                process. Your logo design is a significant.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="service-img">
              <img alt="service" src="/img/services.png" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="service-text three">
              <i>
                <img alt="icon" src="/img/service-icon-3.png" />
              </i>
              <a href="#">
                <h4>Mobile Applications</h4>
              </a>
              <p>
                A custom logo design is a crucial part of your overall branding
                process. Your logo design is a significant.
              </p>
            </div>
            <div className="service-text for">
              <i>
                <img alt="icon" src="/img/service-icon-4.png" />
              </i>
              <a href="#">
                <h4>Quality Support</h4>
              </a>
              <p>
                A custom logo design is a crucial part of your overall branding
                process. Your logo design is a significant.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServicesMain;
