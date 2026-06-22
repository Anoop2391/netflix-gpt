import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayinMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import { useTopRatedMovies } from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  return (
    <div className="w-full h-screen relative">
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
      Main container
        -Video background
        -video title
      Secondary container
        -Movie list * n
        -cards * n
      */}
     
    </div>
  );
};

export default Browse;
