import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
// import db from "./Component/db";
// import Register from "./Component/Register";
import Main from "./Component/Main";
import Register from "./Component/Register";
// import UserData from "./Component/UserData";
import Album from "./Component/Albums";
import Post from "./Component/Post";

import Profile from "./Component/Profile";
import Photo from "./Component/[ ]/Photo";

const App = () => {
  return (
    <div>
      {/* <Register />
      <Home /> */}
        <BrowserRouter>
          <Routes>
            <Route>
                <Route path="/" element={<Register/>}></Route>
                <Route path="/home" element= {<Home/>}></Route>
                <Route path="/profile" element ={<Profile/>}></Route>
                <Route path="/album"  element ={<Album/>}></Route>
                <Route path="/:id/photo" element={<Photo/>}></Route>
                <Route path="/post"  element={<Post/>}></Route>
            </Route>

              

          </Routes>
        </BrowserRouter>     
    </div>
  );
};

export default App;