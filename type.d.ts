declare type AboutEmfiContent = {
  id: string;
  title: string;
  isImage: boolean;
  paragraph: string[];
  image: string;
};

declare type OurClientsContent = {
  id: string;
  image: string;
  title: string;
};

declare type OurValuesContent = {
  id: string;
  image: string;
  title: string;
  content: string;
};

declare type OurTeamContent = {
  id: number;
  name: string;
  profileImage: string;
  linkedinUrl: string;
  position: string;
};
declare type infoSectionContent = {
  image: string;
  id: string;
  isImage: boolean;
  title: string;
  paragraphs?: string[];
  content?: string;
};
declare type AsSeenContent = {
  id: string;
  image: string;
  hoverImage: string;
  alt: string;
};
declare type HeroSearchInfo = {
  heading: string;
  subHeading: string;
  placeholderText?: string;
  serviceList: any[];
};
declare type SalesNTradingContent = {
  title: string;
  img: string;
  paragraph: string[];
};
declare type ServiceProductContent = {
  id: string;
  image: string;
  heading?: string;
  subheading: string;
  sup: string;
  link: string;
};

declare interface OurTeamSection {
  title: string;
  image: string;
  data: OurTeamContent[];
}
declare interface OurClientsSection {
  title: string;
  desc: string;
  OurClients: OurClientsContent[];
}

declare interface OurValuesSection {
  title: string;
  ourValues: OurValuesContent[];
}
declare interface AsSeenSection {
  title: string;
  desc: string;
  data: AsSeenContent[];
}
