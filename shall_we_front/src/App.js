import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/profile";
import Mymate from "./pages/mymate";
import Chatlist from "./pages/chatlist";
import Topnav from "./components/base/topnav";
import BottomNav from "./components/base/bottomnav";

function App() {
  let carRef = React.createRef();

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Topnav carRef={carRef} />
              <div className="container-xxl flex-grow-1 contaiWner-p-y">
                <div className="row">
                  <Home carRef={carRef} />
                </div>
              </div>
              <BottomNav />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <Topnav /> <BottomNav /> <Profile />
            </>
          }
        />
        <Route
          path="/chatlist"
          element={
            <>
              <Topnav /> <BottomNav /> <Chatlist />
            </>
          }
        />
        <Route
          path="/mymate"
          element={
            <>
              <Topnav /> <BottomNav /> <Mymate />
            </>
          }
        />
      </Routes>
    </div>
    /* <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter> */
  );
}

export default App;
