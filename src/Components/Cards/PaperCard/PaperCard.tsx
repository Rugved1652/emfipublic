import Image from "next/image";
import React from "react";
import {AttentionSeeker, Flip} from 'react-awesome-reveal';
type Props = {
  image: string;
  title: string;
};

const PaperCard = ({ image, title }: Props) => {
  return (
    <Flip direction={"vertical"} duration={1500}>
      <div className="border-ani">
        <span>
          <div>
            <Image src={image} width={20} height={20} alt={title} />
            <p>{title}</p>
          </div>
        </span>
      </div>
    </Flip>
  );
};

export default PaperCard;
