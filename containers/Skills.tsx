import { Icon } from "@iconify/react";
import React, { Fragment } from "react";
import Fade from "react-reveal/Fade";
import { Col, Container, Row, UncontrolledTooltip } from "reactstrap";
import { skillsSection } from "../portfolio";

const Skills = () => {
  const illustrations = ["/img/illustrations/skills-illustration.svg", "/img/illustrations/skills-illustration.svg"];
  return (
    skillsSection && (
      <Fade bottom duration={2000}>
        <Container className="text-center my-5 section section-lg" id="skills">
          <div className="section-header justify-content-center">
            <h2 className="section-title">{skillsSection.title}</h2>
          </div>
          <p className="section-subtitle">{skillsSection.subTitle}</p>
          {skillsSection.data.map((section, index) => {
            return (
              <Row className="my-5" key={index}>
                <Col lg="6" className="order-2 order-lg-1 d-flex justify-content-center">
                  <img
                    src={illustrations[index % illustrations.length]}
                    alt={`${section.title} illustration`}
                    className="section-illustration"
                  />
                </Col>
                <Col lg="6" className="order-1 order-lg-2">
                  <h3 className="h3 mb-2">{section.title}</h3>
                  <div className="d-flex justify-content-center flex-wrap mb-2">
                    {section.softwareSkills.map((skill, i) => {
                      return (
                        <Fragment key={i}>
                          <div
                            className="icon icon-lg icon-shape shadow-sm rounded-circle m-1"
                            id={skill.skillName.replace(/\s/g, "")}
                          >
                            {skill.skillName === "GoHighLevel" ? (
                              <img 
                                src="https://accredible_temp_credential_images.s3-external-1.amazonaws.com/16953064057414655210067262582862.svg?cb=1695306406303" 
                                alt="GoHighLevel" 
                                width="30"
                              />
                            ) : (
                              <Icon icon={skill.iconifyTag} data-inline="false"></Icon>
                            )}
                          </div>
                          <UncontrolledTooltip delay={0} placement="bottom" target={skill.skillName.replace(/\s/g, "")}>
                            {skill.skillName}
                          </UncontrolledTooltip>
                        </Fragment>
                      );
                    })}
                  </div>
                  <div>
                    {section.skills.map((skill, i) => {
                      return <p key={i}>{skill}</p>;
                    })}
                  </div>
                </Col>
              </Row>
            );
          })}
        </Container>
      </Fade>
    )
  );
};

export default Skills;
