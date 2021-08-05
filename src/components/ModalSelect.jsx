import React, { useState } from 'react';
import styled from 'styled-components';
import {ReactComponent as CloseIcon} from '../images/icon-close-modal.svg';
import theme from '../theme';
import ModalCompleted from './ModalCompleted';
import db from '../firebase/firebaseConfig';

const ModalSelected = ({showModal, setModal, stats, stands }) => {
   /* Options States */
   const [option1, setOption1] = useState(false);
   const [option2, setOption2] = useState(false);
   const [option3, setOption3] = useState(false);

   /* InputFilled State */
   const [pledgeValue, setPledgeValue] = useState(0);

   /* Modal Completed State */
   const [completed, setCompleted] = useState(false);

   /* Handle State function 
      This function will validate which radio button is activated to make the donation and get the properly reward.
   */
   const handleState = (e) => {
      switch(e.target.id) {
         case 'noReward':
            setOption2(false);
            setOption3(false);
            setOption1(true);
            break;
         case 'bambooOption':
            setOption1(false);
            setOption3(false);
            setOption2(true);
            break;
         case 'blackEditionOption':
            setOption1(false);
            setOption2(false);
            setOption3(true);
            break;
         default:
            break;
      }
   };

   /* handleSubmit function 
      This function does two opertions. First one is to make the sum to get what will be the new stat for total money collected. Then this variable update the firestore database and the stat keep updated.

      If both actions are successed then modal component will apear on the scren.
   */
   const handleSubmit = (e) => {
      e.preventDefault();

      /* Changing value type from string to number */
      const numberPledge = parseInt(pledgeValue);

      /* Validating the number pledgeValue */
      if(numberPledge > 0 && numberPledge <= 200) {
         // Hacemos la suma de la cantidad ingresasa más la cantidad ya obtenida
         db.collection('stats').doc('HyHgbjpAUWOvWxhfcbih').update({
            moneyCollected: stats.moneyCollected + numberPledge,
            totalBackers: stats.totalBackers + 1
         })
         .then(() => {
            setPledgeValue(0);
            if(option2) {
               db.collection('stands').doc('xppPQNrxCEZROIiU8Jzn').update({
                  bambooStands: stands.bambooStands - 1
               })
            } else if(option3){
               db.collection('stands').doc('xppPQNrxCEZROIiU8Jzn').update({
                  blackEditionStands: stands.blackEditionStands - 1
               })
            }
            setCompleted(true);
         })
         .catch(error => console.log(error));
      }
   };

   return (
      <>
         {!completed ?
            <>
               <ShadowContainer isShow={showModal}>
                  <ModalContainer>
                     <ModalHeader>
                        <h2>Back this project</h2>
                        <p>Wanto to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
                        <ModalClose onClick={() => setModal(false)} />
                     </ModalHeader>

                     {/* No reward Pledge */}
                     <ModalOptionContainer option1={option1}>
                     <ModalOptionGrid>
                           <input
                              type="radio"
                              id="noReward"
                              name="option"
                              onClick={handleState}/>
                        <ModalOptionHeader>
                           <div className="modal-option-header">
                              <div>
                                 <h3>Pledge with no reward</h3>
                              </div>
                              <div></div>
                           </div>
                           <p className="modal-description">Choose to support without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.</p>
                        </ModalOptionHeader>
                     </ModalOptionGrid>

                     {option1 &&
                        <ModalPlegde>
                           <div>
                              <ModalLabel>Enter your pledge</ModalLabel><br />
                              <ModalLabel isStrong>Enter a price between $0 and $200</ModalLabel>
                           </div>
                           <form action="" autoComplete="off" onSubmit={handleSubmit}>
                              <input
                                 type="number"
                                 name="no-reward"
                                 placeholder="$1"
                                 min="1"
                                 max="200"
                                 value={pledgeValue}
                                 onChange={(e) => setPledgeValue(e.target.value.slice(0,3))}
                              />
                              <button type="submit">Continue</button>
                           </form>
                        </ModalPlegde>
                     }
                  </ModalOptionContainer>

                     {/* Bamboo Stand Option */}
                     <ModalOptionContainer option2={option2}>
                     <ModalOptionGrid>
                           <input
                              type="radio"
                              id="bambooOption"
                              name="option"
                              onClick={handleState} />
                        <ModalOptionHeader>
                           <div className="modal-option-header">
                              <div>
                                 <h3>Bamboo Stand</h3>
                                 <ModalLabel isStrong>Pledge $25 or more</ModalLabel>
                              </div>
                              <div>
                                 <h3>{stands.bambooStands}</h3>
                                 <ModalLabel>left</ModalLabel>
                              </div>
                           </div>
                           <p className="modal-description">You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to special Backer member list.</p>
                        </ModalOptionHeader>
                     </ModalOptionGrid>

                     {option2 &&
                        <ModalPlegde>
                           <div>
                              <ModalLabel>Enter your pledge</ModalLabel><br />
                              <ModalLabel isStrong>Enter a price between $25 and $200</ModalLabel>
                           </div>
                           <form action="" autoComplete="off" onSubmit={handleSubmit}>
                              <input
                                 type="number"
                                 name="bamboo-stand"
                                 placeholder="$1"
                                 min="25"
                                 max="200"
                                 value={pledgeValue}
                                 onChange={(e) => setPledgeValue(e.target.value.slice(0,3))}
                              />
                              <button type="submit">Continue</button>
                           </form>
                        </ModalPlegde>
                     }
                  </ModalOptionContainer>

                     {/* Black Edition Stand */}
                     <ModalOptionContainer option3={option3}>
                     <ModalOptionGrid>
                           <input
                              type="radio"
                              id="blackEditionOption"
                              name="option"
                              onClick={handleState} />
                        <ModalOptionHeader>
                           <div className="modal-option-header">
                              <div>
                                 <h3>Black Edition Stand</h3>
                                 <ModalLabel isStrong>Pledge $75 or more</ModalLabel>
                              </div>
                              <div>
                                 <h3>{stands.blackEditionStands}</h3>
                                 <ModalLabel>left</ModalLabel>
                              </div>
                           </div>
                           <p className="modal-description">You get a Black Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.</p>
                        </ModalOptionHeader>
                     </ModalOptionGrid>

                     {option3 &&
                        <ModalPlegde>
                           <div>
                              <ModalLabel>Enter your pledge</ModalLabel><br />
                              <ModalLabel isStrong>Enter a price between $75 and $200</ModalLabel>
                           </div>
                           <form action="" autoComplete="off" onSubmit={handleSubmit}>
                              <input
                                 type="number"
                                 name="black-edition"
                                 placeholder="$1"
                                 min="75"
                                 max="200"
                                 maxLength="3"
                                 value={pledgeValue}
                                 onChange={(e) => setPledgeValue(e.target.value.slice(0,3))}
                              />
                              <button type="submit">Continue</button>
                           </form>
                        </ModalPlegde>
                     }
                  </ModalOptionContainer>

                     {/* Mahogany Special Edition Disable */}
                     <ModalOptionContainer disable>
                     <ModalOptionGrid>
                           <input
                              type="radio"
                              id="4"
                              name="option"
                              disabled
                              onClick={handleState} />
                        <ModalOptionHeader>
                           <div className="modal-option-header">
                              <div>
                                 <h3>Mahogany Special Edition</h3>
                                 <ModalLabel isStrong>Pledge $200 or more</ModalLabel>
                              </div>
                              <div>
                                 <h3>0</h3>
                                 <ModalLabel>left</ModalLabel>
                              </div>
                           </div>
                           <p className="modal-description">You get two Special Editions Mahogany stands, a Backer T-shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.</p>
                        </ModalOptionHeader>
                     </ModalOptionGrid>
                  </ModalOptionContainer>
                  </ModalContainer>
               </ShadowContainer>
            </>
            :
            <>
               <ModalCompleted
                  completed={completed}
                  setCompleted={setCompleted}
                  setModal={setModal}
               />
            </>
         }
      </> 
   );
}

