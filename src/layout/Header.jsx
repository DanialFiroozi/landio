import React from "react";

const Header = () => {
  const transitionHandler = (e) => {
    e.preventDefault();

    const href = e.target.getAttribute("href");
    const targetPos = document.querySelector(`${href}`).offsetTop;

    window.scrollTo({
      top: targetPos,
      behavior: "smooth",
    });
  };

  return (
    <header id="stickyHeader">
      <div className="container">
        <div className="top-bar">
          <div className="logo">
            <img className="img-fluid" alt="logo" src="/img/logo.png" />
          </div>
          <nav>
            <ul>
              <li>
                <a href="#about" onClick={transitionHandler}>
                  About
                </a>
              </li>
              <li>
                <a href="#services" onClick={transitionHandler}>Services</a>
              </li>
              <li>
                <a href="#team" onClick={transitionHandler}>Team</a>
              </li>
              <li>
                <a href="#pricing" onClick={transitionHandler}>Pricing</a>
              </li>
              <li>
                <a href="#faqs" onClick={transitionHandler}>Faq’s</a>
              </li>
            </ul>
          </nav>
          <a href="callto:+12344502086">
            <i>
              <img className="img-fluid" alt="mobil" src="/img/mobil.png" />
            </i>
            <b> +1234 450 2086</b>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
