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
import { mockExperiences, mockProfiles, mockUser } from "../../mockData";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { setIsLoading, setError } = useAppContext();
  const user = useSelector((state) =>
    Array.isArray(state.user.content) && state.user.content.length > 0
      ? state.user.content
      : mockUser
  );
  const userId = useSelector((state) =>
    state.user.content._id ? state.user.content._id : mockUser._id
  );
  const experience = useSelector((state) =>
    Array.isArray(state.experience.content) && state.experience.content > 0
      ? state.experience.content
      : mockExperiences
  );
  const profiles = useSelector((state) =>
    Array.isArray(state.profiles.content) && state.profiles.content.length > 0
      ? state.profiles.content
      : mockProfiles
  );
  const noce = useSelector((state) => state);
  console.log("noce useSelector", noce);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    // console.log(Object.keys(params).length === 0 && params.constructor === Object);
    dispatch(getUserProfileAction(setIsLoading, setError));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

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
