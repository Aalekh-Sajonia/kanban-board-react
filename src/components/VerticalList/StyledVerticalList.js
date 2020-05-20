import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 300px;
  background-color: #dddddd;
  border-radius: 3px;
  padding: 8px;
  margin-right: 8px;
  height: 100%;
`;

const StyledDiv1 = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InnerDiv2 = styled.div`
  margin: 19px;
`;

const StyledDivScroll = styled.div`
  max-height: 60vh;
  overflow: auto;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background: #dddddd;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #A9A9A9;
    border-radius: 20px;
    border: 4px solid #dddddd;
  }
`;

export {StyledDiv,StyledDivScroll,StyledDiv1,InnerDiv2};
