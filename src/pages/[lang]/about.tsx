import Image from "next/image";
import React from "react";
import PaperCard from "../../Components/Cards/PaperCard/PaperCard";
import TeamMemberCard from "../../Components/Cards/TeamMemberCard/TeamMemberCard";
import { OurTeamEN, OurTeamES } from "../../constants/aboutContent";
import AboutEmfi from "../../Containers/AboutEmfi/AboutEmfi";
import SwiperCarousel from "../../Containers/SwipeCarousel/SwipeCarousel";
import { Fade } from "react-awesome-reveal";
import AboutValues from "../../Containers/AboutValues/AboutValues";
import { fetchData } from "../../Services/apiFunction";
import ProductHero from "../../Components/HeroSection/ProductHero";
import {
  AboutEmfiContentEN,
  AboutEmfiContentES,
  infoSectionContentEN,
  infoSectionContentES,
  OurClientsEN,
  OurClientsES,
  OurValuesEN,
  OurValuesES,
} from "../../constants/aboutContent";
import AsSeenIn from "../../Containers/AsSeenIn/AsSeenIn";
import { aboutHeroInformation } from "../../constants/productDetailsContent";
import {
  AsSeenContentEN,
  AsSeenContentES,
} from "../../constants/globalContent";
import MapContainer from "../../Containers/MapContainer/MapContainer";

type Props = {
  ourClient: OurClientsSection;
  ourValues: OurValuesSection;
  OurTeam: OurTeamSection;
  infoSection: infoSectionContent[];
  AsSeenContent: AsSeenSection;
  AboutEmfiContent: AboutEmfiContent;
};

const About = ({
  ourClient,
  ourValues,
  OurTeam,
  infoSection,
  AsSeenContent,
  AboutEmfiContent,
}: Props) => {
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
            <h2>{ourClient.title}</h2>
            <p>
              {ourClient.desc.slice(0, 90)}
              <br />
              {ourClient.desc.slice(90)}
            </p>
          </div>
          <div className="ourClients">
            {ourClient.OurClients.map((client: any, index: any) => (
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
            <h2>{ourValues.title}</h2>
          </div>
          <Fade triggerOnce={true} direction="up" duration={1500}>
            <div className="ourValue">
              {ourValues.ourValues.map((value: any, index: any) => (
                <div key={index}>
                  <Image
                    src={value.image}
                    alt={value.title}
                    width={20}
                    height={20}
                  />
                  <h5>{value.title}</h5>
                  <p>{value.content}</p>
                </div>
              ))}
            </div>
          </Fade>
        </div>

        <div className="aboutSectionMain ourTeamMain">
          <div className="commonHeader">
            <h2>{OurTeam.title}</h2>
          </div>
          <div className="ourTeam">
            {OurTeam.data.map((teamMember) => (
              <TeamMemberCard
                key={teamMember.id}
                image={OurTeam.image}
                designation={teamMember.position}
                email={"/content"}
                linkedIn={teamMember.linkedinUrl}
                name={teamMember.name}
              />
            ))}
          </div>
        </div>
        <AboutValues infoSectionContent={infoSection} />
        <AsSeenIn AsSeenContent={AsSeenContent} />
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
      ourClient:
        context.params.lang === "espanol" ? OurClientsES : OurClientsEN,
      ourValues: context.params.lang === "espanol" ? OurValuesES : OurValuesEN,
      OurTeam: context.params.lang === "espanol" ? OurTeamES : OurTeamEN,
      infoSection:
        context.params.lang === "espanol"
          ? infoSectionContentES
          : infoSectionContentEN,
      AsSeenContent:
        context.params.lang === "espanol" ? AsSeenContentES : AsSeenContentEN,
      AboutEmfiContent:
        context.params.lang === "espanol"
          ? AboutEmfiContentES
          : AboutEmfiContentEN,
    },
  };
}

export default About;
