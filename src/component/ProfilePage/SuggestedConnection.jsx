import { Button } from "react-bootstrap";
import Avatar from "../../assets/img/avatar.png";

export const SuggestedConnections = ({ profiles }) => {
  return (
    <section className="profile-card rounded-3 border bg-white p-3">
      <h5 className="text-muted">Persone che potresti conoscere</h5>
      {profiles.map((conn, index) => (
        <div key={index} className="connection-item mb-3">
          <img
            src={profiles.image ? profiles.image : Avatar}
            alt="profile"
            width={20}
            height={20}
          />
          <p className="fw-bold mb-1">{conn.name}</p>
          <p className="text-muted small mb-2">
            {conn.bio ? conn.bio : conn.title}
          </p>
          <Button variant="outline-secondary" size="sm">
            Collegati
          </Button>
        </div>
      ))}

      <Button variant="link" className="p-0">
        Mostra tutto
      </Button>
    </section>
  );
};
