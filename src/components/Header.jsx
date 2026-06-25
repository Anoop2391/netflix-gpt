import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import LanguageSelector from "./LanguageSelector";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Cleanup function to unsubscribe from the auth state change listener when the component unmounts.
    return () => {
      unsubscribe();
    };
  }, []);
  const user = useSelector((state) => state.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  return (
    <div className="absolute px-8 py-2 bg-linear-to-b from-black to-transparent z-90 w-screen flex justify-between items-center">
      <img className="w-40" src={LOGO} alt="background" />
      {user && (
        <div className="flex p-2">
          {showGptSearch && <LanguageSelector />}
          <button
            className="cursor-pointer bg-red-700 text-white px-4 py-2 rounded-lg mt-2 mr-4"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img src={user?.photoURL} alt="user icon" className="w-12 h-12" />
          <button
            onClick={handleSignOut}
            className="text-white font-bold cursor-pointer ml-2"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
