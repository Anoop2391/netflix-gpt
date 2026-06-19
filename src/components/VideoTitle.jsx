const VideoTile = ({title, overview}) => {
  return (
    <div className=" w-screen aspect-video pt-[20%] pl-12 absolute z-10">
        <h1 className="text-3xl text-white font-bold">{title}</h1>
        <p className="text-white text-sm w-1/5">{overview}</p>
        <div className="flex pt-5">
            <button className="bg-white text-black p-2 cursor-pointer hover:bg-opacity-80 rounded-lg"> ▶ Play</button>
            <button className="bg-gray-800 text-white p-2 cursor-pointer hover:bg-opacity-80 rounded-lg ml-2"> More Info</button>
        </div>
    </div>
  )
}

export default VideoTile