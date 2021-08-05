import React, { useState } from 'react';
import styled from 'styled-components';
import {ReactComponent as LogoEnterprise} from '../images/logo-mastercraft.svg';
import {ReactComponent as Bookmark} from '../images/icon-bookmark.svg';
import {Title, Paragraph} from '../elements/Title';
import {BackProject, BookmarkButton, BookmarkLabel} from '../elements/ActionsButtons';
import ModalSelected from './ModalSelect';

const EnterpriseHeader = ({stats, stands}) => {
   const [bookmarked, setBookmarked] = useState(false);
   const [showModal, setModal] = useState(false);

   return (
      <>
         <EnterpriseHeaderContainer className="section-border">
            <Logo />
            <EnterpriseIntro>
               <Title>Mastercraft Bamboo Monitor Riser</Title>
               <Paragraph>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</Paragraph>
            </EnterpriseIntro>

            <EnterpriseActions>
               <BackProject
                  onClick={() => setModal(!showModal)}
               >Back this project</BackProject>
               <BookmarkButton onClick={() => setBookmarked(!bookmarked)}>
                  {bookmarked === true ? 
                     <>
                        <BookmarkIcon bookmarked="true"/>
                        <BookmarkLabel bookmarked="true">Bookmarked</BookmarkLabel>
                     </>
                     :
                     <>
                        <BookmarkIcon />
                        <BookmarkLabel>Bookmark</BookmarkLabel>
                     </>
                  }
               </BookmarkButton>
            </EnterpriseActions>
         </EnterpriseHeaderContainer>
         <ModalSelected
            showModal={showModal}
            setModal={setModal}
            stats={stats}
            stands={stands}
         />
      </>
     
   );
}

const EnterpriseHeaderContainer = styled.section`
   position: relative;
   top: -15vh;
   width: 100%;
   padding: 2.5rem;
   border-radius: 10px;
   background: #FFF;
`;

const Logo = styled(LogoEnterprise)`
   position: absolute;
   top: -2rem;
   left: 50%;
   transform: translateX(-50%);
`;

const BookmarkIcon = styled(Bookmark)`
   circle {fill: ${props => props.bookmarked ? 'hsl(176, 72%, 28%)' : '#2F2F2F'};}
   path {fill: ${props => props.bookmarked ? '#FFF' : '#B1B1B1'};}
`;

const EnterpriseIntro = styled.article`
   margin: 1.25rem 0 2.5rem;
   text-align: center;
`;

const EnterpriseActions = styled.article`
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
`;
 
export default EnterpriseHeader;