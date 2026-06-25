import { useDispatch, useSelector } from "react-redux";
import { LANG_CONSTANTS } from "../utils/constants";
import { useRef } from "react";
import openai from "../utils/openAi";
import { addGptMoviesResults, setGptSearchLoading } from "../utils/gptSlice";
import useSearchMovies from "../hooks/useSearchMovies";

const GptSearchBar = () => {
  const lang = useSelector((store) => store.config.lang);
  const isGptSearchLoading = useSelector(
    (store) => store.gpt.isGptSearchLoading,
  );
  const { search, gptSearchPlaceholder } = LANG_CONSTANTS[lang];
  const { searchMovies } = useSearchMovies();
  const dispatch = useDispatch();
  const searchText = useRef("");

  //function to handle the gpt search click
  const handleGptSearchClick = async () => {
    dispatch(setGptSearchLoading(true));
    try {
      const text =
        "Act as a movie recommendation system. I will show you a movie title, you will need to suggest some movies for me to watch. My first movie title is " +
        searchText.current.value +
        ". Only suggest 5 movie titles, no other text, the movies should be comma separated like this: movie1, movie2, movie3, movie4, movie5";
      const gptResults = await openai.chat.completions.create({
        model: "gpt-5.4-mini",
        messages: [{ role: "user", content: text }],
      });
      if (!gptResults.choices.length) {
        alert("No movies found");
        return;
      }
      const movieNames = gptResults.choices[0].message.content
        .split(",")
        .map((name) => name.trim());
      const promiseArray = movieNames.map((movie) => searchMovies(movie));
      const movieResults = await Promise.all(promiseArray);
      dispatch(
        addGptMoviesResults({
          movieNames: movieNames,
          movieResults: movieResults,
        }),
      );
    } finally {
      dispatch(setGptSearchLoading(false));
    }
  };

  return (
    <div className=" text-white flex justify-center w-full pt-[20%] sm:pt-[15%] lg:pt-[10%]">
      <form
        className="p-2 m-2 w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/2 gap-4 flex bg-black rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="w-full p-2 rounded-lg bg-white text-black"
          type="text"
          placeholder={gptSearchPlaceholder}
        />
        <button
          className="bg-red-700 text-white px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleGptSearchClick}
          disabled={isGptSearchLoading}
        >
          {search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
