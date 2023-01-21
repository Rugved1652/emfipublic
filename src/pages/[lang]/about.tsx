import Image from "next/image";
import React, { useState } from "react";
import CustomCard from "../../Components/Cards/CustomCard/CustomCard";
import PaperCard from "../../Components/Cards/PaperCard/PaperCard";
import TeamMemberCard from "../../Components/Cards/TeamMemberCard/TeamMemberCard";
import { aboutHeroInformation } from "../../constants/aboutContent";
import AboutEmfi from "../../Containers/AboutEmfi/AboutEmfi";
import MapContainer from "../../Containers/MapContainer/MapContainer";
import SwiperCarousel from "../../Containers/SwipeCarousel/SwipeCarousel";
import { Fade, Flip } from "react-awesome-reveal";
import AboutValues from "../../Containers/AboutValues/AboutValues";
import { fetchData } from "../../Services/apiFunction";
import { aboutData } from "../../types/types";
import ProductHero from "../../Components/HeroSection/ProductHero";
import {
  AboutEmfiContentEN,
  AboutEmfiContentES,
  AsSeenContentES,
  infoSectionContentEN,
  infoSectionContentES,
  OurClientsContentEN,
  OurClientsContentES,
  OurTeamContentEN,
  OurTeamContentES,
  OurValuesContentEN,
  OurValuesContentES,
} from "../../constants/information";

type Props = {
  aboutData: aboutData;
};

const About = ({
  ourClient,
  ourValues,
  OurTeamContent,
  infoSection,
  AsSeenContent,
  aboutData,
  AboutEmfiContent,
}: any) => {
  const [greyImage, setGreyImage] = useState(-1);

  return (
    <>
      <SwiperCarousel
        page="aboutPage"
        SildeComponent={ProductHero}
        data={aboutHeroInformation.data}
        image={aboutHeroInformation.image}
      />
      <div className="container">
        <AboutEmfi aboutData={AboutEmfiContent} />
        <div className="aboutSectionMain ourClientsMain">
          <div className="commonHeader">
            <h2>{aboutData?.data.our_clients?.title}</h2>
            <p>
              {aboutData?.data.our_clients?.desc.slice(0, 90)}
              <br />
              {aboutData?.data.our_clients?.desc.slice(90)}
            </p>
          </div>
          <div className="ourClients">
            {ourClient.map((client: any, index: any) => (
              <PaperCard
                key={index}
                image={client.image}
                title={client.title}
              />
            ))}
          </div>
        </div>
        <div className="aboutSectionMain">
          <div className="commonHeader">
            <h2>{aboutData?.data.our_values?.title}</h2>
          </div>
          <Fade triggerOnce={true} direction="up" duration={1500}>
            <div className="ourValue">
              {ourValues.map((client: any, index: any) => (
                <div key={index}>
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
            <h2>{aboutData?.data.our_team?.title}</h2>
          </div>
          <div className="ourTeam">
            {OurTeamContent.map((teamMember: any) => (
              <TeamMemberCard
                key={teamMember.id}
                image={teamMember.image}
                designation={teamMember.position}
                email={teamMember?.email ? teamMember.email : null}
                linkedIn={teamMember.linkedIn}
                name={teamMember.name}
              />
            ))}
          </div>
        </div>
        <AboutValues infoSectionContent={infoSection} />
        <div className="aboutSectionMain">
          <div className="commonHeader">
            <h2>{aboutData?.data.as_seen_on?.title}</h2>
          </div>
          <div className="AsSeenIn">
            {AsSeenContent.map((brand: any, index: any) => (
              <Flip key={index} direction={"vertical"} duration={1500}>
                <div
                  className="border-ani"
                  onMouseEnter={() => setGreyImage(index)}
                  onMouseLeave={() => setGreyImage(-1)}
                >
                  <span>
                    <CustomCard className="AsSeenInCard">
                      <Image
                        src={
                          greyImage === index ? brand.hoverImage : brand?.image
                        }
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
          <p className="AsSeenInText">{aboutData?.data.as_seen_on?.desc}</p>
        </div>
        <MapContainer data={aboutData?.data.locations} />
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
      ourClient:
        context.params.lang === "espanol"
          ? OurClientsContentES
          : OurClientsContentEN,
      ourValues:
        context.params.lang === "espanol"
          ? OurValuesContentES
          : OurValuesContentEN,
      OurTeamContent:
        context.params.lang === "espanol" ? OurTeamContentES : OurTeamContentEN,
      infoSection:
        context.params.lang === "espanol"
          ? infoSectionContentEN
          : infoSectionContentEN,
      AsSeenContent:
        context.params.lang === "espanol" ? AsSeenContentES : AsSeenContentES,
      AboutEmfiContent:
        context.params.lang === "espanol"
          ? AboutEmfiContentES
          : AboutEmfiContentEN,
      aboutData: res || null,
    },
  };
}

export default About;
