import styled from "styled-components";

const StyledQuestion = styled.div`
  background-color: black;
  color: white;
  padding: 1.2rem;
`;

function Questions({ ques }) {
  return <StyledQuestion>{ques}</StyledQuestion>;
}

export default Questions;
