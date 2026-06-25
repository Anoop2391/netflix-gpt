import { useDispatch, useSelector } from "react-redux";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const LanguageSelector = () => {
  const dispatch = useDispatch();
  const lang = useSelector((store) => store.config.lang);

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <select
      className="cursor-pointer bg-red-700 text-white px-4 py-2 rounded-lg mt-2 mr-4"
      value={lang}
      onChange={handleLanguageChange}
    >
      {SUPPORTED_LANGUAGES.map((language) => (
        <option key={language.identifier} value={language.identifier}>
          {language.name}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;
