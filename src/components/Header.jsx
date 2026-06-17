import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black to-transparent z-10 w-screen flex justify-between items-center">
      <img
        className="w-40"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-05-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
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
