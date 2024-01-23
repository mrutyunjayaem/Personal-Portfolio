import React from "react";
import Header from "./Header";

function Skills() {
  return (
    <div className="bg-white h-screen w-screen flex flex-col items-center">
    <div className="bg_design ">
        <Header/></div>
        <div className="bg-white flex flex-col py-16 px-24 mt-24 space-y-4 border-4 border-black rounded-xl">
            <div className="text-4xl uppercase font-bold uppercase">Skills</div>
            <div>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        
        </div>
    </div>
  );
}

export default Skills;