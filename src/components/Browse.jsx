import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayinMovies";
import MainContainer from "./MainContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className="w-full h-screen relative">
      <Header />
      <MainContainer />
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
