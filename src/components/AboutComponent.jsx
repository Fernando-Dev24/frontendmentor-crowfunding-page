import React from 'react';
import styled from 'styled-components';
import CardComponent from './CardComponent';

const AboutComponent = ({stands, stats}) => {
   return (
      <AboutContainer className="section-border">
         <AboutInfoContainer>
            <h2>About this project</h2>
            <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>

            <p>Featuring artisan craftmanship, the simplicty of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>
         </AboutInfoContainer>

         <article>
            <CardComponent stands={stands} stats={stats}/>
         </article>
      </AboutContainer>
   );
}

const AboutContainer = styled.section`
   margin-bottom: 2.5rem;
   padding: 3.75rem 2.5rem;
   border-radius: 10px;
   background: #FFF;
`;

const AboutInfoContainer = styled.article`
   margin-bottom: 2.5rem;
   h2 {
      font-size: 1.5625rem;
      font-weight: 700;
      padding-bottom: 1.25rem;
   }

   p {
      margin: 1.25rem 0;
      line-height: 2rem;
      font-size: 1rem;
      font-weight: 500;
      color: rgba(0, 0, 0, .6);
   }
`;
 
export default AboutComponent;