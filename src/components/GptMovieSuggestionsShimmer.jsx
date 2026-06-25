import MovieListShimmer from "./MovieListShimmer";

const GptMovieSuggestionsShimmer = () => {
  return (
    <div className="p-4 m-10 text-white bg-black/75 bg-linear-to-b from-transparent to-black w-full">
      <div>
        {Array.from({ length: 5 }).map((_, index) => (
          <MovieListShimmer key={index} />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestionsShimmer;
