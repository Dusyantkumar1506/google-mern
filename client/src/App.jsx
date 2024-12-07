import { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import GoogleLogin from "./pages/GoogleLogin";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const GoogleAuthWrapper = () => {
    return (
      <GoogleOAuthProvider clientId="96476430704-hgll9qs560nieonurhqvagq4jeq9kfdn.apps.googleusercontent.com">
        <GoogleLogin />
      </GoogleOAuthProvider>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<GoogleAuthWrapper />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
