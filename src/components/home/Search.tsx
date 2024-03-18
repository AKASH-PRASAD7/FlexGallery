"use client";
import React, { useState, useEffect } from "react";
import { Search as SearchIcon } from "lucide-react";
import useSearchImage from "@/hooks/useSearchImage";
import { useDispatch } from "react-redux";
import { setSearchImages } from "@/state/imageSlice";

const Search = () => {
  const [search, setSearch] = useState("");

  const { searchImages, images } = useSearchImage();
  const dispatch = useDispatch();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      searchImages(search);

      setSearch("");
    }
  };

  const handleSearchClicked = () => {
    searchImages(search);
    setSearch("");
  };

  useEffect(() => {
    dispatch(setSearchImages(images));
  }, [images]);

  return (
    <>
      <section className="w-2/4 relative flex mx-auto items-center ">
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
