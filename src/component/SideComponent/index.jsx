import { Button } from "react-bootstrap";
import { ArrowDown, PersonAdd } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import PeopleComponent from "./PeopleComponent";
import Avatar from "../../assets/img/avatar.png";
import { useDispatch, useSelector } from "react-redux";

const SideComponent = ({ profiles }) => {
  const dispatch = useDispatch();
  const followed = useSelector((state) => state.friend.followed);

  return (
    <>
      <section id="side" className="bg-white rounded-3 mt-4 p-4">
        <h3 className="fs-5">Altri profili consultati</h3>
        {profiles &&
          profiles.map((profile, index) => {
            if (index >= 4) return null;

            const isFollowed = followed.includes(profile._id);

            const toggleFollow = (id) => {
              dispatch({
                type: isFollowed ? "UNFOLLOW_USER" : "FOLLOW_USER",
                payload: id,
              });
            };

            return (
              <div className="d-flex border-bottom mt-3" key={profile._id}>
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
                  <Button
                    variant={isFollowed ? "success" : "outline-secondary"}
                    size="sm"
                    onClick={() => toggleFollow(profile._id)}
                  >
                    <PersonAdd className="me-1" />
                    {isFollowed ? "Collegato" : "Collegati"}
                  </Button>
                </div>
              </div>
            );
          })}

        <p className="text-center fw-bold mb-0 mt-2">
          Visualizza altro <ArrowDown />
        </p>
      </section>
      <PeopleComponent profiles={profiles} />
    </>
  );
};
export default SideComponent;
