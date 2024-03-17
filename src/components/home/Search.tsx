"use client";
import React, { useState } from "react";
import { Search as SearchIcon } from "lucide-react";

const Search = () => {
  const [search, setSearch] = useState("");

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      console.log(search);
      setSearch("");
    }
  };

  const handleSearchClicked = () => {
    console.log(search);
    setSearch("");
  };

  return (
    <>
      <section className="w-1/3 relative flex mx-auto items-center ">
        <SearchIcon
          onClick={handleSearchClicked}
          className="absolute top-6 left-1 text-slate-700 hover:text-indigo-700 cursor-pointer z-10"
        />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          className="outline-2 pl-8 outline-indigo-800  mx-auto  bg-transparent glass rounded-xl p-2 shadown-2xl shadow-indigo-800 font-bold text-indigo-700 m-4"
          placeholder="Search high quality images..."
        />
      </section>
    </>
  );
};

export default Search;
