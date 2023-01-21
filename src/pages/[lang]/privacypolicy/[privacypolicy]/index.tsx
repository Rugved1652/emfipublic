import React from "react";
import HeroSearch from "../../../../Components/HeroSearch/HeroSearch";

type Props = {};

const privacypolicy = ({ content = "" }: any) => {
  return (
    <div className="container">
      <HeroSearch
        heading="LEGAL"
        subHeading="EMFI group"
        placeholder="Privacy Policy - Global Users"
      />
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className="legalGroup"
      ></div>
    </div>
  );
};

// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { lang: "english", privacypolicy: "EEAEmp" } },
//       { params: { lang: "espanol", privacypolicy: "EEAEmp" } },
//       { params: { lang: "english", privacypolicy: "EEAUser" } },
//       { params: { lang: "espanol", privacypolicy: "EEAUser" } },
//       { params: { lang: "english", privacypolicy: "globalUser" } },
//       { params: { lang: "espanol", privacypolicy: "globalUser" } },
//       { params: { lang: "english", privacypolicy: "globalEmp" } },
//       { params: { lang: "espanol", privacypolicy: "globalEmp" } },
//     ],
//     fallback: false,
//   };
// }
// export async function getStaticProps({ params }: any) {
//     let content: any;
//     if (params?.lang === "english") {
//       switch (params?.privacypolicy) {
//         case "EEAEmp":
//           content = EEAEmpES;
//           break;
//         case "EEAUser":
//           content = EEAUserES;
//           break;
//         case "globalUser":
//           content = globalUserES;
//           break;
//         case "globalEmp":
//           content = globalEmpES;
//           break;
//         default:
//           content = {};
//           break;
//       }
//     } else if (params?.lang === "espanol") {
//       switch (params?.privacypolicy) {
//         case "EEAEmp":
//             content = EEAEmpEN;
//             break;
//           case "EEAUser":
//             content = EEAUserEN;
//             break;
//           case "globalUser":
//             content = globalUserEN;
//             break;
//           case "globalEmp":
//             content = globalEmpEN;
//             break;
//           default:
//             content = {};
//             break;
//       }
//     }
//     return {
//       // Passed to the page component as props
//       props: { content: content },
//     };
// }

export default privacypolicy;
