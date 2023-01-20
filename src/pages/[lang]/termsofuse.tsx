import React from "react";
import HeroSearch from "../../Components/HeroSearch/HeroSearch";
import { termofUseEN, termofUseES } from "../../constants/policies";

type Props = {};

const termsofuse = ({termofuse}: any) => {
  return (
    <div className="container">
      <HeroSearch
        heading="LEGAL"
        subHeading="EMFI group"
        placeholder="Terms of use"
      />
      <div
        dangerouslySetInnerHTML={{ __html: termofuse }}
        className="legalGroup"
      >
        {/* <p>
          EMFI appreciates your visit to this web site ("EMFI Website") and your
          interest in our services and products. Your privacy is important to us
          and we want you to feel comfortable visiting our site. We take care to
          protect your personal data collected, processed and used during visits
          to the EMFI Website.
        </p>
        <p>
          How we protect or use your data varies from country to country.
          Privacy Notices can be found for certain jurisdictions where EMFI
          entities process personal data. The terms of this Policy will be
          subject to the relevant jurisdiction-specific Privacy Notice where
          applicable. Please click on the jurisdiction that applies to you from
          the list at https://www.emfi.uk/english/privacy-policy
        </p>
        <h4>
          By accessing the EMFI Website you accept this Privacy Policy
          ("Policy").
        </h4>
        <p>
          If you do not agree to this Policy, do not proceed to further web
          pages of the EMFI Website.
        </p>
        <h4>1. What are the purpose and the scope of this Policy?</h4>
        <p>
          EMFI Group, its subsidiaries and branches ("EMFI" or "we") are
          committed to safeguarding the personal information that we collect
          from individuals who use the EMFI Website. Accordingly, EMFI has
          developed this Policy to describe how and what type of data will be
          collected from users of the EMFI Website and the purposes for which
          EMFI may collect, share or disclose the data. EMFI also outlines
          reasonable precautions which are taken to keep your data secure.
        </p>
        <p>
          This Policy applies to any information obtained by EMFI through your
          use of the EMFI Website. It is not applicable to any Internet websites
          controlled by third parties not affiliated with EMFI that the EMFI
          Website may link to ("Third Party Sites"). Please review the privacy
          policies of Third Party Sites as EMFI is not responsible for and has
          no influence on the content or the privacy practices of Third Party
          Sites.
        </p>
        <p>
          The terms of this Policy are subject to any additional terms of
          disclaimers or other contractual terms you have entered into with EMFI
          such as client privacy policies or notices, and any applicable
          mandatory laws and regulations.
        </p>
        <h4>
          2. What information do we collect from you and for what purpose?
        </h4>
        <p>
          When you visit the EMFI Website, our web server automatically records
          details about your visit (for example, your IP address, the web site
          from which you visit us, the type of browser software used, the EMFI
          Website pages that you actually visit including the date and the
          duration of your visit).
        </p>
        <p>
          In addition, we collect personal data which you provide through the
          EMFI Website, for example when you enter personal details (e.g. name,
          gender, address, e-mail address, phone/fax number) on a registration
          page or if you sign up for an email newsletter.
        </p>
        <p>EMFI will use your personal data:</p>
        <ul>
          <li>
            for the purposes of technical administration and research &
            development of the EMFI Website,
          </li>
          <li>for customer and user administration and marketing,</li>
          <li>to inform you about our services and products, and</li>
          <li>for such purposes as otherwise specified.</li>
        </ul>
        <p>
          EMFI respects applicable laws and regulations in its use of personal
          data.
        </p>
        <h4>3. How do we collect and store information from you?</h4>
        <p>
          EMFI uses tracking technology such as cookies or tags to gather
          information as outlined above (see: "What information do we collect
          from you and for what purpose?") to understand how visitors use the
          EMFI Website.
        </p>
        <p>
          Tracking technology helps us manage and improve the usability of the
          EMFI Website, for example by detecting whether there has been any
          contact between your computer and us in the past and to identify the
          most popular sections of the EMFI Website.
        </p>
        <p>
          Where available, the “Cookies Policy” link at the bottom of the page
          gives you more details about EMFI’s use of cookies, and lets you
          control which types of cookies the EMFI Website may set on your device
          (known as your “cookie settings”). Please ensure that you set your
          cookie settings by un-ticking certain types of cookies if you do not
          consent to their use by EMFI.
        </p>
        <p>
          When you save your cookie settings, they should also apply to your
          future visits to the EMFI Website. However, for technical reasons
          beyond EMFI’s control, this cannot be guaranteed. For example, if you
          reset your browser, delete your cookies or access the EMFI website
          from another browser or device your cookie settings may be lost. To
          comply with applicable laws and regulations, in some countries you may
          be asked to confirm your cookie settings when you first visit the EMFI
          Website. If you are in a country where you are automatically required
          to set your cookie settings, you may be asked to set them again on a
          future visit.
        </p>
        <p>
          In many cases you can also control tracking technologies using your
          browser. Please ensure that your browser setting reflects whether you
          wish to be warned about and/or accept tracking technologies (such as
          cookies) where possible. The specific capabilities of your browser and
          instructions on how to use them can usually be found in the manual or
          help file of your browser.
        </p>
        <p>
          Refusing, disabling or deactivating of tracking technologies may
          result in a reduced availability of the services provided by the EMFI
          Website or parts of the EMFI Website may no longer function correctly.
        </p>
        <h4>
          4. To whom do we disclose your information collected from the EMFI
          Website?
        </h4>
        <p>
          EMFI may disclose your information to its affiliates and their agents
          and third-party providers inside or outside your country of residence
          to perform services for EMFI and for the purposes stated above. Our
          affiliates, agents and third-party providers who have access to
          personal data obtained through the EMFI Website are obliged to respect
          privacy.
        </p>
        <p>
          When transferring personal data internationally we make sure that we
          comply with applicable laws and regulations, for example, by entering
          into agreements which will ensure that the recipients of your
          information maintain an adequate level of data protection.
        </p>
        <p>
          We may also disclose your information to governmental agencies or
          entities, regulatory authorities, or other persons in line with any
          applicable law, regulations, court order or official request, or under
          any and for the purposes of any guidelines issued by regulatory or
          other authorities, or similar processes as either required or
          permitted by applicable law.
        </p>
        <h4>
          5. What security measures have we implemented to protect your
          information collected through the EMFI Website?
        </h4>
        <p>
          EMFI has implemented reasonable technical and organisational security
          measures to protect your personal data collected by EMFI via the EMFI
          Website against unauthorized access, misuse, loss or destruction.
        </p>
        <h4>6. How do we treat electronic messages sent to and from EMFI?</h4>
        <p>
          All electronic messages sent to and from EMFI are automatically
          retained in a journaling system which preserves the evidential weight
          of the e-mails. They are protected by reasonable technical and
          organisational measures and may only be accessed in justified cases in
          line with applicable laws and regulations (e.g. court order, suspicion
          of criminal conduct, violation of regulatory obligations, material
          breach of employment contract) by specific persons in defined
          functions (e.g. Legal, Compliance, Risk). All emails are disposed of
          after the applicable retention period has expired.
        </p>
        <h4>
          7. What should you consider when sending data over the Internet?
        </h4>
        <p>
          The Internet is generally not regarded as a secure environment, and
          information sent via the Internet (such as to or from the EMFI Website
          or via electronic message) may be accessed by unauthorized third
          parties, potentially leading to disclosures, changes in content or
          technical failures. Even if both sender and receiver are located in
          the same country, information sent via the Internet may be transmitted
          across international borders and be forwarded to a country with a
          lower data protection level than exists in your country of residence.
        </p>
        <h4>
          8. How do we deal with information from individuals under the age of
          18?
        </h4>
        <p>
          The EMFI Website does not seek to collect personal data from
          individuals under the age of 18. Individuals under the age of 18
          should receive permission from their parent or legal guardian before
          providing any personal data to EMFI on the EMFI Website.
        </p>
        <h4>9. How can you access or review your personal data?</h4>
        <ul>
          <li>check whether we hold your personal data,</li>
          <li>ask us to provide you with a copy of your personal data, or</li>
          <li>
            require us to correct any of your personal data that is inaccurate.
          </li>
        </ul>
        <p>
          Should you have a request regarding the processing of your personal
          data please send an email to the following address: compliance@emfi.uk
        </p>
        <h4>10. Status of this privacy notice</h4>
        <p>
          This privacy notice was updated in December 2018. We reserve the right
          to amend it from time to time. Any future changes or additions to the
          processing of personal data as described in this notice affecting you
          can be viewed on the EMFI website at
          https://www.emfi.uk/english/privacy-policy.
        </p> */}
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
      termofuse: params?.lang === "espanol" ? termofUseES : termofUseEN,
    },
  };
}
export default termsofuse;
