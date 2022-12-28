import Image from "next/image";
import React from "react";
import LinkedInIconWhite from "../../Icons/LinkedInIconWhite";
import MessageIconWhite from "../../Icons/MessageIconWhite";
import {AttentionSeeker, Flip, Slide} from 'react-awesome-reveal';
type Props = {
  image: string;
  designation: string;
  email: string;
  linkedIn: string;
  name: string;
};

const TeamMemberCard = ({
  image,
  designation,
  email,
  linkedIn,
  name,
}: Props) => {
  return (
    <Flip direction={"vertical"} duration={1500}>
      <div className="border-ani">
        <span>
          <div className="teamGroup">
            <div className="teamGroupImg">
              <Image src={image} alt={name} width={20} height={20} />
            </div>
            <h3 className="teamName">{name}</h3>
            <p className="teamDesignation">{designation}</p>
            <div className="teamSocial">
              <LinkedInIconWhite />
              <MessageIconWhite />
            </div>
          </div>
        </span>
      </div>
    </Flip>
  );
};

export default TeamMemberCard;
