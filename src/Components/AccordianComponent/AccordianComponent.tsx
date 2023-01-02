import React from "react";
import { Accordion } from "react-bootstrap";
import AccordianItemComponent from "./AccordianItemComponent.tsx/AccordianItemComponent";
import {Fade} from 'react-awesome-reveal';
type Props = {};

const AccordianComponent = (props: Props) => {
  return (    
      <Accordion className="col-sm-12 col-lg-6 accordionGroup" defaultActiveKey="0">
        <Fade triggerOnce={true} direction="up" duration={1500}> 
          <Accordion.Item className="accordionItems" eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              <AccordianItemComponent />
            </Accordion.Body>
          </Accordion.Item>
        </Fade>
        <Fade triggerOnce={true} direction="up" duration={1500}> 
          <Accordion.Item className="accordionItems" eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              <AccordianItemComponent />
            </Accordion.Body>
          </Accordion.Item>
        </Fade>
      </Accordion>
    
  );
};

export default AccordianComponent;
