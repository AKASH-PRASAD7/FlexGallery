"use client";
import { setStarredImages } from "@/state/imageSlice";
import Image from "next/image";
import { Star } from "lucide-react";
import { useDispatch } from "react-redux";
import ImageData from "@/types/imageData";

const ImageCard = ({ image }: { image: ImageData }) => {
  const dispatch = useDispatch();
  const { urls, description, width, height, id, liked_by_user, sponsorship } =
    image;

  return (
    <>
      <section className="relative">
        <Image
          src={urls.regular}
          alt={description || "image"}
          width={width}
          height={height}
          className="p-2 "
        />
        {!liked_by_user && (
          <Star
            onClick={() => dispatch(setStarredImages(id))}
            size={32}
            className={`absolute top-6 right-10 cursor-pointer ${
              liked_by_user
                ? "hover:text-black text-yellow-500"
                : " hover:text-yellow-500 text-black "
            }  rounded-full `}
          />
        )}
        {sponsorship && (
          <div className="absolute bottom-0 left-4 p-2 ">
            <Image
              src={sponsorship.sponsor.profile_image.medium}
              alt={sponsorship.sponsor.username}
              width={30}
              height={30}
              className="rounded-full"
            />
            <p className="text-white">{sponsorship.sponsor.username}</p>
          </div>
        )}
      </section>
    </>
  );
};

export default ImageCard;
