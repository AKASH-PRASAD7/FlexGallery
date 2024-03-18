import React from "react";
import Image from "next/image";
type ImageCardProps = {
  width: number;
  heigth: number;
  id: string;
  description: string;
  url: string;
};

const ImageCard = ({ width, heigth, id, description, url }: ImageCardProps) => {
  return (
    <>
      <section>
        <Image
          src={url}
          alt={description}
          width={width}
          height={heigth}
          className="p-2 "
        />
      </section>
    </>
  );
};

export default ImageCard;
