import MovieCardShimmer from "./MovieCardShimmer";

const MovieListShimmer = () => {
  return (
    <div className="px-6">
      <div className="py-4">
        <div className="h-8 w-48 rounded shimmer" />
      </div>
      <div className="flex overflow-x-auto no-scrollbar">
        <div className="flex gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <MovieCardShimmer key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieListShimmer;
