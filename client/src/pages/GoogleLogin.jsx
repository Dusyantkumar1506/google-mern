import React from "react";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { googleAuth } from "../api";

const GoogleLogin = () => {
  const navigate = useNavigate();

  const responseGoogle = async (authResult) => {
    try {
      if (authResult["code"]) {
        const result = await googleAuth(authResult["code"]);
        const { email, name, image } = result.data.user;
        const token = result.data.token;
        const obj = { email, name, image, token };

        localStorage.setItem("user-info", JSON.stringify(obj));
        navigate("/dashboard");
      }
      console.log(authResult);
    } catch (error) {
      console.error("Error while requesting Google Auth", error);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: "auth-code",
  });

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <button
        onClick={googleLogin}
        className="py-2 px-4  bg-sky-400 text-white text-xl rounded-xl hover:bg-sky-600"
      >
        Login with Google
      </button>
    </div>
  );
};

export default GoogleLogin;
