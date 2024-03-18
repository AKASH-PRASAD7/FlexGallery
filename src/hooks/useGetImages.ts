import toast from "react-hot-toast";
import axios from "axios";
import { useState } from "react";
import variables from "@/config/variables";
import ImageData from "@/types/imageData";

const useGetImages = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState(false);

  const getImages = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.unsplash.com/photos/?client_id=${variables.Access_key}&page=1&per_page=15`
      );
      setImages(response.data);
    } catch (error) {
      toast.error("Failed to fetch images");
    } finally {
      setLoading(false);
    }
  };

  return { images, loading, getImages };
};

export default useGetImages;
