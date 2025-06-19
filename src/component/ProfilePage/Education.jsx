import React from "react";
import { Button } from "react-bootstrap";
import SectionWrapper from "./SectionWrapper";
import { PlusLg, Pencil } from "react-bootstrap-icons";
import EpicodeLogo from "../../assets/img/epicode-logo.png";

const Education = () => {
  const educationItems = [
    {
      id: 1,
      school: "EPICODE Institute of Technology",
      degree: "Web Development - Full Stack Developer",
      dates: "Gen 2023 - Lug 2023",
      description:
        "Tecnologie: Front-End: HTML, CSS, JavaScript, Bootstrap, SASS, TypeScript… Backend: Java, Spring Boot, RESTful APIs, SQL, PostgreSQL, MongoDB, JWT, Microservices…",
      certifications: [{ name: "JSE - Graduation Certificate" }],
      skills: ["Linux", "Java", "+19 competenze"],
      logo: EpicodeLogo,
    },
    {
      id: 2,
      school: "ITC ENRICO CARUSO",
      degree: "Diploma in Scienze dell’Economia e della Gestione Aziendale",
      dates: "Set 2013 - Giu 2020",
      grade: "Votazione: 70/100",
      skills: ["Informatica", "Lingua Inglese", "+16 competenze"],
    },
  ];

  return (
    <SectionWrapper>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="section-title mb-0">Formazione</h3>
        <div className="d-flex align-items-center">
          <Button
            variant="link"
            className="add-item-button text-secondary me-2 p-0"
            title="Add new education"
          >
            <PlusLg className="fs-4" />
          </Button>
          <Button
            variant="link"
            className="edit-section-button text-secondary p-0"
            title="Edit education"
          >
            <Pencil className="fs-4" />
          </Button>
        </div>
      </div>

      {educationItems.length > 0 ? (
        educationItems.map((item) => (
          <div key={item.id} className="education-item d-flex py-3">
            {item.logo && (
              <img
                src={item.logo}
                alt={item.school}
                className="school-logo me-3 mt-1"
                width={48}
                height={48}
              />
            )}
            <div className="education-details flex-grow-1">
              <p className="school-name fw-bold mb-0">{item.school}</p>
              <p className="degree text-secondary mb-0">{item.degree}</p>
              <p className="dates text-secondary mb-0">{item.dates}</p>
              {item.grade && (
                <p className="grade text-secondary mb-0">{item.grade}</p>
              )}
              {item.description && (
                <p className="description mt-2 mb-0">{item.description}</p>
              )}
              {item.skills && item.skills.length > 0 && (
                <p className="skills text-secondary mb-0">
                  {item.skills.join(", ")}
                </p>
              )}
              {item.certifications && item.certifications.length > 0 && (
                <div className="certifications mt-2">
                  {item.certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="certification-item d-flex align-items-center mb-1"
                    >
                      <img
                        src={EpicodeLogo}
                        alt="Certificate"
                        width={40}
                        height={40}
                        className="me-2"
                      />{" "}
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="certificate-link"
                      >
                        {cert.name}
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))
      ) : (
        <p className="text-secondary">Nessuna formazione aggiunta.</p>
      )}
    </SectionWrapper>
  );
};

export default Education;
