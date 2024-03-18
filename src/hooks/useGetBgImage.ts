import toast from "react-hot-toast";
import axios from "axios";
import { useState } from "react";
import variables from "@/config/variables";
import ImageData from "@/types/imageData";

const useGetBgImage = () => {
  const [image, setImage] = useState<ImageData>();
  const [loading, setLoading] = useState(false);

  const getBgImage = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.unsplash.com/photos/random/?client_id=${variables.Access_key}`
      );

      setImage(response.data);
    } catch (error) {
      toast.error("Failed to background image");
    } finally {
      setLoading(false);
    }
  };

  return { image, loading, getBgImage };
};

export default useGetBgImage;
