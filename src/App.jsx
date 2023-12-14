import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import MovieDetail from "./pages/movieDetail";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movieId" element={<MovieDetail />} />
      </Routes>
    </>
  );
};

export default App;