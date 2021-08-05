import React, { useState } from 'react';
import styled from 'styled-components';
import DesktopBackground from '../images/image-hero-desktop.jpg';
import MobileBackground from '../images/image-hero-mobile.jpg';
import {ReactComponent as Logo} from '../images/logo.svg'
import {ReactComponent as BurgerIcon} from '../images/icon-hamburger.svg';
import {ReactComponent as CloseIcon} from '../images/icon-close-menu.svg';
import { Button, MobileNavContainer } from '../elements/Button';

const Header = () => {
   const isMobile = window.innerWidth;
   const [showNavbar, hideNavbar] = useState(false);

   return (
      <HeaderComponent>
         <HeaderContainer className="container">
            <Logo />
            <nav>
               {isMobile <= 768 ?
                  <>
                     <span onClick={() => hideNavbar(!showNavbar)}>
                        {showNavbar ? <CloseIcon/> : <BurgerIcon />}
                     </span>
                     {showNavbar &&
                        <>
                           <MobileNavContainer>
                              <Button border >About</Button>
                              <Button border >Discover</Button>
                              <Button>Get Started</Button>
                           </MobileNavContainer>
                        </>
                     }
                  </>
                  :
                  <>
                     <Button>About</Button>
                     <Button>Discover</Button>
                     <Button>Get Started</Button>
                  </>
               }
            </nav>
         </HeaderContainer>
      </HeaderComponent>
   );
}

const HeaderComponent = styled.header`
   width: 100%;
   background: url('${DesktopBackground}') bottom no-repeat;
   background-size: cover;
   height: 60vh;

   @media screen and (max-width: 48rem) {
      background: url('${MobileBackground}') bottom no-repeat;
      background-size: cover;
      &::before {
         content: "";
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: 60vh;
         background: #000;
         background: linear-gradient(180deg, rgba(0,0,0,0.5) 50%, transparent 100%);
      }
   }
`;

const HeaderContainer = styled.section`
   position: relative;
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 2.5rem 0;
`;

export default Header;