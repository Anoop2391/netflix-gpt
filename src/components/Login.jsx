import { useRef, useState } from "react";
import Header from "./Header";
import checkValidData from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { BACKGROUND_IMAGE } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const name = useRef("null");
  const email = useRef("null");
  const password = useRef("null");
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  // validate the data and handle the sign in or sign up
  const handleButtonClick = () => {
    const isValid = checkValidData(
      email.current.value,
      password.current.value,
      name?.current?.value,
    );
    setErrorMessage(isValid);

    if (isValid) return;
    // sign up logic
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL:
              "https://avatars.githubusercontent.com/u/35482180?s=400&u=9e46ca6885b6270ec9916f64d22b5d02a3105111&v=4",
          })
            .then(() => {
              // ...
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ": " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ": " + errorMessage);
        });
    }
  };
  return (
    <div className="h-screen relative">
      <div className="absolute">
        <Header />
        <img src={BACKGROUND_IMAGE} alt="background" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-6 sm:p-12 bg-black/70 absolute w-11/12 sm:w-8/12 md:w-5/12 lg:w-3/12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <h1 className="text-4xl font-bold text-white mb-8">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Username"
            className="p-2.5 m-2 text-white bg-gray-700 rounded-md w-full"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email address"
          className="p-2.5 m-2 text-white bg-gray-700 rounded-md w-full"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2.5 m-2 text-white bg-gray-700 rounded-md w-full"
        />
        <p className="p-2.5 text-red-500 text-bold mt-2">{errorMessage}</p>
        <button
          type="submit"
          className="bg-red-700 text-white p-2.5 m-2 rounded-md text-sm font-bold w-full cursor-pointer"
          onClick={() => handleButtonClick()}
        >
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="text-sm text-white mt-6 cursor-pointer"
          onClick={() => toggleSignInForm()}
        >
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already have an account? Sign in now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
