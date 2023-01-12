import React from "react";
import HeroSearch from "../../Components/HeroSearch/HeroSearch";
import TextAreaInputComponent from "../../Components/InputComponent/TextAreaComponent";
import TextInputComponent from "../../Components/InputComponent/TextInputComponent";
import SelectComponent from "../../Components/SelectComponent/SelectComponent";
import { fetchData } from "../../Services/apiFunction";

const Contact = ({ contactDetails }: any) => {
  console.log(contactDetails?.data.contact?.organization);

  return (
    <div className="container">
      <HeroSearch
        heading="Contact Us"
        subHeading="How Can We Help You"
        placeholder={""}
      />
      <div className="contactMain">
        <div className="contactGroup">
          <TextInputComponent
            label={contactDetails?.data.contact?.first_name}
          />
          <TextInputComponent label={contactDetails?.data.contact?.last_name} />
        </div>
        <div className="contactGroup">
          <TextInputComponent
            label={contactDetails?.data.contact?.organization}
          />
          <TextInputComponent label={contactDetails?.data.contact?.country} />
        </div>
        <div className="contactGroup">
          <TextInputComponent label={contactDetails?.data.contact?.phone} />
          <TextInputComponent label={contactDetails?.data.contact?.email} />
        </div>
        <div className="contactGroup">
          <SelectComponent label="buisness" />
          <SelectComponent label="sub" />
        </div>
        <div className="contactGroup textareaGroup">
          <TextAreaInputComponent
            label={contactDetails?.data.contact?.message}
          />
        </div>
        <div className="contactGroup fileGroup">
          <div className="file-input">
            <input type="file" name="" id="" />
            <span className="button">
              Choose File
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-upload"
                viewBox="0 0 16 16"
              >
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path>
                <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"></path>
              </svg>
            </span>
            <span className="label" data-js-label>
              No file selected
            </span>
          </div>
          <button className="submitButton">Send</button>
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
export async function getStaticProps(context: any) {
  const contactDetails = await fetchData(`contact/${context.params.lang}`);
  return {
    props: {
      contactDetails: contactDetails,
    },
  };
}

export default Contact;
