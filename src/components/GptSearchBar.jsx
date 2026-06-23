import { useSelector } from "react-redux";
import { LANG_CONSTANTS } from "../utils/constants";

const GptSearchBar = () => {
  const lang = useSelector((store) => store.config.lang);
  const { search, gptSearchPlaceholder } = LANG_CONSTANTS[lang];

  return (
    <div className=" text-white flex justify-center w-full pt-[10%]">
      <form className="p-2 m-2 w-1/3 gap-4 flex bg-black rounded-lg">
        <input
          className="w-full p-2 rounded-lg bg-white text-black"
          type="text"
          placeholder={gptSearchPlaceholder}
        />
        <button className="bg-red-700 text-white px-4 py-2 rounded-lg">
          {search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
