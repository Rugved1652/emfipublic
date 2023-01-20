import React, { useEffect } from "react";
import HeroSearch from "../../Components/HeroSearch/HeroSearch";
import TextAreaInputComponent from "../../Components/InputComponent/TextAreaComponent";
import TextInputComponent from "../../Components/InputComponent/TextInputComponent";
import SelectComponent from "../../Components/SelectComponent/SelectComponent";
import { fetchData, postData, postDataV1 } from "../../Services/apiFunction";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dynamic from "next/dynamic";
const TestDemo = dynamic(
  import("../../Components/AnimatedComponent/TestDemo.jsx"),
  {
    suspense: true,
  }
);

const notifySuccess = (message: string) =>
  toast(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

const Contact = ({ contactDetails }: any) => {
  const validationSchema = yup.object().shape({
    first_name: yup.string().required("First Name Required"),
    last_name: yup.string().required("Last Name Required"),
    organization: yup.string().required("Organization Name Required"),
    country: yup.string().required("Country Name Required"),
    phone: yup
      .number()
      .typeError("Valid Number Required")
      .required("Phone Number Required"),
    email: yup.string().email().required("Email Name Required"),
    business_unit: yup.string().required("Buisness Unit Required"),
    subject: yup.string().required("Subject Requiredd"),
    message: yup.string().required("Message Required"),
  });

  const handleSubmitFun = async (data: any) => {
    const formData: any = new FormData();
    formData.append("subject", data.subject);
    formData.append("first_name", data.first_name);
    formData.append("last_name", data.last_name);
    formData.append("organization", data.organization);
    formData.append("country", data.country);
    formData.append("phone", data.phone);
    formData.append("email", data.email);
    formData.append("business_unit", data.business_unit);
    formData.append("message", data.message);
    formData.append("file", data.file[0]);

    const res = await postDataV1(`/contact-form`, formData);
    notifySuccess(res?.data?.message);
    console.log("res", res);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ resolver: yupResolver(validationSchema) });
  console.log("errors", errors);

  useEffect(() => {
    const arrayOfError = Object.values(errors);
    console.log("arrayOfError", arrayOfError);
    if (Object.keys(errors).length !== 0) {
      arrayOfError.map((error: any) => notifySuccess(error.message));
    }
  }, [errors]);

  return (
    <div className="container">
      {/* <React.Suspense fallback={<></>}>
        <TestDemo />
      </React.Suspense> */}
      <ToastContainer />
      <HeroSearch
        heading={contactDetails?.data.contact?.contact_us}
        subHeading={contactDetails?.data.contact?.help_you}
        placeholder={null}
      />
      <form onSubmit={handleSubmit(handleSubmitFun)} className="contactMain">
        <div className="contactGroup">
          <TextInputComponent
            label={contactDetails?.data.contact?.first_name}
            register={register}
            inputRef="first_name"
          />
          <TextInputComponent
            label={contactDetails?.data.contact?.last_name}
            register={register}
            inputRef="last_name"
          />
        </div>
        <div className="contactGroup">
          <TextInputComponent
            label={contactDetails?.data.contact?.organization}
            register={register}
            inputRef="organization"
          />
          <TextInputComponent
            label={contactDetails?.data.contact?.country}
            register={register}
            inputRef="country"
          />
        </div>
        <div className="contactGroup">
          <TextInputComponent
            label={contactDetails?.data.contact?.phone}
            register={register}
            inputRef="phone"
          />
          <TextInputComponent
            label={contactDetails?.data.contact?.email}
            register={register}
            inputRef="email"
          />
        </div>
        <div className="contactGroup">
          <SelectComponent
            label={contactDetails?.data.contact?.business_unit}
            inputRef={"business_unit"}
            control={control}
            data={Object.keys(contactDetails?.data?.businessUnits).map(
              (key) => {
                return {
                  value: key,
                  label: contactDetails?.data?.businessUnits[key],
                };
              }
            )}
          />
          <SelectComponent
            inputRef={"subject"}
            control={control}
            label={contactDetails?.data.contact?.subject}
            data={Object.keys(contactDetails?.data?.subjects).map((key) => {
              return {
                value: key,
                label: contactDetails?.data?.subjects[key],
              };
            })}
          />
        </div>
        <div className="contactGroup textareaGroup">
          <TextAreaInputComponent
            inputRef="message"
            label={contactDetails?.data.contact?.message}
            register={register}
          />
        </div>
        <div className="contactGroup fileGroup">
          <div className="file-input">
            <input type="file" {...register("file")} name="file" id="" />
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
          <button type="submit" className="submitButton">
            {contactDetails?.data.contact?.send}
          </button>
        </div>
      </form>
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
