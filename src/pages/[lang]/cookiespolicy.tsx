import React from "react";
import HeroSearch from "../../Components/HeroSearch/HeroSearch";
type Props = {};

const cookiespolicy = (props: Props) => {
  return (
    <div className="container">
      <HeroSearch
        heading="Legal"
        subHeading="EMFI Group"
        placeholder="Cookies Policy"
      />
      <div className="legalGroup">
        <div>
          <p>
            We use cookies to provide you with a safe, effective and user-friendly
            website. Please visit our Privacy Policy if you want to learn more
            about our privacy and cookies policy. If you do not agree to this
            Statement, do not proceed to further web pages of the EMFI Website.
          </p>
        </div>
        <div className="checkGroup">
          <div className="checkGroupbox">
            <input type="checkbox" name="" id="one" />
            <span className="chk-check"></span>
          </div>
          <label htmlFor="one" className="chk-check">PERFORMANCE & TRACKING COOKIES</label>
        </div>
        <p> We use performance & tracking cookies to further improve our website in
          order to always provide you with the best possible online experience
          tailored to your needs. We never store any personal data which might
          identify you personally (such as your IP address) or as a client of
          EMFI.</p>
        <div className="checkGroup">
          <div className="checkGroupbox">
            <input type="checkbox" name="" id="two" />
            <span className="chk-check"></span>
          </div>
          <label htmlFor="two" className="chk-check">USER PREFERENCE COOKIES</label>
        </div>
        <p> User preference cookies are used to facilitate your access to emfi.uk.
          We use them to show you the correct EMFI homepage and language for your
          country and to remember these settings when you visit emfi.uk the next
          time.</p>
        <div className="checkGroup">
          <div className="checkGroupbox">
            <input type="checkbox" name="" id="three" />
            <span className="chk-check"></span>
          </div>
          <label htmlFor="three" className="chk-check">TECHNICAL COOKIES</label>
        </div>
        <p>Technical cookies are strictly necessary for emfi.uk to work properly.
          We use them to remember your entries in a form or to provide you access
          to login restricted areas of the website. Technical cookies cannot be
          deactivated.</p>
        <button>Save</button>
      </div>
    </div>
  );
};

export default cookiespolicy;
