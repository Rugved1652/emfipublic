import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import AccordianItemComponent from "./AccordianItemComponent.tsx/AccordianItemComponent";
import { Fade } from "react-awesome-reveal";
import InfiniteScroll from "react-infinite-scroll-component";
import moment from "moment";
import { it } from "node:test";
import { fetchData } from "../../Services/apiFunction";

type Props = {
  data: any;
  fetchMore: any;
  hasMore: boolean;
};

const AccordianComponent = ({ data, fetchMore, hasMore, isOpen }: any) => {
  const [Accordiandata, setAccordianData] = useState(data);
  const [chartData, setchartData] = useState(data);
  const [active, setActive] = useState("0");

  useEffect(() => {
    setAccordianData(data);
  }, [data]);

  console.log(String(data[0]?.slider_data?.id), "AcData");
  return (
    <>
      <Accordion
        onSelect={(e: any) => setActive(e)}
        className="col-sm-12 col-lg-6 accordionGroup"
        defaultActiveKey={
          isOpen ? Array.from(Array(10), (_, x) => String(x)) : "0"
        }
        alwaysOpen={isOpen ? true : false}
      >
        <InfiniteScroll
          loader={<div className="loading-main full-page">
          <div>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
          </div>
      </div>}
          dataLength={Accordiandata?.length}
          next={() => fetchMore()}
          hasMore={hasMore}
        >
          {Accordiandata.map((i: any, index: any) => (
            <Fade key={index} triggerOnce={true} direction="up" duration={1500}>
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
                    current={String(index)}
                    active={active}
                    maptype={i.graph_type}
                    optionBanchMark={i?.chart_data?.options?.option_banchmark}
                    priceone={i.display_title_first}
                    displaySubTitle={i.display_sub_title}
                    pricetwo={i.display_title_second}
                    chartData={i.chart_data}
                    reportId={i.slider_data.id}
                    reportSlug={i.slider_data.report_slug}
                    data={i.description}
                    newChartData={chartData[0]}
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
