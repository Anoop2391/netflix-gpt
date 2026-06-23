import { BACKGROUND_IMAGE } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div className="flex flex-col items-center relative">
      <div className="absolute w-screen h-screen -z-10">
        <img src={BACKGROUND_IMAGE} alt="background" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
