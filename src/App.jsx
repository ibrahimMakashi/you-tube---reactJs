import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { Provider } from "react-redux";
import store from "./utils/store";
import Body from "./components/Body";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <SideBar />
      <Outlet/>
    </Provider>
  );
}

export default App;
