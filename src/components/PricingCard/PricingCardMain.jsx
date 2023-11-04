import React from "react";

const PricingCardMain = ({ type, price, styleClass }) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="pricing-plan-style">
        <div className={`pricing-pr ${styleClass}`}>
          <i>
            <img alt="plan" src="/img/plan.png" />
          </i>
          <span> {type} </span>
          <h4>
            {price}
            <span>/ month</span>
          </h4>
        </div>
        <ul>
          <li>
            <div className="bolo"></div>
            24x7 Premium support
          </li>
          <li>
            <div className="bolo"></div>
            Site Optimisation
          </li>
          <li>
            <div className="bolo"></div>
            Monthly Report
          </li>
          <li>
            <div className="bolo"></div>
            No Minimum Term
          </li>
        </ul>
        <a href="#" className="btn">
          Select Now
        </a>
      </div>
    </div>
  );
};

export default PricingCardMain;
