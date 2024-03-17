"use client";
import React, { useEffect } from "react";
import ImageCard from "./ImageCard";
import useGetImages from "@/hooks/useGetImages.ts";

const ImageGrid = () => {
  const { images, loading, getImages } = useGetImages();
  console.log(images, loading);

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <section>
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </section>
    </>
  );
};

export default ImageGrid;
