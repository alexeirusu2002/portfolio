import React from "react";
import { Icon } from "@iconify/react";
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import Fade from "react-reveal/Fade";
import { FeedbackType } from "../types/sections";

const FeedbackCard = ({ name, role, date, feedback }: FeedbackType) => {
  return (
    <Card className="shadow-lg--hover shadow my-4 h-100">
      <CardBody>
        <div className="d-flex px-3">
          <div className="pl-4">
            <CardTitle tag="h4" className="mb-2">
              {name}
              {/* <Icon icon={"logos:upwork"} className="ml-4" data-inline="false"></Icon> */}
            </CardTitle>
            <CardSubtitle tag="h6" className="mb-2">
              {role}
            </CardSubtitle>
            <CardSubtitle tag="h6" className="mb-2">
              {date}
            </CardSubtitle>
            <div>
              <i className="fa fa-star text-success" />
              <i className="fa fa-star text-success" />
              <i className="fa fa-star text-success" />
              <i className="fa fa-star text-success" />
              <i className="fa fa-star text-success" />
            </div>
            <p className="description mt-2">{feedback}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default FeedbackCard;
