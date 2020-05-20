import Textarea from 'react-textarea-autosize';
import styled from "styled-components";

const StyledCard = styled.div`
  margin-bottom: 8px;
  box-shadow: 2px 3px 5px #A9A9A9;
  border-radius: 10px;
`;

let StyledTextarea = styled(Textarea)`
  resize: none;
  width: 100%;
  outline: none;
  border: none;
  font-size: 1rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.5;
`;

export {StyledCard,StyledTextarea};
