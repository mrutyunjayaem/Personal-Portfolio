import React, { useState } from "react";
import { Link } from "react-router-dom";
function Header() {
  const [active,setactive]= useState(false);
  window.addEventListener("scroll",function(){
    if(this.window.scrollY > 10){
      setactive(true);
    }
    else{
      setactive(false);
    }
  })
  return (
    <header className={`${active ? "activenav" : ""} z-40`}>
    <div className="flex w-screen  justify-around items-center py-8 px-2">
        <Link to="/" className="text-white text-4xl uppercase font-medium">Mrutyunjaya EM</Link>
      <ul className="flex space-x-8 text-white">
        <li>
          <Link to="/about" className="hover:text-yellow-400">
            About
          </Link>
        </li>
        <li>
          <Link to="/skills" className="hover:text-yellow-400">Skills</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-yellow-400" >Contact</Link>
        </li>
      </ul>
    </div></header>
  );
}

export default Header;
