import Image from "next/image";
import React from "react";
import CustomCard from "../../Components/Cards/CustomCard/CustomCard";
import AboutHero from "../../Components/HeroSection/AboutHero";
import PaperCard from "../../Components/Cards/PaperCard/PaperCard";
import TeamMemberCard from "../../Components/Cards/TeamMemberCard/TeamMemberCard";
import { aboutHero } from "../../constants/aboutContent";
import {
  AsSeenContent,
  AsSeenContextText,
  infoSectionContent,
  OurClientsContent,
  OurTeamContent,
  OurValuesContent,
} from "../../constants/information";
import AboutEmfi from "../../Containers/AboutEmfi/AboutEmfi";
import MapContainer from "../../Containers/MapContainer/MapContainer";
import SwiperCarousel from "../../Containers/SwipeCarousel/SwipeCarousel";
import {AttentionSeeker, Flip, Fade} from 'react-awesome-reveal';
import EBondIcon from "../../Components/Icons/EBondIcon";
import AboutValues from "../../Containers/AboutValues/AboutValues";

type Props = {};

const about = (props: Props) => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "550px",
          left: "35%",
          right: "50%",
        }}
      >
        <EBondIcon />
      </div>
      <SwiperCarousel SildeComponent={AboutHero} data={aboutHero} />
      <div className="container">
        <AboutEmfi />
        <div className="aboutSectionMain ourClientsMain">
          <div className="commonHeader">
            <h2>Our Clients</h2>
            <p>
              EMFI aims to create superior value for our clients who are either
              professional clients or <br /> eligible counterparties. EMFI does
              not service retail clients.
            </p>
          </div>
          <div className="ourClients">
            {OurClientsContent.map((client) => (
              <PaperCard image={client.image} title={client.title} />
            ))}
          </div>
        </div>
        <div className="aboutSectionMain">
          <div className="commonHeader">
            <h2>Our Values</h2>
          </div>
          <Fade triggerOnce={true} direction="up" duration={1500}>
          <div className="ourValue">
            {OurValuesContent.map((client) => (
              <div key={client.id}>
                <Image
                  src={client.image}
                  alt={client.title}
                  width={20}
                  height={20}
                />
                <h5>{client.title}</h5>
                <p>{client.content}</p>
              </div>
            ))}
          </div>
          </Fade>
        </div>

        <div className="aboutSectionMain ourTeamMain">
          <div className="commonHeader">
            <h2>Our Team</h2>
          </div>
          <div className="ourTeam">
            {OurTeamContent.map((teamMember) => (
              <TeamMemberCard
                key={teamMember.id}
                image={teamMember.image}
                designation={teamMember.designation}
                email={teamMember.email}
                linkedIn={teamMember.linkedIn}
                name={teamMember.name}
              />
            ))}
          </div>
        </div>
        {/* <div className="aboutSectionMain">
          <Fade direction="up">
            <div className="candidateOurvalue">
              {infoSectionContent.map((infoSection) => (
                  <div>
                    <div className="candidateOurvalueImg">
                      <Image
                        src={infoSection.image}
                        alt={infoSection.title}
                        width={50}
                        height={50}
                      />
                    </div>
                    <div>
                      <h2>{infoSection.title}</h2>
                      {infoSection.paragraphs.map((paragraph) => (
                        <p>{paragraph}</p>
                      ))}
                    </div>
                    <div>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
              ))}
            </div>
          </Fade>
        </div> */}
        <AboutValues/>
        <div className="aboutSectionMain">
          <div className="commonHeader">
            <h2>As Seen In*</h2>
          </div>
          <div className="AsSeenIn">
            {AsSeenContent.map((brand) => (
              <Flip direction={"vertical"} duration={1500}>
                <div className="border-ani">
                  <span>
                    <CustomCard className="AsSeenInCard">
                      <brand.image />
                    </CustomCard>
                  </span>
                </div>
              </Flip>
            ))}
          </div>
          <p className="AsSeenInText">{AsSeenContextText}</p>
        </div>
        <MapContainer />
      </div>
    </>
  );
};

export default about;
