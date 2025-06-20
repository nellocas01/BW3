import { Button } from "react-bootstrap";
import { ArrowDown, PersonAdd } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Avatar from "../../assets/img/avatar.png";

const PeopleComponent = ({ profiles }) => {
  return (
    <section id="people" className="bg-white rounded-3 mt-2 p-4">
      <h3 className="fs-5">Persone che potresti conoscere</h3>
      {profiles &&
        profiles
          .map((profile, index) => (
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
                <p className="mb-2 infoEmail text-truncate">{profile.email}</p>
                <Button variant="outline-secondary mb-3">
                  <PersonAdd />
                  Collegati
                </Button>
              </div>
            </div>
          ))
          .slice(5, 9)}

      <p className="text-center fw-bold mb-0 mt-2">
        Visualizza altro <ArrowDown />
      </p>
    </section>
  );
};
export default PeopleComponent;
