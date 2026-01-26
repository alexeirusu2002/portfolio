import React from "react";
import { SkillBars } from "../portfolio";
import { Container, Row, Progress, Col } from "reactstrap";
import Fade from "react-reveal/Fade";

const Proficiency = () => {
  return (
    SkillBars && (
      <Container className="section section-lg" id="proficiency">
        <Fade bottom duration={2000}>
          <Row>
            <Col lg="6">
              <div className="section-header">
                <h2 className="section-title">Proficiency</h2>
              </div>
              {SkillBars.map(skill => {
                return (
                  <div className="progress-info" key={skill.Stack}>
                    <div className="progress-label">
                      <span>{skill.Stack}</span>
                    </div>
                    <div className="progress-percentage">
                      <span>{skill.progressPercentage}%</span>
                    </div>
                    <Progress
                      max="100"
                      value={skill.progressPercentage}
                      color="info"
                      role="progressbar"
                      aria-label={skill.Stack}
                    />
                  </div>
                );
              })}
            </Col>
            <Col lg="6" className="d-flex justify-content-center">
              <img
                src="/img/illustrations/proficiency-illustration.svg"
                alt="Skill proficiency overview"
                className="section-illustration"
              />
            </Col>
          </Row>
        </Fade>
      </Container>
    )
  );
};

export default Proficiency;
