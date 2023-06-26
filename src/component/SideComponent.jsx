import { Button } from "react-bootstrap";
// import avatar from "../avatar.png";
import { ArrowDown, PersonAdd } from "react-bootstrap-icons";
import { useEffect } from "react";
import { getProfilesAction } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import PeopleComponent from "./PeopleComponent";

const SideComponent = () => {
  const dispatch = useDispatch();
  const profiles = useSelector((state) => state.profiles.content);

  useEffect(() => {
    dispatch(getProfilesAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <section id="side" className="bg-white rounded-3 mt-4 p-4">
        <h3 className="fs-5">Altri profili consultati</h3>
        {profiles &&
          profiles.map((profile, index) =>
            index < 4 ? (
              <div className="d-flex border-bottom mt-3" key={index}>
                <div>
                  <img src={profile.image} alt="avatar" width="50" height="50" className="sideImg rounded-circle" />
                </div>
                <div className="text-truncate ms-2">
                  <Link to={`/${profile._id}`}>
                    <h3 className="fs-5 mb-0">
                      {profile.name} {profile.surname}
                    </h3>
                  </Link>
                  <p className="mb-0">{profile.title}</p>
                  <p className="mb-2 infoEmail text-truncate">{profile.email}</p>
                  <Button variant="outline-secondary mb-3">
                    <PersonAdd />
                    Collegati
                  </Button>
                </div>
              </div>
            ) : null
          )}

        <p className="text-center fw-bold mb-0 mt-2">
          Visualizza altro <ArrowDown />
        </p>
      </section>
    </>
  );
};
export default SideComponent;
