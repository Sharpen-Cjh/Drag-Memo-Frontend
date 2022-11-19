import React from "react";
import { Routes, Route } from "react-router-dom";

import MyMemos from "../pages/MyMemos";
import Login from "../pages/Login";
import NotFound from "../components/NotFound";
import Memo from "../pages/Memo";

export default function Pages() {
  return (
    <Routes>
      <Route path="/" element={<MyMemos />} />
      <Route path="/login" element={<Login />} />
      <Route path="/memos/:memoId" element={<Memo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
