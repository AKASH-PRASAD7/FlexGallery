"use client";
import React, { useEffect } from "react";
import ImageCard from "./ImageCard";
import useGetImages from "@/hooks/useGetImages.ts";
import Loader from "./Loader";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { setImages } from "@/state/imageSlice";
import { useDispatch, useSelector } from "react-redux";

const ImageGrid = () => {
  const { images: hookImages, loading, getImages } = useGetImages();
  const dispatch = useDispatch();
  const { images } = useSelector((state) => state.image);

  useEffect(() => {
    getImages();
  }, []);

  useEffect(() => {
    dispatch(setImages(hookImages));
  }, [hookImages]);

  return (
    <>
      //TODO:Lazy load images
      <section className=" mx-4 mt-4 ">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry>
            {loading ? (
              <Loader />
            ) : (
              images?.map((image) => <ImageCard key={image.id} image={image} />)
            )}
          </Masonry>
        </ResponsiveMasonry>
      </section>
    </>
  );
};

export default ImageGrid;
