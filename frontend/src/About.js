import React from "react";
import Header from "./Header";

function About() {
  return (
    <div className="bg-white h-screen w-screen flex flex-col items-center">
    <div className="bg_design ">
        <Header/></div>
        <div className="bg-white flex flex-col py-16 px-24 mt-24 space-y-4 border-4 border-black rounded-xl">
            <div className="text-4xl uppercase font-bold uppercase">About</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
        </div>
    </div>
  );
}

export default About;