import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import AccordianItemComponent from "./AccordianItemComponent.tsx/AccordianItemComponent";
import { Fade } from "react-awesome-reveal";
import InfiniteScroll from "react-infinite-scroll-component";

type Props = {
  data: any;
};

const AccordianComponent = ({ data }: any) => {
  const [sliders, setSlider] = useState([1, 2, 3, 4, 5]);
  const getMoreData = () => {
    setSlider((prev: any) => [...prev, ...Array.from(Array(5).keys())]);
  };

  console.log(data.data.sliders);
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
          {data?.data?.sliders.map((i: any, index: any) => (
            <Fade key={index} triggerOnce={true} direction="up" duration={1500}>
              <Accordion.Item
                className="accordionItems"
                eventKey={String(index)}
              >
                <Accordion.Header>{i.report_title}</Accordion.Header>
                <Accordion.Body>
                  <AccordianItemComponent
                    reportId={i.slider_data.id}
                    reportSlug={i.slider_data.report_slug}
                    data={i.description}
                  />
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
