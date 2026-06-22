import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

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
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="absolute px-8 py-2 bg-linear-to-r from-black to-transparent z-90 w-screen flex justify-between items-center">
      <img
        className="w-40"
        src={LOGO}
        alt="background"
      />
      {user && (
      <div className="flex p-2">
        <img
          src={user?.photoURL}
          alt="user icon"
          className="w-12 h-12"
        />
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
