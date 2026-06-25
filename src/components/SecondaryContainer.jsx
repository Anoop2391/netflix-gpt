import { useSelector } from "react-redux";
import Movielist from "./Movielist";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies,
  );
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
  const upComingMovies = useSelector((store) => store.movies?.upComingMovies);
  return (
    <div className="bg-black">
      <div className="relative z-10 lg:-mt-50">
        <Movielist title="Now Playing" movies={nowPlayingMovies} />
        <Movielist title="Popular" movies={popularMovies} />
        <Movielist title="Top Rated" movies={topRatedMovies} />
        <Movielist title="Upcoming" movies={upComingMovies} />
        <Movielist title="Now Playing" movies={nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
