import Navbar from "./Navbar";
import Home from "./Home"
import React from "react";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import NotFound from "./NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/simple-blog" element={<Home/>} />
            <Route path="/simple-blog/create" element={<Create/>}/>
            <Route path="/simple-blog/blogs/:id" element={<BlogDetails/>}/>
            <Route path="/simple-blog/*" element={<NotFound/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
