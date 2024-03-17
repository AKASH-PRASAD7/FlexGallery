"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex text-slate-100 items-center gap-4 px-8 shadow-lg shadow-slate-400 glass">
      <div className="logo">
        <Image src="/logo.png" width={62} height={62} alt="flexgallery" />
      </div>
      <Link
        href="/"
        className={`${
          pathname === "/"
            ? "text-indigo-600 border-b-2  border-indigo-700"
            : ""
        } ml-8 mx-2 text-xl hover:text-indigo-500 font-semibold font-mono`}
      >
        Home
      </Link>
      <Link
        href="/starred"
        className={` ${
          pathname === "/starred"
            ? "text-indigo-600 border-b-2 border-indigo-700"
            : ""
        } text-xl mx-2 font-semibold font-mono hover:text-indigo-500`}
      >
        Starred
      </Link>
    </nav>
  );
};

export default Navbar;
