import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import Image from "next/image";

const AnyReactComponent = ({ text }: any) => {
  const [showToolTip, setShowToolTip] = useState(0);
  return (
    <>
      <Image
        className="mapMarker"
        onMouseEnter={() => setShowToolTip(1)}
        onMouseLeave={() => setShowToolTip(0)}
        src="/marker.svg"
        alt="marker"
        width={28}
        height={28}
      />
      <div className="map">
        {showToolTip ? (
          <div className="mapTooltipMani">
            <div className="mapTooltip">
              <h3>EMFI Securities Limited</h3>
              <p>25-26 Dering St, Third Floor Mayfair, London W1S 1AW
              United Kingdom</p>
            </div>
            <div className="gm-style-iw-tc"></div>
            </div>
        ) : null}
      </div>
    </>
  );
};

export default function SimpleMap({ cordinates }: any) {
  const defaultProps = {
    center: {
      lng: -0.1479572,
      lat: 51.514359,
    },
    zoom: 15,
  };
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "30vh", width: "100%",   filter: "grayscale(100%)"}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyA4se7HxOqOpUPcelVjD7Odc_BBP4qdqHE" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={51.514359} lng={-0.1479572} />
      </GoogleMapReact>
    </div>
  );
}
