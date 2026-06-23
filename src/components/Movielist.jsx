import MovieCard from "./MovieCard";

const Movielist = ({ title, movies }) => {
  if (!movies) return;
  return (
    <div className="px-6">
      <h1 className="text-3xl py-4 text-white font-bold-500">{title}</h1>
      <div className="flex overflow-x-auto no-scrollbar">
        <div className="flex gap-4">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              poster_path={movie.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movielist;
