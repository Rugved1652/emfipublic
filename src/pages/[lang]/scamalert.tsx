import React from "react";
import HeroSearch from "../../Components/HeroSearch/HeroSearch";
import { scamalertEN, scamalertES } from "../../constants/policies";

type Props = {};

const scamalert = ({ scamAlert }: any) => {
  return (
    <div>
      <div className="container">
        <HeroSearch
          heading="LEGAL"
          subHeading="EMFI Group"
          placeholder="Scam Alert"
        />
        <div className="legalGroup">
          {scamAlert.map((points: any) => (
            <p>{points}</p>
          ))}
          <h4>FRENCH</h4>
          <p>
            Il a été porté à notre connaissance que des individus se présentant
            comme représentants de la société EMFI Securities Limited ont
            contacté des particuliers, notamment en France, en utilisant de
            manière frauduleuse notre nom, notre logo et nos données
            d'identification commerciale. Nous avons été avertis de plusieurs
            cas et EMFI Securities Limited a averti les autorités compétentes,
            notamment la Financial Conduct Authority au Royaume-Uni et
            l'Autorité des Marchés Financiers en France.
          </p>
          <p>
            La société EMFI Securities Limited a déposé plainte auprès du
            Procureur de la République de Paris, le 5 février 2019, pour les
            faits de faux et usage de faux et d'usurpation d'identité. Le 9
            novembre 2020, EMFI Securities Limited a déposé une autre plainte
            avec constitution de partie civile auprès du doyen des juges
            d'instruction de Paris.
          </p>
          <p>
            Veillez noter que EMFI Securities Limited ne propose pas de services
            financiers à destination des particuliers. Tous nos produits et
            services financiers sont destinés uniquement à des investisseurs
            qualifiés et à des clients professionnels. En tout état de cause, ni
            EMFI Securities Limited ni aucune autre entité du Groupe EMFI ne
            proposent de produits d'épargne à destination du grand public en
            France et notamment un "Livret d'Epargne 6,25%".
          </p>
          <p>
            La plus grande vigilance est recommandée si vous êtes contactés au
            sujet d'opportunités d'investissement par toute personne prétendant
            agir pour le compte d'EMFI Securities Limited ou de toute autre
            entité du Groupe EMFI. Veuillez contacter immédiatement EMFI
            Securities Limited via notre site internet pour vérifier la
            fiabilité de l'investissement proposé.
          </p>
          <p>
            D'une manière générale, EMFI Securities Limited conseille vivement
            de toujours consulter vos conseillers fiscaux, juridiques et
            comptables avant toute décision d'investissement. Enfin, si vous
            estimez avoir été victime d'un investissement frauduleux, EMFI
            Securities Limited vous invite vivement à contacter immédiatement
            les autorités judiciaires et prudentielles dans votre pays.
          </p>
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { lang: "english" } }, { params: { lang: "espanol" } }],
    fallback: false,
  };
}
export async function getStaticProps({ params }: any) {
  return {
    props: {
      scamAlert: params?.lang === "espanol" ? scamalertES : scamalertEN,
    },
  };
}

export default scamalert;
