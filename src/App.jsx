// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Loader from "./components/loader";
import Carousel from "./components/carousel";
import Categories from "./components/categories";
// import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
    <Loader />

    <div className="navbar">
      <Navbar />
    </div>

    <div className="carousel">
      <Carousel />
    </div>

    <div className="categories">
      <Categories />
    </div>

    <div className="footer">
      <Footer />
    </div>
    </>
  );
}

export default App;
