import React from "react";

const FaqMain = () => {
  const accordionHandler = (e) => {
    e.preventDefault();

    const accordionItem = e.target.parentElement;
    const content = e.target.nextElementSibling;
    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItem.classList.contains("active")
      ? accordionItem.classList.remove("active")
      : accordionItem.classList.add("active");

    content.style.height === "0px" || content.style.height === "0px" || !content.style.height
      ? (content.style.height = content.scrollHeight + "px")
      : (content.style.height = "0px");

    [...accordionItems]
      .filter((item) => item !== e.target.parentElement)
      .forEach((item) => {
        item.classList.remove("active");
        item.querySelector(".content").style.height = "0px"
      })
  };

  return (
    <section id="faqs" className="questions gap">
      <div className="container">
        <div className="heading heading-center">
          <span>frequently asked questions</span>
          <h2>Find Answers to Your Questions Instantly</h2>
        </div>
        <div className="accordion">
          <div className="accordion-item">
            <a href="#" className="heading" onClick={accordionHandler}>
              <div className="icon"></div>
              <div className="title">What is a landing page in Unbounce?</div>
            </a>

            <div className="content" style={{ height: 0 }}>
              <p>
                At the top-right corner of the Page Overview, click the blue
                Publish button. From the drop-down menu that appears, click
                Publish Now: See our documentation to learn more about Scheduled
                Publishing.
              </p>
            </div>
          </div>

          <div className="accordion-item active">
            <a href="#" className="heading" onClick={accordionHandler}>
              <div className="icon"></div>
              <div className="title">
                How do I publish an Unbounce landing page?
              </div>
            </a>

            <div className="content d-block">
              <p>
                At the top-right corner of the Page Overview, click the blue
                Publish button. From the drop-down menu that appears, click
                Publish Now: See our documentation to learn more about Scheduled
                Publishing.
              </p>
            </div>
          </div>

          <div className="accordion-item">
            <a href="#" className="heading" onClick={accordionHandler}>
              <div className="icon"></div>
              <div className="title">
                How do I make my Unbounce page responsive?
              </div>
            </a>

            <div className="content" style={{ height: 0 }}>
              <p>
                At the top-right corner of the Page Overview, click the blue
                Publish button. From the drop-down menu that appears, click
                Publish Now: See our documentation to learn more about Scheduled
                Publishing.
              </p>
            </div>
          </div>

          <div className="accordion-item">
            <a href="#" className="heading" onClick={accordionHandler}>
              <div className="icon"></div>
              <div className="title">Why use Unbounce landing pages?</div>
            </a>

            <div className="content" style={{ height: 0 }}>
              <p>
                At the top-right corner of the Page Overview, click the blue
                Publish button. From the drop-down menu that appears, click
                Publish Now: See our documentation to learn more about Scheduled
                Publishing.
              </p>
            </div>
          </div>

          <img alt="accordion" src="/img/accordion.png" />
        </div>
      </div>
    </section>
  );
};

export default FaqMain;
