import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./component/Main";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import ExperiencesPage from "./component/ExperiencePage";
import Home from "./component/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Main />} />
        <Route path="/experience" element={<ExperiencesPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
