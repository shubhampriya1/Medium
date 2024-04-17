import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const LoginPage = React.lazy(() => import("./pages/Login"));
const RegisterPage = React.lazy(() => import("./pages/Register"));
const HomePage = React.lazy(() => import("./pages/Home"));
const BlogPage = React.lazy(() => import("./pages/Blogs"));
const BlogIdPage = React.lazy(() => import("./pages/BlogId"));

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogIdPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
