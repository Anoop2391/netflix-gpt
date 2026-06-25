import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResults: null,
    movieNames: null,
    isGptSearchLoading: false,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMoviesResults: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    setGptSearchLoading: (state, action) => {
      state.isGptSearchLoading = action.payload;
      if (action.payload) {
        state.movieNames = null;
        state.movieResults = null;
      }
    },
  },
});

export const { toggleGptSearchView, addGptMoviesResults, setGptSearchLoading } =
  gptSlice.actions;

export default gptSlice.reducer;
