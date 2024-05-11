import Question from "./Questions";
import Answers from "./Answers";
import { useState } from "react";
import AskBar from "./AskBar";
import styled from "styled-components";

const StyledDiv = styled.div`
  padding-top: 15px;
  overflow: scroll;
  border: 2px solid red;
  overflow: scroll;
`;

function Chat({ fileData }) {
  const [qA, setqA] = useState([]);

  return (
    <StyledDiv>
      {qA?.map?.((data, i) => (
        <div key={i}>
          <Question ques={data?.question} />
          <Answers ans={data?.answer} />
        </div>
      ))}
      <AskBar qA={qA} setqA={setqA} />
    </StyledDiv>
  );
}

export default Chat;
