import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../theme';
import ModalSelect from '../components/ModalSelect';

const CardComponent = ({stands, stats}) => {
   const [showModal, setModal] = useState(false);

   const handleClick = () => {
      setModal(true);
      window.scroll(0, 0);
   }

   return (
      <>
         <>
            <CardContainer>
               <CardHeader>
                  <h2>Bamboo Stand</h2>
                  <h4>Pledge $25 or more</h4>
               </CardHeader>
               <CardBody>
                  <p>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to special Backer member list.</p>
                  <div>
                     <h2>{stands.bambooStands}<span>left</span></h2>
                     <SelectButton id="bambooOption" onClick={handleClick}>Select Reward</SelectButton>
                  </div>
               </CardBody>
            </CardContainer>

            <CardContainer>
               <CardHeader>
                  <h2>Black Edition Stand</h2>
                  <h4>Pledge $75 or more</h4>
               </CardHeader>
               <CardBody>
                  <p>You get a Black Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.</p>
                  <div>
                     <h2>{stands.blackEditionStands}<span>left</span></h2>
                     <SelectButton id="blackEditionOption" onClick={handleClick}>Select Reward</SelectButton>
                  </div>
               </CardBody>
            </CardContainer>

            <CardContainer isDisable>
               <CardHeader>
                  <h2>Mahogany Special Edition</h2>
                  <h4>Pledge $200 or more</h4>
               </CardHeader>
               <CardBody>
                  <p>You get two Special Edition Mahogany stands, a Backer T-shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.</p>
                  <div>
                     <h2>0<span>left</span></h2>
                     <SelectButton disabled>Out of stock</SelectButton>
                  </div>
               </CardBody>
            </CardContainer>
         </>
         <ModalSelect
            stands={stands}
            stats={stats}
            showModal={showModal}
            setModal={setModal}
         />
      </>
   );
}

const CardContainer = styled.article`
   margin-bottom: 2.5rem;
   padding: 40px;
   border: 1px solid rgba(0, 0, 0, .2);
   border-radius: 5px;
   opacity: ${props => props.isDisable ? '.5' : '1'};
   user-select: ${props => props.isDisable ? 'none' : 'auto'};
   cursor: ${props => props.isDisable ? 'not-allowed' : 'auto'};
`;

const CardHeader = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;

   h4 {
      font-weight: 700;
      color: ${theme.primaryCyan};
   }

   @media screen and (max-width: 25rem) {
      flex-direction: column;
      align-items: flex-start;

      h2 {font-size: 1rem; padding-bottom: 5px;}
      
      h4 {font-size: 1.2rem;}
   }
`;

const CardBody = styled.div`
   p {
      line-height: 1.6875rem;
      font-size: 1rem;
      font-weight: 500;
      color: rgba(0, 0, 0, .6);
      padding: 1.25rem 0;
   }

   div {
      display: flex;
      justify-content: space-between;
      align-items: center;
   
      h2 {
         display: flex;
         font-size: 2.5rem;
         span {
            font-size: 1rem;
            padding-left: 0.3125rem;
            color: rgba(0, 0, 0, .6);
            font-weight: 500;
         }
      }
   
      @media screen and (max-width: 25rem) {
         flex-direction: column;
         align-items: flex-start;

         h2 {
            align-items: center;
            span {font-size: 1.2rem;}
         }
      }
   }
`;

const SelectButton = styled.button`
   padding: 1.25rem 1.875rem;
   border-radius: 40px;
   font-family: 'Commissioner', sans-serif;
   font-weight: 500;
   color: #FFF;
   background: ${props => props.disabled ? 'rgba(0, 0, 0, 0.5)' : 'hsl(176, 50%, 47%)'};
   cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
   transition: background .3s ease;
   &:hover {
      background: ${props => !props.disabled && 'hsl(176, 72%, 28%)'};
   }

   @media screen and (max-width: 400px) {
      margin-top: 1.25rem;
      padding: 0.9375rem 2.5rem;
   }
`;
 
export default CardComponent;