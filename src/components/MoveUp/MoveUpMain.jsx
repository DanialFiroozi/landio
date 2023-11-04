import React, { useState } from "react";

const MoveUpMain = () => {
  const [isLessThan200, setIsLessThan200] = useState(false);

  window.addEventListener("scroll", (e) => {
    const boundingTop = document.body.getBoundingClientRect().top;

    boundingTop < -300 ? setIsLessThan200(true) : setIsLessThan200(false);
  });

  const moveUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      id="progress"
      className={isLessThan200 ? "d-block" : ""}
      onClick={moveUp}
    >
      <span id="progress-value">
        <i className="fa-solid fa-arrow-up"></i>
      </span>
    </div>
  );
};

export default MoveUpMain;
