import React from "react";
import woman from "../../img/pexels-godisable-jacob-3195979 Background Removed.png";

const Hero = () => {
  return (
    <section className="bg-pink-200 h-[600px] bg-hero bg-no-repeat bg-cover bg-center py-24 overflow-hidden">
      <div className="container mx-auto flex flex-row justify-around h-full">
        <div className="flex border w-6/12">
          <div>
            <h1>New Trends</h1>
          </div>
        </div>
        <div className="bg-red-500 w-6/12 object-cover">
          <img src={woman} alt="" className="-mt-5 pl-80"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
