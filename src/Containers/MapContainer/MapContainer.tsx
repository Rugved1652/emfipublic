import React from "react";
import { Fade } from "react-awesome-reveal";
import SimpleMap from "./MapWrapper";
type Props = {
  data?: any;
};

const MapContainer = ({ MapData }: any) => {
  console.log(MapData, "Maps");
  return (
    <Fade triggerOnce={true} direction="up" duration={1500}>
      <div className="locationGroup">
        <div className="row">
          <div className="col-sm-12 col-md-3">
            <h2>{MapData?.title}</h2>
            <h3>{MapData?.subTitle}</h3>
            <p>
              25-26 Dering St, Third Floor
              <br /> Mayfair, London W1S 1AW
              <br /> United Kingdom
            </p>

            <a href={`tel:${MapData?.tel}`}>{MapData?.tel}</a>
            <a href={`mailto:${MapData?.mailto}`}>{MapData?.mailto}</a>
          </div>
          <div className="col-sm-12 col-md-9">
            <SimpleMap />
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default MapContainer;
