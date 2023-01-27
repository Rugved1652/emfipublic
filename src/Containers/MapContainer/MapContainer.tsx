import React from "react";
import { Fade } from "react-awesome-reveal";
import SimpleMap from "./MapWrapper";
type Props = {
  MapData?: any;
};

const MapContainer = ({ MapData }: Props) => {
  console.log(MapData, "Maps");
  return (
    <div className="locationGroup">
      <div className="row">
        <div className="col-sm-12 col-md-3">
          <Fade triggerOnce={true} direction="up" duration={1500}>
            <div>
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
          </Fade>
        </div>
        <div className="col-sm-12 col-md-9">
          <Fade triggerOnce={true} direction="right" duration={700}>
            <SimpleMap />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default MapContainer;
