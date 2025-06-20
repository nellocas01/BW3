import React from "react";
import { Button } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import SectionWrapper from "./SectionWrapper";
import Logo from "../../assets/img/Keyword.PNG";

const Interests = () => {
  const interests = {
    companies: [
      {
        id: 1,
        name: "Minsat",
        followers: "120.023 follower",
        logo: Logo,
      },
      {
        id: 2,
        name: "IKON Digital Farm",
        followers: "3.687 follower",
        logo: Logo,
      },
    ],
    groups: [],
    newsletters: [],
    schools: [],
  };

  return (
    <SectionWrapper>
      <h3 className="section-title mb-3">Interessi</h3>
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="pills-companies-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-companies"
            type="button"
            role="tab"
            aria-controls="pills-companies"
            aria-selected="true"
          >
            Aziende
          </button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-companies"
          role="tabpanel"
          aria-labelledby="pills-companies-tab"
        >
          {interests.companies.length > 0 ? (
            interests.companies.map((company) => (
              <div
                key={company.id}
                className="interest-item d-flex align-items-center py-2"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="company-interest-logo me-3 rounded-circle"
                  width={48}
                  height={48}
                />
                <div className="flex-grow-1">
                  <p className="company-name fw-bold mb-0">{company.name}</p>
                  <p className="company-followers text-secondary mb-0">
                    {company.followers}
                  </p>
                </div>
                <Button
                  variant="outline-secondary"
                  size="sm"
                  className="follow-button"
                >
                  <i className="bi bi-check-lg me-1"></i> Già segui{" "}
                </Button>
              </div>
            ))
          ) : (
            <p className="text-secondary">
              Nessun interesse in aziende aggiunto.
            </p>
          )}
          {interests.companies.length > 0 && (
            <div className="d-flex justify-content-center mt-3 border-top pt-3">
              <Button
                variant="link"
                className="show-all-button text-secondary align-items-center d-flex p-0"
                href="#"
              >
                Mostra tutte le aziende
                <ArrowRight className="ms-2" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Interests;
