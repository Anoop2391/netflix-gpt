const VideoTile = ({ title, overview }) => {
  return (
    <div className="absolute bottom-28 left-0 z-10 w-full px-4 sm:bottom-auto sm:w-[60%] lg:w-[40%] sm:pt-[28%] lg:pt-[20%] sm:pl-8 lg:pl-12">
      <h1 className="text-lg sm:text-2xl lg:text-3xl text-white font-bold">{title}</h1>
      <p className="hidden sm:block text-white text-sm w-full">{overview}</p>
      <div className="flex pt-5">
        <button className="bg-white text-black p-1 sm:p-2 cursor-pointer hover:bg-opacity-80 rounded-lg">
          {" "}
          ▶ Play
        </button>
        <button className="bg-gray-800 text-white p-1 sm:p-2 cursor-pointer hover:bg-opacity-80 rounded-lg ml-2">
          {" "}
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTile;
