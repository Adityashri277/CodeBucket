import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const STORAGE_KEY = "Buckets";
const initialState = {
  codebucket: localStorage.getItem(STORAGE_KEY)
    ? JSON.parse(localStorage.getItem(STORAGE_KEY))
    : [],
};
export const codebucketSlice = createSlice({
  name: "codebucket",
  initialState,
  reducers: {
    addTocodebucket: (state, action) => {
      const Bucket = action.payload;

      if (!Bucket.title || !Bucket.value) {
        toast.error("Bucket Cannot be Empty");
      } else if (
        state.codebucket.some((item) => item.title === Bucket.title) ||
        state.codebucket.some((item) => item.value === Bucket.value)
      ) {
        toast.warning("Bucket already Exists!");
      } else {
        state.codebucket.push(Bucket);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state.codebucket));
        toast.success("Bucket Created Successfully");
      }
    },

    ResetAllcodebucket: (state, action) => {
      state.codebucket = [];
      localStorage.removeItem(STORAGE_KEY);
      toast.success("All Buckets Removed Successfully");
    },
    updateTocodebucket: (state, action) => {
      const bucket = action.payload;
      const index = state.codebucket.findIndex(
        (item) => item._id === bucket._id
      );
      if (index >= 0) {
        const currentBucket = state.codebucket[index];
        if (
          currentBucket.value === bucket.value
          
        ) {
          toast.warn("No changes detected");
          return;
        }
        state.codebucket[index] = bucket;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state.codebucket)); // updates the local storage
        toast.success("Bucket Updated Successfully");
      } else {
        toast.error("Bucket Not Found");
      }
    },
    Removecodebucket: (state, action) => {
      const bucketId = action.payload;
      const index = state.codebucket.findIndex((item) => item._id === bucketId);
      if (index >= 0) {
        state.codebucket.splice(index, 1);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state.codebucket)); // updates the local storage
        toast.success("Bucket Removed Successfully");
      } else {
        toast.error("Bucket Not Found");
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addTocodebucket,
  updateTocodebucket,
  ResetAllcodebucket,
  Removecodebucket,
} = codebucketSlice.actions;

export default codebucketSlice.reducer;
