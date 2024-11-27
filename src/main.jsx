import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Posts from "./pages/Posts";
import Post from "./pages/Post";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/posts' element={<Posts />} />
      <Route path='/posts/:id' element={<Post />} />
      {/* /contacts */}
    </Routes>
  </BrowserRouter>
);
