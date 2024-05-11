import { createContext, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FileContext } from "../src/App";
import styled from "styled-components";
import { convert } from "../helpers/pdfToText";

const StyledForm = styled.div`
  border: 1px solid black;
  padding: 1.2rem;
`;

function UploadForm() {
  const {
    fileName,
    setFileName,
    isSubmitting,
    setIsSubmitting,
    submittedText,
    setSubmittedText,
  } = useContext(FileContext);

  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  async function onSubmit(data) {
    // console.log(data.pdf);
    // console.log(data.pdf[0].name);
    setIsSubmitting((x) => !x);
    const responseText = await convert(data.pdf[0]);
    // console.log(typeof responseText);
    setSubmittedText((text) => responseText);
    setIsSubmitting((x) => !x);

    !isSubmitting && setFileName((fileName) => data.pdf[0].name);
    // console.log(fileName, fileName);
  }
  function onError(errors) {
    console.log(errors);
  }
  return (
    <StyledForm>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <span>Upload a file</span>
        <input
          id="pdf"
          type="file"
          accept="application/pdf"
          {...register("pdf", { required: "this field is required" })}
        />
        <p>{errors?.pdf?.message}</p>
        <button>Submit</button>
      </form>
    </StyledForm>
  );
}

export default UploadForm;
