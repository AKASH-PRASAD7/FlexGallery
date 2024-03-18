import toast from "react-hot-toast";
import axios from "axios";
import { useState } from "react";
import variables from "@/config/variables";
import ImageData from "@/types/imageData";

const useSearchImage = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState(false);

  const searchImages = async (query: string) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${variables.Access_key}`
      );
      setImages(response.data.results);
    } catch (error) {
      toast.error("Failed to search images");
    } finally {
      setLoading(false);
    }
  };

  return { images, loading, searchImages };
};

export default useSearchImage;
