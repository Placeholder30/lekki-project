import React from "react";
import Login from "../components/forms/Login";

function LoginPage({ setUserData, userData }) {
  return <Login setUserData={setUserData} userData={userData} />;
}

export default LoginPage;
