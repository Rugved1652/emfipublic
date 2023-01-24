import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import AccordianItemComponent from "./AccordianItemComponent.tsx/AccordianItemComponent";
import { Fade } from "react-awesome-reveal";
import InfiniteScroll from "react-infinite-scroll-component";
import moment from "moment";

type Props = {
  data: any;
  fetchMore: any;
  hasMore: boolean;
};

const AccordianComponent = ({ data, fetchMore, hasMore }: any) => {
  console.log(data, "AcData");
  return (
    <>
      <Accordion
        className="col-sm-12 col-lg-6 accordionGroup"
        defaultActiveKey="0"
      >
        <InfiniteScroll
          loader={<>Loading...</>}
          dataLength={data.length}
          next={() => fetchMore()}
          hasMore={hasMore}
        >
          {data.map((i: any, index: any) => (
            <Fade
              key={i.slider_data_id}
              triggerOnce={true}
              direction="up"
              duration={1500}
            >
              <Accordion.Item
                className="accordionItems"
                eventKey={String(index)}
              >
                <Accordion.Header>
                  <div className="intelligenceItemTitle"
                    style={{
                      display: "block",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    <p>
                      {i.title}
                      {i.slider_data.format_type}
                      {i.report_title}
                    </p>
                    <span>{moment(i.display_date).format("MMMM DD, YYYY")}</span>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <AccordianItemComponent
                    chartData={i.chart_data}
                    reportId={i.slider_data.id}
                    reportSlug={i.slider_data.report_slug}
                    data={i.description}
                    chartDat={i.chart_data}
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
