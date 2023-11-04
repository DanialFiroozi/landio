import React from "react";
import PricingCardMain from "../PricingCard/PricingCardMain";

const PricingMain = () => {
  return (
    <section id="pricing" className="gap pricing-plan">
      <div className="container">
        <div className="heading heading-center">
          <span>Plans and Pricing</span>
          <h2>Best Possible Rates No Credit Card Required</h2>
        </div>
        <div className="row">
          <PricingCardMain type="Individuals" price="$90" />
          <PricingCardMain type="Professionals" price="$150" styleClass="two" />
          <PricingCardMain type="Companies" price="$320" styleClass="three" />
        </div>
        <div className="row gap no-bottom align-items-center">
          <div className="col-lg-5">
            <div className="join-now">
              <img src="/img/join-now.png" alt="join-now" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="join-now-text">
              <img alt="shaps" className="shaps" src="/img/shaps.png" />
              <h3>
                Join Now! Don’t Miss The Special Offer <span>40% Discount</span>
              </h3>
              <h6>
                let your users know a little more about your product or service.
              </h6>
              <a href="#" className="btn">
                Book a Free Trial
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingMain;
