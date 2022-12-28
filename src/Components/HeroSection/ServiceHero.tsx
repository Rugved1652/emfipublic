import Image from "next/image";
import React from "react";

type Props = {
  data: any;
};

const ServiceHero = ({ data }: Props) => {
  return (
    <div className="container">
      <div className="serviceSliderGroup">
      <div className="serviceSliderGroupText">
        <h3>{data.title}</h3>
        {data.paragraph.map((paragraph: string) => (
          <p>{paragraph}</p>
        ))}
      </div>
      <div className="serviceSliderGroupImg">
        <Image src={data.img} alt={data.title} width={300} height={300} />
      </div>
    </div>
    </div>
  );
};

export default ServiceHero;
