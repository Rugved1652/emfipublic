import Image from "next/image";
import React from "react";
import WavyText from "../WavyText/WavyText";

type Props = {
  image?: string;
  data?: any;
};

const ProductHero = ({ image, data }: Props) => {
  return (
    <div>
      <div>
        <WavyText text="Awesome Wavy Text!" />
        <span className="wow"></span>
        {image ? image : null}
      </div>
    </div>
  );
};

export default ProductHero;
