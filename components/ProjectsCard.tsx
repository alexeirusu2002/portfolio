import React from "react";
import { Card, CardBody, Col, Button, Badge } from "reactstrap";
import Fade from "react-reveal/Fade";
import { ProjectType } from "../types/sections";

const ProjectsCard = ({ name, desc, github, link, skills }: ProjectType) => {
  return (
    <Col lg="6">
      <Card className="shadow-lg--hover shadow my-4">
        <CardBody className="project-body">
          <div className="d-flex px-3">
            <div className="pl-4">
              <h3>{name}</h3>
              <p className="description mt-3">{desc}</p>
              {/* {github ? (
                <Button
                  className="btn-icon"
                  color="github"
                  href={github}
                  target="_blank"
                  rel="noopener"
                  aria-label="Github"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-github" />
                  </span>
                </Button>
              ) : null} */}
              {skills ? (
                <div className="pb-2 mb-2">
                  {skills.map((skill: any, index: number) => (
                    <Badge key={index} color="primary" className="mx-1">{skill}</Badge>
                  ))}
                </div>
              ) : null}
              {link && link !== "Private" ? (
                <Button
                  className="btn-icon"
                  color="success"
                  href={link}
                  target="_blank"
                  rel="noopener"
                  aria-label="Twitter"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-arrow-right mr-2" />
                  </span>
                  <span className="nav-link-inner--text ml-1">Live</span>
                </Button>
              ) : null}
              {link && link === "Private" ? (
                <Button
                  className="btn-icon"
                  color="primary"
                  target="_blank"
                  rel="noopener"
                  aria-label="Twitter"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-user-secret mr-2" />
                  </span>
                  <span className="nav-link-inner--text ml-1">{link} Project</span>
                </Button>
              ) : null}
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProjectsCard;
