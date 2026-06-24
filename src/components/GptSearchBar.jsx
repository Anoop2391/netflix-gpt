import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, LANG_CONSTANTS } from "../utils/constants";
import { useRef } from "react";
import openai from "../utils/openAi";
import { addGptMoviesResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const lang = useSelector((store) => store.config.lang);
  const { search, gptSearchPlaceholder } = LANG_CONSTANTS[lang];
  const dispatch = useDispatch();
  const searchText = useRef("");
  // search movies in tmdb api
  const searchMovies = async (movieName) => {
    const movies = await fetch(
      "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=" +
        encodeURIComponent(movieName.trim()),
      API_OPTIONS,
    );
    const json = await movies.json();
    return json.results;
  };
  //function to handle the gpt search click
  const handleGptSearchClick = async () => {
    const text =
      "Act as a movie recommendation system. I will show you a movie title, you will need to suggest some movies for me to watch. My first movie title is " +
      searchText.current.value +
      ". Only suggest 5 movie titles, no other text, the movies should be comma separated like this: movie1, movie2, movie3, movie4, movie5";
    //make an api call to the gpt api with the text
    const gptResults = await openai.chat.completions.create({
      model: "gpt-5.4-mini",
      messages: [{ role: "user", content: text }],
    });
    if (!gptResults.choices.length) {
      return alert("No movies found");
    } else {
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
    }
  };

  return (
    <div className=" text-white flex justify-center w-full pt-[10%]">
      <form
        className="p-2 m-2 w-1/3 gap-4 flex bg-black rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="w-full p-2 rounded-lg bg-white text-black"
          type="text"
          placeholder={gptSearchPlaceholder}
        />
        <button
          className="bg-red-700 text-white px-4 py-2 rounded-lg"
          onClick={handleGptSearchClick}
        >
          {search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
