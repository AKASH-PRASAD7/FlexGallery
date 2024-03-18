"use client";
import React, { useEffect } from "react";
import { setImages } from "@/state/imageSlice";
import { useDispatch, useSelector } from "react-redux";
import useGetImages from "@/hooks/useGetImages";
import ImageGrid from "@/components/ImageGrid";
import { RootState } from "@/state/store";
import HeroSection from "./HeroSection";

const index = () => {
  const { images: hookImages, loading, getImages } = useGetImages();
  const dispatch = useDispatch();
  const { images, searchImages } = useSelector(
    (state: RootState) => state.image
  );
  useEffect(() => {
    if (images.length === 0) {
      getImages();
    }
  }, [images.length, getImages]);

  useEffect(() => {
    dispatch(setImages(hookImages));
  }, [hookImages]);
  return (
    <>
      <HeroSection />

      <ImageGrid
        images={searchImages.length === 0 ? images : searchImages}
        loading={loading}
      />
    </>
  );
};

export default index;
