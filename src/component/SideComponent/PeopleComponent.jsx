import { Button } from "react-bootstrap";
import { ArrowDown, PersonAdd } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Avatar from "../../assets/img/avatar.png";
import { useDispatch, useSelector } from "react-redux";

const PeopleComponent = ({ profiles }) => {
  const dispatch = useDispatch();
  const followed = useSelector((state) => state.friend.followed);

  return (
    <section id="people" className="bg-white rounded-3 mt-2 p-4">
      <h3 className="fs-5">Persone che potresti conoscere</h3>
      {profiles &&
        profiles
          .map((profile, index) => {
            const isFollowed = followed.includes(profile._id);

            const toggleFollow = () => {
              dispatch({
                type: isFollowed ? "UNFOLLOW_USER" : "FOLLOW_USER",
                payload: profile._id,
              });
            };

            return (
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
          })
          .slice(5, 9)}

      <p className="text-center fw-bold mb-0 mt-2">
        Visualizza altro <ArrowDown />
      </p>
    </section>
  );
};
export default PeopleComponent;
