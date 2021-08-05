import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { StatTitle, StatLabel } from '../elements/StatsInfo';
import theme from '../theme';
import db from '../firebase/firebaseConfig';

const StatsComponent = ({stats}) => {
   const [isRunning, changeRunning] = useState(true);
   const [isReach, setReach] = useState(false);

   const handleLoad = () => {
      if(stats.moneyCollected >= 100000) {
         setReach(true);
         console.log(isReach);
      }
   };

   useEffect(() => {
      if(isRunning) {
         setTimeout(() => {
            const date = new Date();
            if(stats.daysLeft === 0) {
               db.collection('stats').doc('HyHgbjpAUWOvWxhfcbih').update({
                  daysLeft: 56
               })
            } else {
               if(date.getHours() === 24) {
                  db.collection('stats').doc('HyHgbjpAUWOvWxhfcbih').update({
                     daysLeft: stats.daysLeft - 1
                  }).then(() => changeRunning(false));
               }
            }
         }, 2000);
      }
   }, []);

   setTimeout(handleLoad, 300);

   return (
      <StatsComponentContainer className="section-border" isCompleted={isReach} isDisplay={true}>
         {isReach ?
            <ReachContainer>
               <StatTitle isCompleted>We've hit the goal!</StatTitle>
               <StatLabel isCompleted>Thank you all for you support on our project. Nowadays the support on Mastercraft Bamboo Monitor Riser are the following:</StatLabel>
            </ReachContainer>
            :
            <>
               <StatsContainer>
                  <StatArticle hasBorder>
                     <StatTitle>${stats.moneyCollected}</StatTitle>
                     <StatLabel>of $100,000 backed</StatLabel>
                  </StatArticle>

                  <StatArticle hasBorder>
                     <StatTitle>{stats.totalBackers}</StatTitle>
                     <StatLabel>total backers</StatLabel>
                  </StatArticle>

                  <StatArticle>
                     <StatTitle>{stats.daysLeft}</StatTitle>
                     <StatLabel>days left</StatLabel>
                  </StatArticle>
               </StatsContainer>
               <StatsProgress isDisplay />
            </>
         }
         
      </StatsComponentContainer>
   );
}

const StatsComponentContainer = styled.section` 
   display: ${props => !props.isDisplay ? 'none' : 'block'};
   margin: -3.75rem 0 2.5rem 0;
   padding: 2.5rem;
   border-radius: 10px;
   background: ${props => props.isCompleted ? '#147b74' : '#FFF'};
`;

const StatsContainer = styled.section`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 1.25rem;
   margin-bottom: 3.125rem;
   @media screen and (max-width: 25rem) {
      grid-template-columns: repeat(1, 1fr);
      place-items: center;
   }
`;

const ReachContainer = styled.article`
   display: grid;
   place-items: center;
`;

const StatArticle = styled.article`
   width: 80%;
   border-right: ${props => props.hasBorder ? '1px solid #ccc' : 'none'};
   @media screen and (max-width: 25rem) {
      text-align: center;
      border-right: none;
      border-bottom: ${props => props.hasBorder ? '1px solid #ccc' : 'none'};
      padding-bottom: 1.25rem;
   }
`;

const StatsProgress = styled.section`
   display: ${props => props.isDisplay ? 'block' : 'none'};
   position: relative;
   width: 100%;
   height: 2vh;
   border-radius: 40px;
   background: rgba(0, 0, 0, .1);
   &::after {
      content: "";
      position: absolute;
      width: 89.914%;
      height: 2vh;
      border-radius: 40px;
      background: ${theme.primaryCyan};
   }
`;

export default StatsComponent;