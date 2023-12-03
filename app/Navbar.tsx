import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar rounded-box sticky top-0 z-20 backdrop-blur">
      <div className="flex-1 px-2 lg:flex-none">
        <a className="btn btn-ghost rounded-btn">Ayush 🏠</a>
      </div>
      <div className="flex justify-end flex-1 px-2">
        <div className="flex items-stretch">
          <a className="btn btn-ghost rounded-btn">Projects</a>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost rounded-btn"
            >
              My Recommendations
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-[1] p-2 shadow bg-gray-700 rounded-box w-52 mt-4"
            >
              <li className="bg-violet-500 rounded-2xl">
                <Link href="/movies">Movies</Link>
              </li>
              <li>
                <Link href="/books">Books</Link>
              </li>
              <li>
                <Link href="/anime">Anime</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
