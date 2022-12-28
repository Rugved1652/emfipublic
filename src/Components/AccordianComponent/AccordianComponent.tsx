import React from "react";
import { Accordion } from "react-bootstrap";
import AccordianItemComponent from "./AccordianItemComponent.tsx/AccordianItemComponent";

type Props = {};

const AccordianComponent = (props: Props) => {
  return (
    <Accordion className="col-sm-12 col-lg-6 accordionGroup" defaultActiveKey="0">
      <Accordion.Item className="accordionItems" eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          <AccordianItemComponent />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className="accordionItems" eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          <AccordianItemComponent />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default AccordianComponent;
