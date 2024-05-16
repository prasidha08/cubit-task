import React from "react";

type TooltipProps = {
  children: JSX.Element;
  title: string;
  description: string;
};
function Tooltip({ children, title, description }: TooltipProps) {
  return (
    <span className="group relative">
      <span
        className="absolute hidden z-[999] -top-[7rem] left-[1rem] -translate-x-[70%] whitespace-nowrap bg-white 
        p-2 transition group-hover:block  before:content[''] before:absolute before:top-full 
        before:right-3.5  before:border-[.7rem]  before:border-t-[18px] before:border-transparent before:border-t-[white] shadow-xl rounded-[4px]"
      >
        <div className="flex flex-col w-[231px] h-[84px] leading-tight text-xs p-2 whitespace-normal gap-2">
          <p className="font-normal ">{title}</p>
          <p className="font-light break-words">{description}</p>
        </div>
      </span>
      {children}
    </span>
  );
}

export default Tooltip;
