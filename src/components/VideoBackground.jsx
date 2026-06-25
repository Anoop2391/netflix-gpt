import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  return (
    <div className="relative h-full w-full overflow-hidden sm:h-auto sm:overflow-visible">
      <iframe
        key={trailerVideo?.key ?? movieId}
        className="pointer-events-none absolute top-1/2 left-1/2 h-full w-[177.78vh] min-h-[56.25vw] min-w-full -translate-x-1/2 -translate-y-1/2 sm:static sm:top-auto sm:left-auto sm:h-auto sm:w-screen sm:min-h-0 sm:min-w-0 sm:translate-x-0 sm:translate-y-0 sm:aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0`}
        title="YouTube video player"
        allow="autoplay; encrypted-media;"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
