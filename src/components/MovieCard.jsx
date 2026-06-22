import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ poster_path }) => {
  return (
    <div className="w-36 shrink-0 cursor-pointer hover:scale-105 transform transition duration-300">
      <img src={IMG_CDN_URL + poster_path} alt="movie" className="w-full" />
    </div>
  );
};

export default MovieCard;
