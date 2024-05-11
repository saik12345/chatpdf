import { createContext, useContext, useState } from "react";
import UploadForm from "../ui/UploadForm";
import UploadList from "../ui/UploadList";
import { styled } from "styled-components";
import Chat from "../ui/Chat";
export const FileContext = createContext();

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 4fr;
  /* overflow: scroll; */
  height: 100vh;
`;

const StyledUploadAndChat = styled.div`
  /* padding: 1.2rem; */
  display: flex;
  flex-direction: column;
  /* border: 2px solid green; */
`;

function App() {
  const [fileName, setFileName] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedText, setSubmittedText] = useState("");
  return (
    <FileContext.Provider
      value={{
        fileName,
        setFileName,
        isSubmitting,
        setIsSubmitting,
        setSubmittedText,
        submittedText,
      }}
    >
      <StyledDiv>
        <UploadList />
        <StyledUploadAndChat>
          <UploadForm />
          {fileName && <Chat />}
        </StyledUploadAndChat>
      </StyledDiv>
    </FileContext.Provider>
  );
}

export default App;
