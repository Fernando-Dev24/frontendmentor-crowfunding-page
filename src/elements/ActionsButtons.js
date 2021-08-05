import styled from "styled-components";
import theme from "../theme";

const BackProject = styled.button`
   padding: 1.25rem 2.5rem;
   border-radius: 2.5rem;
   color: #fff;
   font-family: 'Commissioner', sans-serif;
   font-weight: 700;
   background: ${theme.primaryCyan};
   cursor: pointer;
   transition: .3s background ease;
   &:hover {
      background: ${theme.darkCyan};
   }
   @media screen and (max-width: 400px) {
      padding: 1.25rem;
   }
`;

const BookmarkButton = styled.button`
   width: min-content;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 40px;
   background: rgba(0, 0, 0, 0.1);
   outline: none;
   cursor: pointer;
   transition: .3s all ease;
`;

const BookmarkLabel = styled.span`
   margin: 0 2.5rem 0 1.25rem;
   font-family: 'Commissioner', sans-serif;
   font-size: 1rem;
   font-weight: 700;
   text-align: center;
   color: ${props => props.bookmarked ? `${theme.darkCyan}` : '#00000066'};
   @media screen and (max-width: 400px) {
      display: none;
   }
`;

export {BackProject, BookmarkButton, BookmarkLabel};