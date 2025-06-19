import React from "react";
import { Button } from "react-bootstrap";
import { PlusLg, Pencil } from "react-bootstrap-icons";
import SectionWrapper from "./SectionWrapper";

const Languages = () => {
  // Dummy data for languages
  const languages = [
    { id: 1, name: "Inglese", proficiency: "Conoscenza lavorativa limitata" },
    {
      id: 2,
      name: "Italiano",
      proficiency: "Conoscenza madrelingua o bilingue",
    },
  ];

  return (
    <SectionWrapper>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="section-title mb-0">Lingue</h3>
        <div className="d-flex align-items-center">
          {/* Only show plus and pencil if it's the current user's profile */}
          <Button
            variant="link"
            className="add-item-button text-secondary me-2 p-0"
            title="Add new language"
          >
            <PlusLg className="fs-4" />
          </Button>
          <Button
            variant="link"
            className="edit-section-button text-secondary p-0"
            title="Edit languages"
          >
            <Pencil className="fs-4" />
          </Button>
        </div>
      </div>

      {languages.length > 0 ? (
        <div className="languages-list">
          {languages.map((lang) => (
            <div key={lang.id} className="language-item py-2 border-bottom">
              <p className="language-name fw-bold mb-0">{lang.name}</p>
              <p className="language-proficiency text-secondary mb-0">
                {lang.proficiency}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-secondary">Nessuna lingua aggiunta.</p>
      )}
    </SectionWrapper>
  );
};

export default Languages;
