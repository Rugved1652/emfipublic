import Image from "next/image";
import React from "react";
import CustomCard from "../../Components/Cards/CustomCard/CustomCard";
import AboutHero from "../../Components/HeroSection/AboutHero";
import PaperCard from "../../Components/Cards/PaperCard/PaperCard";
import TeamMemberCard from "../../Components/Cards/TeamMemberCard/TeamMemberCard";
import { aboutHero, aboutHeroInformation } from "../../constants/aboutContent";
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
import { Fade, Flip } from "react-awesome-reveal";
import EBondIcon from "../../Components/Icons/EBondIcon";
import AboutValues from "../../Containers/AboutValues/AboutValues";
import { fetchData } from "../../Services/apiFunction";
import { aboutData } from "../../types/types";

type Props = {
  aboutData: aboutData;
};

const about = ({ aboutData }: any) => {
  console.log("props", { aboutData });
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
      <SwiperCarousel SildeComponent={AboutHero} data={aboutHeroInformation} />
      <div className="container">
        <AboutEmfi aboutData={aboutData.aboutData.about_data} />
        <div className="aboutSectionMain ourClientsMain">
          <div className="commonHeader">
            <h2>{aboutData.aboutData?.our_clients?.title}</h2>
            <p>
              EMFI aims to create superior value for our clients who are either
              professional clients or <br /> eligible counterparties. EMFI does
              not service retail clients.
            </p>
          </div>
          <div className="ourClients">
            {OurClientsContent.map((client) => (
              <PaperCard
                key={client.id}
                image={client.image}
                title={client.title}
              />
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
        <AboutValues />
        <div className="aboutSectionMain">
          <div className="commonHeader">
            <h2>As Seen In*</h2>
          </div>
          <div className="AsSeenIn">
            {AsSeenContent.map((brand) => (
              <Flip key={brand.id} direction={"vertical"} duration={1500}>
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

export async function getStaticPaths() {
  return {
    paths: [{ params: { lang: "english" } }, { params: { lang: "espanol" } }],
    fallback: false,
  };
}
export async function getStaticProps(context: any) {
  const res = await fetchData(`about/${context.params.lang}`);
  return {
    props: {
      aboutData: {
        aboutData: res.data,
      },
    },
  };
}

export default about;
