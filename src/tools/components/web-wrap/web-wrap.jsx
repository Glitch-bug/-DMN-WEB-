import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";

const WebWrap = () => {
  const [scroll, setScroll] = useState(true);
  return (
    <div className="relative w-full h-full">
      <Header setScroll={setScroll} />
      <Sidebar />
      {scroll && <Outlet />}
      {scroll && <Footer />}
    </div>
  );
};

export default WebWrap;
