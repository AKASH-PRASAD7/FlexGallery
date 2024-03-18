"use client";
import React, { useEffect } from "react";
import ImageCard from "./ImageCard";
import useGetImages from "@/hooks/useGetImages.ts";
import Loader from "./Loader";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const ImageGrid = () => {
  const { images, loading, getImages } = useGetImages();

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <section className=" mx-4 mt-4 ">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry>
            {loading ? (
              <Loader />
            ) : (
              images.map((image) => (
                <ImageCard
                  key={image.id}
                  width={image.width}
                  heigth={image.height}
                  id={image.id}
                  description={image.description}
                  url={image.urls.regular}
                />
              ))
            )}
          </Masonry>
        </ResponsiveMasonry>
      </section>
    </>
  );
};

export default ImageGrid;
