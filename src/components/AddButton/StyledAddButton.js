import styled, { css } from 'styled-components'
import Textarea from 'react-textarea-autosize';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';

let StyledIcon = styled(Icon)`
  margin-left: 8px;
  cursor: pointer;
`;

let StyledCard = styled(Card)`
  overflow: visible;
  min-height: 80px;
  min-width: 272px;
  padding: 6px 8px 2px;
`;

let StyledDiv1 = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
`;

let StyledDiv = styled.div`

  opacity: 0.5;
  color: inherit;
  background-color: inherit;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 3px;
  height: 36px;
  width: 272px;
  padding-left: 10px;

  ${props => props.list && css`
    opacity: 1;
    color: white;
    background-color: rgba(0,0,0,.15);
  `}
`;

let StyledTextarea = styled(Textarea)`
  resize: none;
  width: 100%;
  outline: none;
  border: none;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
`;

export {StyledDiv,StyledTextarea,StyledCard,StyledIcon,StyledDiv1};
