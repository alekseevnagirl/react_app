import React from "react";
import './styles/App.css';
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Error from "./pages/Error";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />}>
        </Route>

        <Route path="/posts" element={<Posts />}>
        </Route>

        <Route path="/error" element={<Error />}>
        </Route>

        <Route path="*" element={<Navigate to="/error" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
