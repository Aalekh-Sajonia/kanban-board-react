import Textarea from 'react-textarea-autosize';
import styled from "styled-components";

const StyledCard = styled.div`
  margin-bottom: 8px;
`;

let StyledTextarea = styled(Textarea)`
  resize: none;
  width: 100%;
  outline: none;
  border: none;
`;

export {StyledCard,StyledTextarea};
