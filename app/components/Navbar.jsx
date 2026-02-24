"use client";
import React, { Suspense } from "react";
import Navbaritem from "./Navbaritem";

const Navbar = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex dark:bg-amber-600 bg-amber-100 p-4 lg:text-lg text-sm justify-center gap-4">
        <Navbaritem title="Trending" param="FetchTrending" />
        <Navbaritem title="Top Rated" param="TopRated" />
      </div>
    </Suspense>
  );
};

export default Navbar;
