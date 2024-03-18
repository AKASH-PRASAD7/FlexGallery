"use client";
import { setStarredImages } from "@/state/imageSlice";
import Image from "next/image";
import { Star } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

import ImageData from "@/types/imageData";
import { useEffect } from "react";

const ImageCard = ({ image }: { image: ImageData }) => {
  const dispatch = useDispatch();
  const { urls, description, width, height, id, liked_by_user } = image;
  const { starredImages } = useSelector((state) => state.image);

  console.log(starredImages);

  return (
    <>
      <section className="relative">
        <Image
          src={urls.regular}
          alt={description}
          width={width}
          height={height}
          className="p-2 "
        />
        <Star
          onClick={() => {
            dispatch(setStarredImages(id));
          }}
          size={32}
          className={`absolute top-6 right-10 cursor-pointer ${
            liked_by_user
              ? "hover:text-black text-yellow-500"
              : " hover:text-yellow-500 text-black "
          }  rounded-full `}
        />
      </section>
    </>
  );
};

export default ImageCard;
