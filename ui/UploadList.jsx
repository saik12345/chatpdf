import { useContext } from "react";
import { FileContext } from "../src/App";
import styled from "styled-components";

const StyledList = styled.div`
  /* background-color: blue; */
  height: 100vh;
  border-right: 4px solid black;
  padding: 1.5rem;
`;
const StyledLi = styled.span`
  background-color: black;
  color: white;
  padding: 1.2rem 1.5rem;
  border-radius: 1.7rem;
`;
function UploadList() {
  const { fileName } = useContext(FileContext);
  return (
    <StyledList>
      {fileName ? <StyledLi>{fileName}</StyledLi> : <p>No file Uploaded</p>}
    </StyledList>
  );
}

export default UploadList;
