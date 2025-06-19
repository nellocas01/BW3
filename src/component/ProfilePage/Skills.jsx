import React from "react";
import { Button } from "react-bootstrap";
import { PlusLg, Pencil, ArrowRight } from "react-bootstrap-icons";
import SectionWrapper from "./SectionWrapper";

const Skills = () => {
  const skills = [
    {
      id: 1,
      name: "Storybook",
      associatedWith: "Frontend Developer presso ...",
    },
    {
      id: 2,
      name: "React Query Builder",
      associatedWith: "Frontend Developer presso ...",
    },
    { id: 3, name: "React.js" },
    { id: 4, name: "JavaScript" },
    { id: 5, name: "CSS" },
    { id: 6, name: "HTML" },
    { id: 7, name: "Node.js" },
    { id: 8, name: "Express.js" },
    { id: 9, name: "MongoDB" },
    { id: 10, name: "Git" },
    { id: 11, name: "Redux" },
    { id: 12, name: "TypeScript" },
    { id: 13, name: "SQL" },
    { id: 14, name: "PostgreSQL" },
    { id: 15, name: "Java" },
    { id: 16, name: "Spring Boot" },
    { id: 17, name: "RESTful APIs" },
    { id: 18, name: "Microservices" },
  ];

  const displayedSkills = skills.slice(0, 10);

  return (
    <SectionWrapper>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="section-title mb-0">Competenze</h3>
        <div className="d-flex align-items-center">
          <Button
            variant="link"
            className="add-item-button text-secondary me-2 p-0"
            title="Add new skill"
          >
            <PlusLg className="fs-4" />
          </Button>
          <Button
            variant="link"
            className="edit-section-button text-secondary p-0"
            title="Edit skills"
          >
            <Pencil className="fs-4" />
          </Button>
        </div>
      </div>

      {skills.length > 0 ? (
        <>
          <div className="skills-list">
            {displayedSkills.map((skill) => (
              <div key={skill.id} className="skill-item py-2 border-bottom">
                <p className="skill-name fw-bold mb-0">{skill.name}</p>
                {skill.associatedWith && (
                  <p className="skill-associated-with text-secondary mb-0">
                    {skill.associatedWith}
                  </p>
                )}
              </div>
            ))}
          </div>
          {skills.length > displayedSkills.length && (
            <div className="d-flex justify-content-center mt-3 pt-3">
              <Button
                variant="link"
                className="show-all-button text-secondary align-items-center d-flex p-0"
                href="#" 
              >
                Mostra tutte le competenze ({skills.length})
                <ArrowRight className="ms-2" />
              </Button>
            </div>
          )}
        </>
      ) : (
        <p className="text-secondary">Nessuna competenza aggiunta.</p>
      )}
    </SectionWrapper>
  );
};

export default Skills;
