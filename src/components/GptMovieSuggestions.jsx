import { useSelector } from "react-redux";
import Movielist from "./Movielist";

const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => ({
    movieNames: store.gpt.movieNames,
    movieResults: store.gpt.movieResults,
  }));
  console.log(movieNames, movieResults);
  if (!movieNames || !movieResults) return null;
  return (
    <div className="p-4 m-10 text-white bg-black/75 bg-linear-to-b from-transparent to-black w-full">
      <div>
        {movieNames.map((movieName, index) => {
          return (
            <div key={index}>
              <Movielist title={movieName} movies={movieResults[index]} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
