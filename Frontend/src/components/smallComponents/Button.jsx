import React from "react";

const Button = (props) => {
  return (
    <div className="relative cursor-pointer transition-all hover:font-bold">
      <button type="button" className="relative bg-black text-white p-1 px-6">
        {props.icon}{props.title}
      </button>
        <div className="absolute border-2 border-black bottom-0 tran translate-x-[0.4rem] translate-y-[0.3rem] w-full h-full"></div>
    </div>
  );
};

export default Button;
