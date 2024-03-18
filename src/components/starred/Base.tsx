"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/state/store";
import ImageGrid from "../ImageGrid";

const Index = () => {
  const { starredImages } = useSelector((state: RootState) => state.image);
  return (
    <>
      <section className="mt-24">
        {starredImages.length > 0 ? (
          <ImageGrid images={starredImages} />
        ) : (
          <section className="min-h-screen">
            <p className="sm:text-4xl md:text-5xl lg:text-5xl font-bold mt-4 text-center text-white">
              No starred images to show
            </p>
          </section>
        )}
      </section>
    </>
  );
};

export default Index;
