import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./component/Main";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import ExperiencesPage from "./component/ExperiencePage";
import Home from "./component/Home";
import { useDispatch, useSelector } from "react-redux";
import { mockProfiles } from "./mockData";
import { useAppContext } from "./context/AppContext";
import { useEffect } from "react";
import { getProfilesAction } from "./redux/actions";
import JobsPage from "./component/JobPage";

function App() {
  const dispatch = useDispatch();
  const profiles = useSelector((state) =>
    Array.isArray(state.profiles.content) && state.profiles.content.length > 0
      ? state.profiles.content
      : mockProfiles
  );
  const { setIsLoading, setError } = useAppContext();

  useEffect(() => {
    dispatch(getProfilesAction(setIsLoading, setError));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main profiles={profiles} />} />
        <Route path="/:id" element={<Main />} />
        <Route path="/experience" element={<ExperiencesPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/jobs" element={<JobsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
