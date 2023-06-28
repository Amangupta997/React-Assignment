import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import MyProfile from "./Components/MyProfile/MyProfile";
import FriendsList from "./Components/FriendsList/FriendsList";
import Error from "./Components/Error/Error";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" exact={true} element={<Home />}></Route>
          <Route path="/myprofile" element={<MyProfile />}>
          </Route>
          <Route path="myprofile/1" exact={true} element={<MyProfile />}></Route>
          <Route path="/friendslist">
            <Route index element={<FriendsList />} />
            <Route path=":id" element={<MyProfile />} />
          </Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