const ShadowContainer = styled.section`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 350%;
   padding: 3.75rem 0;
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
   width: 70%;
   padding: 2.5rem;
   border-radius: 10px;
   background: #FFF;
   @media screen and (max-width: 48rem) {
      width: 90%;
   }
`;

const ModalHeader = styled.header`
   position: relative;
   margin-bottom: 2.5rem;

   h2 {
      font-size: 1.875rem;
      font-weight: 700;
      padding-bottom: 0.625rem;
   }

   p {
      font-weight: 500;
      color: rgba(0, 0, 0, 0.6);
   }
`;

const ModalClose = styled(CloseIcon)`
   position: absolute;
   top: 0;
   right: 0;
   cursor: pointer;
   &:hover {
      path {opacity: 1;}
   }
`;

/* Options Styles */
const ModalOptionContainer = styled.article`
   margin: 1.875rem 0;
   padding: 1.875rem 1.25rem;
   border-radius: 10px;
   border: 2px solid rgba(0, 0, 0, .3);
   transition: border-color .3s ease;
   border-color: ${props => props.option1 && 'hsl(176, 50%, 47%)'};
   border-color: ${props => props.option2 && 'hsl(176, 50%, 47%)'};
   border-color: ${props => props.option3 && 'hsl(176, 50%, 47%)'};
   opacity: ${props => props.disable ? '.5': '1'};
   user-select: ${props => props.disable ? 'none' : 'auto'};
   cursor: ${props => props.disable ? 'not-allowed' : 'normal'};
`;

