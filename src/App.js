import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Project from "./Components/Projects";
import MoveToTop from "./Components/MoveToTop";

function App() {
  return (
    <>
      <Nav />
      <MoveToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Resume" element={<Resume />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
