import { Button } from "react-bootstrap";
import { ArrowDown, PersonAdd } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import PeopleComponent from "./PeopleComponent";
import Avatar from "../../assets/img/avatar.png";

const SideComponent = ({ profiles }) => {
  return (
    <>
      <section id="side" className="bg-white rounded-3 mt-4 p-4">
        <h3 className="fs-5">Altri profili consultati</h3>
        {profiles &&
          profiles.map((profile, index) =>
            index < 4 ? (
              <div className="d-flex border-bottom mt-3" key={index}>
                <div>
                  <img
                    src={profile.image || Avatar}
                    alt="avatar"
                    width="50"
                    height="50"
                    className="sideImg rounded-circle"
                  />
                </div>
                <div className="text-truncate ms-2">
                  <Link to={`/${profile._id}`}>
                    <h3 className="fs-5 mb-0">
                      {profile.name} {profile.surname}
                    </h3>
                  </Link>
                  <p className="mb-0">{profile.title}</p>
                  <p className="mb-2 infoEmail text-truncate">
                    {profile.email}
                  </p>
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
      <PeopleComponent profiles={profiles} />
    </>
  );
};
export default SideComponent;
