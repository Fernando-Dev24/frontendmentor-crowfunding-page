import styled from "styled-components";
import theme from '../theme';

const Title = styled.h1`
   font-size: 1.875rem;
   font-weight: 700;
   margin-bottom: 1.25rem;
   color: ${theme.neutralBlack};
`;

const Paragraph = styled.p`
   padding-bottom: ${props => props.pB && '1.875rem'};/* pb = paddingBottom */
   font-size: 1rem;
   font-weight: 500;
   color: rgba(0, 0, 0, .5);
`;

export {Title, Paragraph};