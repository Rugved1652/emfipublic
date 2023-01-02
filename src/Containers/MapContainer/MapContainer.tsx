import React from "react";
import {AttentionSeeker, Fade} from 'react-awesome-reveal';
type Props = {};

const MapContainer = (props: Props) => {
  return (
    <Fade triggerOnce={true} direction="up" duration={1500}>
    <div className="locationGroup">
      <div className="row">
        <div className="col-sm-12 col-md-4">
            <h2>London</h2>
            <h3>EMFI Securities Limited</h3>
            <p>25-26 Dering St, Third Floor<br/> Mayfair, London W1S 1AW<br/> United Kingdom</p>
            <a href="tel:0442039833634">+44 20 3983 3634</a>
            <a href="mailto:securities@emfi.uk">securities@emfi.uk</a>
        </div>
        <div className="col-sm-12 col-md-8"></div>
      </div>
    </div></Fade>);
};

export default MapContainer;
