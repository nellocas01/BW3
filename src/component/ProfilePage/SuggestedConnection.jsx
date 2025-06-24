import { Button } from "react-bootstrap";
import Avatar from "../../assets/img/avatar.png";
import { useDispatch, useSelector } from "react-redux";
import { PersonAdd } from "react-bootstrap-icons";

export const SuggestedConnections = ({ profiles }) => {
  const dispatch = useDispatch();
  const followed = useSelector((state) => state.friend.followed);

  return (
    <section className="profile-card rounded-3 border bg-white p-3">
      <h5 className="text-muted">Persone che potresti conoscere</h5>
      {profiles.map((conn, index) => {
        const isFollowed = followed.includes(conn._id);

        const toggleFollow = () => {
          dispatch({
            type: isFollowed ? "UNFOLLOW_USER" : "FOLLOW_USER",
            payload: conn._id,
          });
        };

        return (
          <div
            key={conn._id}
            className="connection-item mb-3 d-flex align-items-start"
          >
            <img
              src={conn.image || Avatar}
              alt="profile"
              width={40}
              height={40}
              className="me-2 rounded-circle"
            />
            <div className="flex-grow-1">
              <p className="fw-bold mb-1">
                {conn.name} {conn.surname}
              </p>
              <p className="text-muted small mb-2">{conn.bio || conn.title}</p>
              <Button
                variant={isFollowed ? "success" : "outline-secondary"}
                size="sm"
                onClick={() => toggleFollow(conn._id)}
              >
                <PersonAdd className="me-1" />
                {isFollowed ? "Collegato" : "Collegati"}
              </Button>
            </div>
          </div>
        );
      })}
      <Button variant="link" className="p-0">
        Mostra tutto
      </Button>
    </section>
  );
};
