import styled from "styled-components";

const MobileNavContainer = styled.div`
   position: absolute;
   left: 0;
   width: 100%;
   margin-top: 1.25rem;
   padding: 1.25rem;
   border: 1.5px solid rgba(0, 0, 0, 0.5);
   border-radius: 0.625rem;
   background: #fff;
   z-index: 10;
`;

const Button = styled.button`
   border: none;
   font-size: 16px;
   color: #FFF;
   background: transparent;
   padding: 0.313rem 0.625rem;
   font-family: 'Commissioner', sans-serif;
   font-weight: 500;
   cursor: pointer;

   @media screen and (max-width: 48rem) {
      width: 100%;
      text-align: left;
      display: block;
      padding: 1.25rem 0;
      border-bottom: ${props => props.border ? '1px solid hsl(0, 0%, 80%)' : 'none'};
      color: #000;
   }
`;

export { Button, MobileNavContainer };