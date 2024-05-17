import React from "react";

function Background() {
  return (
    <>
      <div className=" bg-blue absolute h-[100vh] w-full">
        <svg className="hidden">
          <defs>
            <filter id="blend">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="blend"
              />
              <feBlend in="SourceGraphic" in2="blend" />
            </filter>
          </defs>
        </svg>

        <div style={{ filter: "url(#blend) blur(150px)" }}>
          <div className="pink-circle animate-newCircleOne left-1/4 top-14 mix-blend-hard-light"></div>

          <div className="pink-circle animate-newCircleTwo left-1/2 top-14"></div>

          <div className="pink-circle animate-newCircleThree left-1/3 top-[20rem]"></div>

          <div className="pink-circle w-[10rem] h-[10rem] -right-10 -top-10 animate-diagonalAnimation"></div>
        </div>
      </div>
    </>
  );
}

export default Background;
