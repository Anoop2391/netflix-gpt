import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import { addSelectedMovie } from "../utils/movieSlice";

const MovieCard = ({ movie, poster_path }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addSelectedMovie(movie));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="w-36 shrink-0 cursor-pointer hover:scale-105 transform transition duration-300"
      onClick={handleClick}
    >
      <img src={IMG_CDN_URL + poster_path} alt="movie" className="w-full" />
    </div>
  );
};

export default MovieCard;
