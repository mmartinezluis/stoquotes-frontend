import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProfile = createAsyncThunk(
  "users/getProfile",
  async (userId) => {
    try {
      const response = await axios.get("/profile/" + userId);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

export const createStory = createAsyncThunk(
  "users/createStory",
  async (payload) => {
    // console.log(description, userId, quoteId);
    try {
      const response = await axios.post("/stories", {
        story: payload,
      });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

export const updateStory = createAsyncThunk(
  "users/updateStory",
  async (story, userId) => {
    try {
      const response = await axios.patch("/stories/" + story.id, {
        story: {
          description: story.description,
          user_id: userId,
        },
      });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

export const deleteStory = createAsyncThunk(
  "users/deleteStory",
  async (storyId, userId) => {
    try {
      const response = await axios.delete("/stories/" + storyId, {
        story: {
          user_id: userId,
        },
      });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

export const usersStories = createSlice({
  name: "users",
  initialState: {
    currentUser: {},
    users: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createStory.fulfilled, (state, action) => []);
    builder.addCase(updateStory.fulfilled, (state, action) => {});
    builder.addCase(deleteStory.fulfilled, (state, action) => {});
  },
});
