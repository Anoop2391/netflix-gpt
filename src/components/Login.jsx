import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div className="h-screen relative">
      <div classname="absolute">
        <Header />
        <img 
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8027eb3f-343a-499d-9892-e683c12e3cb1/web/IN-en-20260608-TRIFECTA-perspective_d70af879-e407-4aee-8615-4c82210065d5_large.jpg"
          alt="background"
        />
      </div>
      <form className="p-12 bg-black/70 absolute w-3/12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <h1 className="text-4xl font-bold text-white mb-8">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
      {!isSignInForm && (
      <input type="text" placeholder="Username" className="p-2.5 m-2 text-white bg-gray-700 rounded-md w-full"/>
      )}
      {isSignInForm && (
        <><input type="email" placeholder="Email address" className="p-2.5 m-2 text-white bg-gray-700 rounded-md w-full" /><input type="password" placeholder="Password" className="p-2.5 m-2 text-white bg-gray-700 rounded-md w-full" /></>
      )}
        <button type="submit" className="bg-red-700 text-white p-2.5 m-2 rounded-md text-sm font-bold w-full"> {isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="text-sm text-white mt-6" onClick={() => toggleSignInForm()}>
          {isSignInForm ? "New to Netflix? Sign up now." : "Already have an account? Sign in now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
