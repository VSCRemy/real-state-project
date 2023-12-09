import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <h1 className="text-4xl font-logo font-bold">DreamHome.</h1>
        </Link>

        <div className="flex items-center gap-6">
          <Link to="" className="hover:text-sky-500 transition">
            Log in
          </Link>
          <Link
            to=""
            className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-3 rounded-lg transition"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