const ModalOptionGrid = styled.article`
   width: 100%;
   padding: 0 1.25rem;
   display: grid;
   grid-template-columns: 5% auto;
   place-items: start;
   input[type="radio"] {
      width: 1rem;
   }
   @media screen and (max-width: 48rem) {
      grid-template-columns: 1fr;
   }
`;

const ModalOptionHeader = styled.header`
   margin-bottom: 1.25rem;
   .modal-option-header {
      padding-top: 1.25rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      div {
         display: flex;
         align-items: center;
         padding-bottom: 1.25rem;
         h3 {
            font-weight: 700;
            padding-right: 0.625rem;
         }
      }
   }

   .modal-description {
      line-height: 1.6875rem;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.6);
   }

   @media screen and (max-width: 25rem) {
      .modal-option-header {
         flex-direction: column;
         justify-content: flex-start;
         align-items: flex-start;
         div {
            flex-direction: column;
            align-items: flex-start;
            h3 {font-size: 1.5rem;}
         }
      }
   }
`;

const ModalLabel = styled.span`
   color: ${props => props.isStrong ? '#3cb4ac' : 'rgba(0, 0, 0, .6)'};
   font-weight: ${props => props.isStrong ? '700' : '500'};
   @media screen and (max-width: 400px) {
      font-size: 1rem;
   }
`;

const ModalPlegde = styled.article`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 1.25rem;
   border-top: 1px solid rgba(0, 0, 0, .1);
   
   form {
      input {
         margin-right: 1.25rem;
         padding: 0.625rem;
         border: 2px solid rgba(0, 0, 0, .1);
         border-radius: 40px;
         outline: none;
         font-family: 'Commissioner', sans-serif;
         font-weight: 700;
         color: ${theme.neutralBlack};
         &:focus {
            border-color: hsl(176, 50%, 47%);
         }
      }

      button {
         padding: 1.25rem 2.5rem;
         font-family: 'Commissioner', sans-serif;
         font-weight: 700;
         border-radius: 40px;
         color: #FFF;
         background: ${theme.primaryCyan};
         cursor: pointer;
         transition: background .3s ease;
         &:hover {
            background: ${theme.darkCyan};
         }
      }
   }

   @media screen and (max-width: 400px) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      form {
         margin-top: 1.25rem;
         input {
            width: 100%;
            margin: 0 0 1.25rem 0;
            padding: 0.3125rem;
         }

         button {
            padding: 0.9375rem 1.5625rem;
         }
      }
   }
`;

export default ModalSelected;