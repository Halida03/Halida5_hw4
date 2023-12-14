import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import '../home/home.scss'
import MovieListing from "../../components/MovieListing/Index";

const Home = () => {
  return <div className="home">
    <Header />
    <MovieListing />
    <Footer />
  </div>;
};

export default Home;
