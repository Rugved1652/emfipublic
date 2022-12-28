import React from "react";
import HeroSearch from "../../Components/HeroSearch/HeroSearch";

type Props = {};

const scamalert = (props: Props) => {
  return (
    <div>
      <div className="container">
        <HeroSearch
          heading="LEGAL"
          subHeading="EMFI Group"
          placeholder="Scam Alert"
        />
        <div 
        className="legalGroup">
          <p>
            It has been brought to our attention that fraudsters, pretending to
            act on behalf of EMFI Securities Limited, have been contacting
            members of the public, particularly in France, fraudulently using
            EMFI Securities Limited's name, branding and other corporate
            identification details. We have been made aware of several cases and
            EMFI Securities Limited has reported such cases to relevant
            authorities, the Financial Conduct Authority in the United Kingdom
            and the Autorité des Marchés Financiers in France.
          </p>
          <p>
            EMFI Securities Limited filed a criminal complaint before the Paris
            Public Prosecutor on February 5, 2019 on the grounds of forgery and
            identity fraud. On November 9, 2020, EMFI Securities Limited filed
            another criminal complaint before the Paris Criminal Court.
          </p>
          <p>
            Please note that EMFI Securities Limited or any other entity of the
            EMFI Group provides absolutely no services to retail clients. All
            our products and services are aimed solely towards qualified
            investors, professional clients and eligible counterparties. In any
            event, neither EMFI Securities Limited nor any other entity of the
            EMFI Group offer saving products to the general public in France and
            in particular do not offer any "Livret d'Epargne 6,25%".
          </p>
          <p>
            If you are contacted in relation to investment opportunities by an
            unknown party claiming to represent EMFI Securities Limited or any
            other entity of the EMFI Group, please be extremely vigilant. Please
            immediately contact EMFI Securities Limited through our website to
            confirm the legitimacy of the proposed investment.
          </p>
          <p>
            In any event, EMFI Securities Limited strongly recommends that you
            consult your own tax, legal and accounting professionals before
            engaging in any financial transactions. Finally, if you believe that
            you have been misled into making a fraudulent investment, EMFI
            Securities Limited strongly suggests that you immediately contact
            law enforcement and other regulatory authorities in your country.
          </p>
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

export default scamalert;
