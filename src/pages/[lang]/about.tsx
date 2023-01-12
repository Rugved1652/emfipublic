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

type Props = {
  aboutData: aboutData;
};

const About = ({ aboutData }: any) => {
  const [greyImage, setGreyImage] = useState(-1);

  return (
    <>
      <SwiperCarousel
        page="about"
        SildeComponent={ProductHero}
        data={aboutHeroInformation}
      />
      <div className="container">
        <AboutEmfi aboutData={aboutData?.data?.about_data} />
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
            {aboutData?.data.our_clients?.data.map(
              (client: any, index: any) => (
                <PaperCard
                  key={index}
                  image={client.image}
                  title={client.title}
                />
              )
            )}
          </div>
        </div>
        <div className="aboutSectionMain">
          <div className="commonHeader">
            <h2>{aboutData?.data.our_values?.title}</h2>
          </div>
          <Fade triggerOnce={true} direction="up" duration={1500}>
            <div className="ourValue">
              {aboutData?.data.our_values?.data.map(
                (client: any, index: any) => (
                  <div key={index}>
                    <Image
                      src={client.image}
                      alt={client.title}
                      width={20}
                      height={20}
                    />
                    <h5>{client.title}</h5>
                    <p>{client.desc}</p>
                  </div>
                )
              )}
            </div>
          </Fade>
        </div>

        <div className="aboutSectionMain ourTeamMain">
          <div className="commonHeader">
            <h2>{aboutData?.data.our_team?.title}</h2>
          </div>
          <div className="ourTeam">
            {aboutData?.data.our_team?.data.map((teamMember: any) => (
              <TeamMemberCard
                key={teamMember.id}
                image={aboutData?.data.our_team?.image}
                designation={teamMember.position}
                email={teamMember?.email ? teamMember.email : null}
                linkedIn={teamMember.linkedIn}
                name={teamMember.name}
              />
            ))}
          </div>
        </div>
        <AboutValues />
        <div className="aboutSectionMain">
          <div className="commonHeader">
            <h2>{aboutData?.data.as_seen_on?.title}</h2>
          </div>
          <div className="AsSeenIn">
            {aboutData.data.as_seen_on?.data.map((brand: any, index: any) => (
              <Flip key={index} direction={"vertical"} duration={1500}>
                <div
                  className="border-ani"
                  onMouseEnter={() => setGreyImage(index)}
                  onMouseLeave={() => setGreyImage(-1)}
                >
                  <span>
                    <CustomCard className="AsSeenInCard">
                      <Image
                        src={greyImage === index ? brand?.image1 : brand?.image}
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
      aboutData: res || null,
    },
  };
}

export default About;
