import styled from "styled-components";

const StyledAnswer = styled.div`
  background-color: #7ae582;
  padding: 1.2rem;
`;
function Answers({ ans }) {
  return <StyledAnswer>{ans}</StyledAnswer>;
}

export default Answers;
