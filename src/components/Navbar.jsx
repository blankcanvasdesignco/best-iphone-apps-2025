import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  //   const navigate = useNavigate();

  return (
    <nav className=" text-black py-4 shadow-sm bg-white border-b sticky top-0 z-10">
      <div className="container mx-auto flex h-6 justify-center sm:justify-start w-[90%] items-center gap-8">
        <Link to="/" className="text-xl">
          Home
        </Link>
        <Link to="/blogs" className="text-xl">
          Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
