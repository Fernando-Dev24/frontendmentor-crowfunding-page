import React from 'react';
import styled from 'styled-components';
import {ReactComponent as checkIcon} from '../images/icon-check.svg';
import {Title, Paragraph} from '../elements/Title';
import {BackProject as Button} from '../elements/ActionsButtons';

const ModalCompleted = ({completed, setCompleted, setModal}) => {
   const handleClick = () => {
      setModal(false);
      setCompleted(false);
   };

   return (
      <>
         <ShadowContainer isShow={completed}>
            <ModalContainer>
               <ModalGridContainer>
                  <CheckIconStyled />

                  <ModalCompletedInfo>
                     <Title>Thank for your support!</Title>
                     <Paragraph pB>Your pledge brings us one step closer to sharing Mastercraft Bamboo Riser Monitor worldwide. You will get an email once our campaign is completed.</Paragraph>
                     <Button onClick={handleClick}>Got it!</Button>
                  </ModalCompletedInfo>
               </ModalGridContainer>
            </ModalContainer>
         </ShadowContainer>
      </>
   );
}

const ShadowContainer = styled.section`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 350%;
   padding: 6.25rem 0;
   display: ${props => props.isShow ? 'flex' : 'none'};
   justify-content: center;
   align-items: flex-start;
   background: rgba(0, 0, 0, 0.5);
   z-index: 100;
   @media screen and (max-width: 48rem) {
      height: 600%;
   }
`;

const ModalContainer = styled.section`
   width: 60%;
   padding: 2.5rem;
   border-radius: 10px;
   background: #FFF;
   @media screen and (max-width: 48rem) {
      width: 90%;
   }
`;

const ModalGridContainer = styled.article`
   display: grid;
   place-items: center;
`;

const CheckIconStyled = styled(checkIcon)`
   transform: scale(1.3, 1.3);
   @media screen and (max-width: 400px) {
      transform: scale(1.0, 1.0);
   }
`;

const ModalCompletedInfo = styled.div`
   margin-top: 3.125rem;
   text-align: center;
`;
 
export default ModalCompleted;