import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

import MyMemos from "../pages/MyMemos";
import Login from "../pages/Login";
import NotFound from "../components/NotFound";
import Memo from "../pages/Memo";

export default function Pages() {
  const { loggedInUser } = useContext(UserContext);

  return (
    <Routes>
      <Route
        path="/"
        element={loggedInUser ? <MyMemos /> : <Navigate to="/login" />}
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/memos/:memoId"
        element={loggedInUser ? <Memo /> : <Navigate to="/login" />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
