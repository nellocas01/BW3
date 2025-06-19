import React from "react";
import { Button } from "react-bootstrap";
import { PlusLg, Pencil, ArrowRight } from "react-bootstrap-icons";
import EpicodeLogo from "../../assets/img/epicode-logo.png";
import SectionWrapper from "./SectionWrapper";

const LicensesCertifications = () => {
  const licensesCertifications = [
    {
      id: 1,
      name: "Data encryption and security, Microservices Architecture, Design Patterns, Advanced Git",
      issuer: "EPICODE Institute of Technology",
      issueDate: "Data di rilascio: Lug 2023",
      credentialId: "Mostra credenziale",
      skills: [
        "Advanced Git",
        "Data Encryption Standard (DES)",
        "+4 competenze",
      ],
      logo: EpicodeLogo,
    },
    {
      id: 2,
      name: "Spring Boot, IoC & Dependency Injection, Spring Data",
      issuer: "EPICODE Institute of Technology",
      issueDate: "Data di rilascio: Giu 2023",
      credentialId: "Mostra credenziale",
      skills: ["Spring Boot", "IoC", "Dependency Injection", "Spring Data"],
      logo: EpicodeLogo,
    },
  ];

  return (
    <SectionWrapper>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="section-title mb-0">Licenze e certificazioni</h3>
        <div className="d-flex align-items-center">
          <Button
            variant="link"
            className="add-item-button text-secondary me-2 p-0"
            title="Add new license or certification"
          >
            <PlusLg className="fs-4" />
          </Button>
          <Button
            variant="link"
            className="edit-section-button text-secondary p-0"
            title="Edit licenses and certifications"
          >
            <Pencil className="fs-4" />
          </Button>
        </div>
      </div>

      {licensesCertifications.length > 0 ? (
        licensesCertifications.map((item) => (
          <div key={item.id} className="certification-item d-flex py-3">
            {item.logo && (
              <img
                src={item.logo}
                alt={item.issuer}
                className="issuer-logo me-3 mt-1"
                width={48}
                height={48}
              />
            )}
            <div className="certification-details flex-grow-1">
              <p className="certification-name fw-bold mb-0">{item.name}</p>
              <p className="issuer text-secondary mb-0">{item.issuer}</p>
              <p className="issue-date text-secondary mb-0">{item.issueDate}</p>
              {item.credentialId && (
                <a className="credential-link d-block mt-2">
                  {item.credentialId} <ArrowRight className="ms-1" />
                </a>
              )}
              {item.skills && item.skills.length > 0 && (
                <p className="skills text-secondary mt-2 mb-0">
                  {item.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="skill-tag badge bg-light text-dark me-1 mb-1"
                    >
                      {skill}
                    </span>
                  ))}
                </p>
              )}
            </div>
          </div>
        ))
      ) : (
        <p className="text-secondary">
          Nessuna licenza o certificazione aggiunta.
        </p>
      )}
    </SectionWrapper>
  );
};

export default LicensesCertifications;
