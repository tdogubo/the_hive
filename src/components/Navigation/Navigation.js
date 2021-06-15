import React from "react";
import Logo from "./Logo/Logo";
import Home from "./User/User";
import "../header.css";
import Contact from "./Contact/Contact";

const Navigation = () => {
  return (
    <div>
      <nav className=" flex justify-between items-center h-16 bg-yellow-100 shadow-md">
        <div>
          <Logo />
        </div>
        <div>
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Ribeye&display=swap');
          </style>
          <h1 className="header">THE HIVE</h1>
        </div>
        <div className="px-2.5 flex flex-wrap content-center">
          <div className=" font-serif space-x-4">
            <button className="">About</button>
            <Contact />
            <Home />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
