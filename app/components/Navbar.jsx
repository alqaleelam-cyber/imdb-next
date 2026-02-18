import React from "react";
import Navbaritem from "./Navbaritem";

const Navbar = () => {
  return (
    <div className="flex dark:bg-amber-600 bg-amber-100 p-4 lg:text-lg text-sm justify-center gap-4">
      <Navbaritem title="Trending" param="FetchTrending" />
      <Navbaritem title="Top Rated" param="TopRated" />
    </div>
  );
};

export default Navbar;
