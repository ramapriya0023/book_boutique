import Directory from "../../components/directory/directory.component";
import { categories } from "../../datas/categories";
import React from "react";

const Home = () => {
  return <Directory categories={categories} />;
};

export default Home;
