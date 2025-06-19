import { useDispatch, useSelector } from "react-redux";
import Analytics from "./Analytics";
import Education from "./Education";
import Experience from "./Experience";
import Featured from "./Featured";
import Informations from "./Informations";
import Interests from "./Interest";
import LicensesCertifications from "./LicensesCertifications";
import Profile from "./Profile";
import Skills from "./Skills";
import { SuggestedConnections } from "./SuggestedConnection";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import { useEffect, useState } from "react";
import {
  getSelectedProfileAction,
  getUserExperienceAction,
  getUserProfileAction,
} from "../../redux/actions";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { setIsLoading, setError } = useAppContext();
  const user = useSelector((state) => state.user.content);
  const userId = useSelector((state) => state.user.content._id);
  const experience = useSelector((state) => state.experience.content);
  const profiles = useSelector((state) => state.profiles.content);
  // const noce = useSelector((state) => state);
  // console.log("noce useSelector", noce);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    // console.log(Object.keys(params).length === 0 && params.constructor === Object);
    dispatch(getUserProfileAction(setIsLoading, setError));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // console.log(Object.keys(params).length === 0 && params.constructor === Object);
    if (params.id)
      dispatch(getSelectedProfileAction(params.id, setIsLoading, setError));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  useEffect(() => {
    if (userId)
      dispatch(getUserExperienceAction(userId, setIsLoading, setError));
  }, [userId]);

  return (
    <>
      <Profile
        user={user}
        handleShow={handleShow}
        show={show}
        handleClose={handleClose}
      />
      <Analytics />
      <Informations />
      <Experience experience={experience} />
      <Featured />
      <SuggestedConnections profiles={profiles.slice(10, 13)} />
      <Education />
      <LicensesCertifications />
      <Skills />
      <Interests />
    </>
  );
};
