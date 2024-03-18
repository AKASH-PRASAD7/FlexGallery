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
      if (state.images.length > 0) {
        let newImage = state.images.map((image) => {
          if (image.id === action.payload) {
            image.liked_by_user = !image.liked_by_user;
            return image;
          } else {
            return image;
          }
        });

        state.images = newImage;
      }
      if (state.searchImages.length > 0) {
        if (state.images.length > 0) {
          let newImage = state.searchImages.map((image) => {
            if (image.id === action.payload) {
              image.liked_by_user = !image.liked_by_user;
              return image;
            } else {
              return image;
            }
          });
          state.searchImages = newImage;
        }
      }
      state.starredImages = [
        ...state.images.filter((image) => image.liked_by_user),
        ...state.searchImages.filter((image) => image.liked_by_user),
      ];

      // const uniqueStarredImages = new Map(
      //   state.starredImages.map((image) => [image.id, image])
      // );
      // state.starredImages = Array.from(uniqueStarredImages.values());
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
