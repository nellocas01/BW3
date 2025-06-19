import { Button } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import SectionWrapper from "./SectionWrapper";

const Analytics = () => {
  // These numbers would typically come from an API or be dummy data for a clone
  const profileViews = 29;
  const postImpressions = 0;
  const searchAppearances = 34;

  return (
    <SectionWrapper>
      <h3 className="section-title">Analisi</h3>
      <p className="section-subtitle text-secondary">Solo per te</p>
      <div className="analytics-grid d-flex justify-content-around text-center mt-3">
        <div className="analytics-item">
          <h4 className="analytics-number">{profileViews}</h4>
          <p className="analytics-label">visualizzazioni del profilo</p>
          <span className="analytics-description text-secondary">
            Scopri chi ha visitato il tuo profilo.
          </span>
        </div>
        <div className="analytics-item">
          <h4 className="analytics-number">{postImpressions}</h4>
          <p className="analytics-label">impressioni del post</p>
          <span className="analytics-description text-secondary">
            Crea un post per aumentare l'interazione. Ultimi 7 giorni.
          </span>
        </div>
        <div className="analytics-item">
          <h4 className="analytics-number">{searchAppearances}</h4>
          <p className="analytics-label">comparse nei motori di ricerca</p>
          <span className="analytics-description text-secondary">
            Vedi quante volte compari nei risultati di ricerca.
          </span>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <Button variant="link" className="show-all-button text-secondary">
          Mostra tutte le analisi <ArrowRight className="ms-1" />
        </Button>
      </div>
    </SectionWrapper>
  );
};
export default Analytics;
