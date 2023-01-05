import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import AccordianItemComponent from "./AccordianItemComponent.tsx/AccordianItemComponent";
import { Fade } from "react-awesome-reveal";
import InfiniteScroll from "react-infinite-scroll-component";
type Props = {};

const AccordianComponent = (props: any) => {
  const [sliders, setSlider] = useState([1, 2, 3, 4, 5]);
  const getMoreData = () => {
    console.log("sliders", sliders);
    setSlider((prev: any) => [...prev, ...Array.from(Array(5).keys())]);
  };

  return (
    <>
      <Accordion
        className="col-sm-12 col-lg-6 accordionGroup"
        defaultActiveKey="0"
      >
        <InfiniteScroll
          loader={<>Loading...</>}
          dataLength={sliders.length}
          next={() => getMoreData()}
          hasMore={true}
        >
          {sliders.map((i: any, index: any) => (
            <Fade triggerOnce={true} direction="up" duration={1500}>
              <Accordion.Item
                className="accordionItems"
                eventKey={String(index)}
              >
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                  <AccordianItemComponent />
                </Accordion.Body>
              </Accordion.Item>
            </Fade>
          ))}
        </InfiniteScroll>
      </Accordion>
    </>
  );
};

export default AccordianComponent;
