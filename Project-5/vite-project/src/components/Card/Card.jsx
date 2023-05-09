import React from "react";

const Card1 = (props) => {
  return (
      <div data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1500" className="max-w-[420px] flex flex-col justify-between items-start min-h-[580px]">
        <div className="flex flex-col gap-[19px]">
          <div className="flex flex-col gap-[40px] items-start">
            <img src={props.img} className="mx-auto" alt="" />
            <h1 className="font-[600] text-[30px] text-[#263238] leading-[48px]">{props.h1}</h1>
          </div>
          <p className="font-[400] text-[20px] text-[#8F95A5] leading-[30px]">{props.p}</p>
        </div>
        <button className="flex items-center gap-[8px] px-[21px] bg-[#EEEEEE] rounded-[5px]">
            <h1 className="font-[400] text-[30px] text-[#263238] leading-[45px]">{props.btnh1}</h1>
            <p className="font-[400] text-[18px] text-[#546269] leading-[27px]">{props.btnp}</p>
        </button>
      </div>
  );
};

export default Card1;
