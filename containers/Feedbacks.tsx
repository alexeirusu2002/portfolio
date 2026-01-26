import { feedbacks } from "../portfolio";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import FeedbackCard from "../components/FeedbackCard";
import Fade from "react-reveal/Fade";

const Feedbacks = () => {
  return (
    feedbacks && (
      <Fade bottom duration={2000}>
        <section className="section section-lg" id="feedback">
          <Container>
            <div className="d-flex p-4 section-header">
              <div>
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                  <i className="fa fa-star text-info" />
                </div>
              </div>
              <div className="pl-4">
                <h2 className="section-title text-info">Client Feedback</h2>
              </div>
            </div>
            <Row className="g-3">
              {feedbacks.map((data, i) => {
                return (
                  <Col key={i} lg={6}>
                    <FeedbackCard {...data} />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </section>
      </Fade>
    )
  );
};

export default Feedbacks;
