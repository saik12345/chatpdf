import { useContext, useState } from "react";
import styled from "styled-components";
import { getData } from "../helpers/chatgpt";
import { FileContext } from "../src/App";

const StyledTextArea = styled.textarea`
  min-width: 80%;
  max-width: 80%;
  padding: 1.2rem;
  font-size: 16px;
  margin-left: 1.1rem;
  margin-top: 10px;
  overflow: scroll;
  /* border-radius: 1.2rem; */
`;

const Button = styled.button`
  font-size: 1.2rem;

  display: block;
  margin-left: 1.1rem;
`;

// AIzaSyDG0es8RyWtEe8bSEM9yUHpOXreqy4Qu_w
function AskBar({ qA, setqA }) {
  const { submittedText } = useContext(FileContext);

  const [text, setText] = useState("");
  async function handleClick(text) {
    setText((text) => "");
    const response = await getData(submittedText, text);
    // console.log(typeof qA);
    setqA((qA) => [
      ...qA,
      {
        question: `${text}`,
        answer: `${response}`,
      },
    ]);
  }
  return (
    <div>
      {/* <span>Question : </span> */}
      {/* <input type="text" /> */}
      <StyledTextArea
        placeholder="Type here ..."
        onChange={(e) => setText((x) => e.target.value)}
      />

      <Button disabled={text ? false : true} onClick={() => handleClick(text)}>
        send
      </Button>
    </div>
  );
}

export default AskBar;
