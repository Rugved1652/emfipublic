import { Wrapper } from "@googlemaps/react-wrapper";
import React from "react";
import { AttentionSeeker, Fade } from "react-awesome-reveal";
import SimpleMap from "./MapWrapper";
type Props = {
  data?: any;
};

const MapContainer = ({ data }: Props) => {
  return (
    <Fade triggerOnce={true} direction="up" duration={1500}>
      <div className="locationGroup">
        <div className="row">
          <div className="col-sm-12 col-md-3">
            <h2>{data?.title}</h2>
            <h3>{data?.subTitle}</h3>
            <h3>EMFI Securities Limited</h3>
            <p>
              25-26 Dering St, Third Floor
              <br /> Mayfair, London W1S 1AW
              <br /> United Kingdom
            </p>
            {/* {data?.address.map((i: any) => (
              <p>{i}</p>
            ))} */}

            <a href={`tel:${data?.tel}`}>{data?.tel}</a>
            <a href={`mailto:${data?.mailto}`}>{data?.mailto}</a>
          </div>
          <div className="col-sm-12 col-md-9">
            {" "}
            {/* <Wrapper }> */}
            <SimpleMap cordinates={data.cordinate} />
            {/* </Wrapper> */}
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default MapContainer;
