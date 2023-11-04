import React, { useState } from "react";
import CountUp from "react-countup";

const AboutMain = () => {
  const [isInTheViewPort, setIsInTheViewPort] = useState([]);

  window.addEventListener("scroll", (e) => {
    const boundingTop = document
      .querySelector("#about")
      .getBoundingClientRect().top;

    if (boundingTop <= 0)
      setIsInTheViewPort([
        <CountUp start={0} end={3} delay={2} duration={13} />,
        <CountUp start={0} end={40} delay={2} duration={13} />,
        <CountUp start={0} end={12} delay={2} duration={13} />,
      ]);
  });

  return (
    <section id="about" className="gap">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="heading">
              <span>Welcome to Consulting Landing</span>
              <h2>We Provide The SolutionsTo Grow Your Business</h2>
              <img alt="consulting" src="/img/about-png.png" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="consulting_landing_text">
              <p>
                We focus on <u>quality, innovation and speed.</u> Branex is a
                premium web design company in Uk When an unknown printer took a
                galley of type and scrambled it to make a type specimen book.
              </p>
              <ul>
                <li>Our service is astonishingly thin and light.</li>
                <li>Build a Landing Page That Actually Converts</li>
                <li>Everything about your landing page</li>
              </ul>
            </div>
            <div className="row align-items-center count-p">
              <div className="col-6">
                <div className="count-style">
                  <h2>
                    {isInTheViewPort[0]}
                    <sup>K</sup>
                  </h2>
                  <span>Happy Satisfied Customers</span>
                </div>
                <div className="count-style two">
                  <h2>
                    {isInTheViewPort[1]}
                    <sup>+</sup>
                  </h2>
                  <span>Professional Team Members</span>
                </div>
              </div>
              <div className="col-6">
                <div className="count-style three">
                  <h2>
                    {isInTheViewPort[2]}
                    <sup>M</sup>
                  </h2>
                  <span>Company Projects Completed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMain;
