import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }: any) => (
  <div style={{ backgroundColor: "#fff" }}> {text}</div>
);

export default function SimpleMap({ cordinates }: any) {
  const defaultProps = {
    center: {
      lng: -0.1479572,
      lat: 51.514359,
    },
    zoom: 11,
  };
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "30vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyA4se7HxOqOpUPcelVjD7Odc_BBP4qdqHE" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={51.514359}
          lng={-0.1479572}
          text="EMFI Securities"
        />
      </GoogleMapReact>
    </div>
  );
}
