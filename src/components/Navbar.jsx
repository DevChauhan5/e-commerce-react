import React from "react";

function Navbar() {
  return (
    <div className="p-3 flex items-center justify-around">
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
      <div>
        <input className="w-200px h-10 px-3 rounded-lg border-2 border-black" type="text" />
        
      </div>
      {/*Menu Icons*/}
      <div className="flex items-center">
        Menu
        </div>
    </div>
  );
}

export default Navbar;
