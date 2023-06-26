import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainComponent from "./component/MainComponent";
import MyNavbar from "./component/MyNavbar";
import MyFooter from "./component/MyFooter";
import ExperiencesPageComponents from "./component/ExperiencesPageComponents";
import Home from "./component/Home";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/:id" element={<MainComponent />} />
        <Route path="/experience" element={<ExperiencesPageComponents />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
