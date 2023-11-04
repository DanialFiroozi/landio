import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-text">
          <img alt="shaps" className="shaps img-fluid" src="/img/footer-shaps.png" />
          <h2>Book a Free Consultation</h2>
          <p>
            We'll focus on your product goals, context and technology needs to
            make sure we can add
          </p>
          <a href="#" className="btn">
            Book a Free Trial
          </a>
        </div>
        <div className="row footer-address">
          <div className="col-lg-4 p-0">
            <div className="address">
              <img alt="address" className="img-fluid" src="/img/address.png" />
              <div>
                <h3>address</h3>
                <p>Go Up Ltd 71 Leonard Street London EC2A 4QS</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 p-0">
            <div className="address phone">
              <img alt="Phone" className="img-fluid" src="/img/phan.png" />
              <div>
                <h3>phone:</h3>
                <p>
                  Home:<a href="callto:02078717662">0207 871 7662</a>
                </p>
                <p>
                  Office:<a href="callto:02078717662">0207 871 7662</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 p-0">
            <div className="address email">
              <img alt="address" className="img-fluid" src="/img/email.png" />
              <div>
                <h3>Email:</h3>
                <p>
                  <a href="mailto:Info@domainname.com">Info@domainname.com</a>
                </p>
                <p>
                  <a href="mailto:office@domain.com">office@domain.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="footer-p">
          2023 © Landy | Creative Consulting HTML Landing Page.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
