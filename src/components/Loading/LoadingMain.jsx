import React from "react";

const LoadingMain = ({percentage}) => {
  return (
    <div className="preloader" style={{top: percentage + "%"}}>
      <div className="circle">
        <div>
          <div>
            <div>
              <div>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingMain;
