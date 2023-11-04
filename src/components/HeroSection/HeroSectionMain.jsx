import React from "react";

const HeroSectionMain = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="hero-text">
              <h2>Awesome Template to Promote Your Services</h2>
              <p>
                Start your business today with a great and strong landing page
                made to enhance the marketer's workflow.
              </p>
              <div className="video">
                <div className="svg-icon">
                  <a href="https://www.youtube.com/watch?v=1La4QzGeaaQ">
                    <img
                      className="video-img circle-layer"
                      alt="video"
                      src="/img/video.png"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="35"
                      height="56"
                      viewBox="0 0 35 56"
                    >
                      <defs>
                        <clipPath id="clip-video_arrow">
                          <rect width="35" height="56"></rect>
                        </clipPath>
                      </defs>
                      <g
                        id="video_arrow"
                        data-name="video arrow"
                        clipPath="url(#clip-video_arrow)"
                      >
                        <path
                          data-name="Shape 1"
                          d="M1362,5000.8,1327,4972V5027Z"
                          transform="translate(-1326.998 -4971.996)"
                          fill="rgba(0,0,0,0)"
                        ></path>
                        <path
                          data-name="Shape 1 - Outline"
                          d="M1333,5015.017l19.29-14.437L1333,4984.7v30.313M1327,5027V4972l35,28.807Z"
                          transform="translate(-1326.998 -4971.996)"
                        ></path>
                      </g>
                    </svg>
                  </a>
                </div>
                <div>
                  <img src="/img/google.png" alt="icon" />
                  <h3>
                    4.9 <span>out of 5</span>
                  </h3>
                </div>
                <ul className="stars">
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
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <form
              role="form"
              className="get-a-quote"
              id="contact-form"
              method="post"
            >
              <div>
                <h6>Marketing Business campaign</h6>
                <h3>Request a Quote</h3>
              </div>
              <div className="group-img">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.364 11.636C14.3837 10.6558 13.217 9.93013 11.9439 9.49085C13.3074 8.55179 14.2031 6.9802 14.2031 5.20312C14.2031 2.33413 11.869 0 9 0C6.131 0 3.79688 2.33413 3.79688 5.20312C3.79688 6.9802 4.69262 8.55179 6.05609 9.49085C4.78308 9.93013 3.61631 10.6558 2.63605 11.636C0.936176 13.3359 0 15.596 0 18H1.40625C1.40625 13.8128 4.81279 10.4062 9 10.4062C13.1872 10.4062 16.5938 13.8128 16.5938 18H18C18 15.596 17.0638 13.3359 15.364 11.636ZM9 9C6.90641 9 5.20312 7.29675 5.20312 5.20312C5.20312 3.1095 6.90641 1.40625 9 1.40625C11.0936 1.40625 12.7969 3.1095 12.7969 5.20312C12.7969 7.29675 11.0936 9 9 9Z"
                    fill="#555555"
                  ></path>
                </svg>
                <input
                  type="text"
                  name="Complete Name"
                  placeholder="Complete Name"
                  required=""
                />
              </div>
              <div className="group-img">
                <svg
                  width="22"
                  height="18"
                  viewBox="0 0 22 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.8649 18H6.13513C2.58377 18 0.540527 15.9568 0.540527 12.4054V5.5946C0.540527 2.04324 2.58377 0 6.13513 0H15.8649C19.4162 0 21.4595 2.04324 21.4595 5.5946V12.4054C21.4595 15.9568 19.4162 18 15.8649 18ZM6.13513 1.45946C3.35242 1.45946 1.99999 2.81189 1.99999 5.5946V12.4054C1.99999 15.1881 3.35242 16.5406 6.13513 16.5406H15.8649C18.6476 16.5406 20 15.1881 20 12.4054V5.5946C20 2.81189 18.6476 1.45946 15.8649 1.45946H6.13513Z"
                    fill="#444444"
                  ></path>
                  <path
                    d="M10.9988 9.8465C10.1815 9.8465 9.35452 9.59352 8.72208 9.07785L5.67668 6.64539C5.36532 6.39241 5.30696 5.93511 5.55992 5.62376C5.8129 5.31241 6.2702 5.25403 6.58155 5.50701L9.62695 7.93947C10.3664 8.53298 11.6215 8.53298 12.361 7.93947L15.4064 5.50701C15.7178 5.25403 16.1848 5.30268 16.428 5.62376C16.681 5.93511 16.6324 6.40214 16.3113 6.64539L13.2659 9.07785C12.6432 9.59352 11.8161 9.8465 10.9988 9.8465Z"
                    fill="#444444"
                  ></path>
                </svg>
                <input
                  type="text"
                  name="Email Address"
                  placeholder="Email Address"
                  required=""
                />
              </div>
              <div className="group-img">
                <svg
                  fill="none"
                  height="112"
                  viewBox="0 0 24 24"
                  width="112"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipRule="evenodd" fill="rgb(0,0,0)" fillRule="evenodd">
                    <path d="m7 2.75c-.41421 0-.75.33579-.75.75v17c0 .4142.33579.75.75.75h10c.4142 0 .75-.3358.75-.75v-17c0-.41421-.3358-.75-.75-.75zm-2.25.75c0-1.24264 1.00736-2.25 2.25-2.25h10c1.2426 0 2.25 1.00736 2.25 2.25v17c0 1.2426-1.0074 2.25-2.25 2.25h-10c-1.24264 0-2.25-1.0074-2.25-2.25z"></path>
                    <path d="m10.25 5c0-.41421.3358-.75.75-.75h2c.4142 0 .75.33579.75.75s-.3358.75-.75.75h-2c-.4142 0-.75-.33579-.75-.75z"></path>
                    <path d="m9.25 19c0-.4142.33579-.75.75-.75h4c.4142 0 .75.3358.75.75s-.3358.75-.75.75h-4c-.41421 0-.75-.3358-.75-.75z"></path>
                  </g>
                </svg>
                <input
                  type="text"
                  name="Phone No"
                  placeholder="Phone No"
                  required=""
                />
              </div>
              <p>Preferred Consult Method: </p>
              <div className="d-flex align-items-center">
                <div className="radio-button">
                  <input
                    type="radio"
                    id="VirtualIn-Office"
                    name="fav_language"
                    value="Virtual"
                  />
                  <label htmlFor="Virtual">Virtual</label>
                </div>
                <div className="radio-button">
                  <input
                    type="radio"
                    id="css"
                    name="fav_language"
                    value="In-Office"
                  />
                  <label htmlFor="css">In-Office</label>
                  <br />
                </div>
              </div>
              <button
                type="submit"
                className="btn"
                onClick={(e) => e.preventDefault()}
              >
                Start Free Trial
              </button>
            </form>
          </div>
        </div>
      </div>
      <img alt="shaps" className="shaps" src="/img/footer-shaps.png" />
    </section>
  );
};

export default HeroSectionMain;
