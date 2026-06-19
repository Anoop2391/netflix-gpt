import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  return (
    <div>
      <iframe
        className="aspect-video w-screen"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&playsinline=1&controls=0`}
        title="YouTube video player"
        allow="autoplay; encrypted-media; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
