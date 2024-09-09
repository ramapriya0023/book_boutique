import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component";
import React from "react";

const Home = () => {
  return (
    <div>
      <Directory />
      <Outlet />
    </div>
  );
};

export default Home;
