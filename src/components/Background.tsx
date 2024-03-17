import React from "react";
import Image from "next/image";

const Background = () => {
  const url =
    "https://images.unsplash.com/photo-1682686581498-5e85c7228119?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="relative">
      <Image
        width={1920}
        height={1080}
        src={url}
        alt="background-image"
        className="h-screen w-full fixed left-0 top-0 -z-[10]"
      />
      <div
        className="h-screen w-full fixed left-0 top-0 bg-black opacity-35"
        style={{ zIndex: -5 }}
      ></div>
    </div>
  );
};

export default Background;
