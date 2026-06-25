import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTile from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const selectedMovie = useSelector((store) => store.movies?.selectedMovie);
  if (!movies) return;
  const mainMovie = selectedMovie ?? movies[0];
  const { original_title, overview, id } = mainMovie;
  return (
    <div className="relative h-screen overflow-hidden sm:h-auto">
      <VideoTile title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
