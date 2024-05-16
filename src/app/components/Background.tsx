import React from "react";

function Background() {
  return (
    <>
      <div
        className="bg-blue absolute h-[100vh] w-full"
        // style={{
        //   filter: "url(#goo) ",
        // }}
      >
        {/* <div className="pink-circle top-[20rem] left-[60rem] animate-circle1"></div>
        <div className="pink-circle top-[10rem] left-[40rem] animate-circle2"></div>
        <div className="pink-circle bottom-[10rem] left-[30rem]"></div> */}

        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
      </div>
    </>
  );
}

export default Background;
