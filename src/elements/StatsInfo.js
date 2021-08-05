import styled from "styled-components";

const StatTitle = styled.h2`
   font-size: 30px;
   font-weight: 700;
   padding-bottom: 10px;
   color: ${props => props.isCompleted ? '#FFF' : '#000'};
`;

const StatLabel = styled.p`
   font-size: 1rem;
   font-weight: 500;
   color: ${props => props.isCompleted ? '#FFF' : 'rgba(0, 0, 0, .5)'};
   text-align: ${props => props.isCompleted ? 'center' : 'left'};
   @media screen and (max-width: 48rem) {
      text-align: center;
   }
`;

export {StatTitle, StatLabel};