import Image from "next/image";
import React, { useState } from "react";
import { Flip } from "react-awesome-reveal";
import CustomCard from "../../Components/Cards/CustomCard/CustomCard";

type Props = {
  AsSeenContent: AsSeenSection;
};

const AsSeenIn = ({ AsSeenContent }: Props) => {
  const [greyImage, setGreyImage] = useState(-1);
  return (
    <div className="aboutSectionMain">
      <div className="commonHeader">
        <h2>{AsSeenContent.title}</h2>
      </div>
      <div className="AsSeenIn">
        {AsSeenContent.data.map((brand: any, index: any) => (
          <Flip key={index} direction={"vertical"} duration={1500}>
            <div
              className="border-ani"
              onMouseEnter={() => setGreyImage(index)}
              onMouseLeave={() => setGreyImage(-1)}
            >
              <span>
                <CustomCard className="AsSeenInCard">
                  <Image
                    src={greyImage === index ? brand.hoverImage : brand?.image}
                    alt={"img"}
                    width={280}
                    height={100}
                  />
                </CustomCard>
              </span>
            </div>
          </Flip>
        ))}
      </div>
      <p className="AsSeenInText">{AsSeenContent.desc}</p>
    </div>
  );
};

export default AsSeenIn;
