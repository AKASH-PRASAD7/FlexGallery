import { createSlice } from "@reduxjs/toolkit";
import ImageData from "@/types/imageData";
import toast from "react-hot-toast";

const initialState = {
  images: [] as ImageData[],
  searchImages: [] as ImageData[],
  starredImages: [] as ImageData[],
  loading: false,
  error: null,
};

const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    setImages: (state, action) => {
      state.images = action.payload;
    },
    setSearchImages: (state, action) => {
      state.searchImages = action.payload;
    },
    setStarredImages: (state, action) => {
      const { images, searchImages } = state;
      const { payload: id } = action;

      // Combine images and searchImages for consistent handling
      const allImages = [...images, ...searchImages];

      // Toggle the liked_by_user property for the specified image ID
      const updatedImages = allImages.map((image) =>
        image.id === id
          ? { ...image, liked_by_user: !image.liked_by_user }
          : image
      );

      // Update the starredImages state with filtered liked images
      state.starredImages = updatedImages.filter(
        (image) => image.liked_by_user
      );

      // Separate the images and searchImages back into their respective states
      state.images = updatedImages.filter((image) => !image.liked_by_user);
      state.searchImages = updatedImages.filter(
        (image) => !image.liked_by_user
      );
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      toast.error(action.payload);
    },
  },
});

export const {
  setImages,
  setSearchImages,
  setStarredImages,
  setLoading,
  setError,
} = imageSlice.actions;

export default imageSlice.reducer;
