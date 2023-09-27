import React from "react";

function Navbar() {
  return (
    <div className="p-3 flex items-center justify-evenly">
      {/*Logohere*/}
      <div className="flex items-center">
        <img
          className="w-14 h-14"
          src="https://cdn-icons-png.flaticon.com/512/2331/2331966.png"
          alt="logo"
        />
        <h1 className="text-2xl font-bold mx-2 text-red-400">E-Com</h1>
      </div>
      {/*Searchbarhere*/}
      <div className="flex items-center justify-center border-0.5 border-[1px] rounded-xl">
        <div className="flex items-center justify-center border-opacity-20 border-r px-2 border-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 ml-2 opacity-20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            className="w-200px h-10 px-3 text-[12px] outline-none bg-transparent"
            placeholder="Search Products"
            type="text"
          />
        </div>
        <div className="flex items-center justify-center px-3 opacity-40">
          <span className="text-[12px]">All Categories</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 mx-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <div className="bg-black h-full rounded-r-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-10 mx-4 text-white"
            width="100%"
            height="100%"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
      {/*Menu Icons*/}
      <div className="flex items-center">Menu</div>
    </div>
  );
}

export default Navbar;
