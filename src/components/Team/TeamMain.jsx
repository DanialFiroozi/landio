import React from "react";

const TeamMain = () => {
  return (
    <section id="team" className="team gap">
      <div className="container">
        <div className="heading two heading-center">
          <span>Dedicated To The People</span>
          <h2>Meet Our Expert Team</h2>
          <ul className="star">
            <li>
              <i className="fa-solid fa-star"></i>
            </li>
            <li>
              <i className="fa-solid fa-star"></i>
            </li>
            <li>
              <i className="fa-solid fa-star"></i>
            </li>
            <li>
              <i className="fa-solid fa-star"></i>
            </li>
            <li>
              <i className="fa-solid fa-star"></i>
            </li>
            <li>
              <h6>4.9 out of 5</h6>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="team-text">
              <a href="#" className="brand">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <img alt="img" src="/img/team-1.jpg" />
              <span>Expert Consultant</span>
              <h5>Thomas Willimes</h5>
              <a href="callto:+12344502086">
                <i>
                  <img alt="mobil" src="/img/mobil.png" />
                </i>
                <b> +1234 450 2086</b>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="team-text">
              <a href="#" className="brand t">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <img alt="img" src="/img/team-2.jpg" />
              <span>Expert Consultant</span>
              <h5>Jessica Jobbin</h5>
              <a href="callto:+12344502086">
                <i>
                  <img alt="mobil" src="/img/mobil.png" />
                </i>
                <b> +1234 450 2086</b>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="team-text mb-0">
              <a href="#" className="brand in">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <img alt="img" src="/img/team-3.jpg" />
              <span>Expert Consultant</span>
              <h5>Moniqa Linda</h5>
              <a href="callto:+12344502086">
                <i>
                  <img alt="mobil" src="/img/mobil.png" />
                </i>
                <b> +1234 450 2086</b>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMain;
