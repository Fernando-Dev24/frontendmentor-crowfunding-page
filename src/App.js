import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import WebFont from 'webfontloader';
import Header from './components/Header';
import EnterpriseHeader from './components/EnterpriseHeader';
import StatsComponent from './components/StatsComponent';
import AboutComponent from './components/AboutComponent';
import favicon from './images/favicon-32x32.png';
import { Helmet } from 'react-helmet';
import db from './firebase/firebaseConfig';

function App() {
  const [stats, setStats] = useState([]);
  const [stands, setStands] = useState([]);

  useEffect(() => {
    db.collection('stats').onSnapshot(snapshot => {
      snapshot.docs.map(doc => {
        return setStats(doc.data())
      })
    })

    db.collection('stands').onSnapshot(snapshot => {
      snapshot.docs.map(doc => {
        return setStands(doc.data());
      })
    })
  }, [])

  WebFont.load({
    google: {
      families: ['Commissioner']
    }
  });

  return (
    <>
      <Helmet>
        <meta lang="en"/>
        <title>Crowfunding App</title>
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Helmet>

      <Header />
      <MainContainer>
        <EnterpriseHeader stats={stats} stands={stands}/>
        <StatsComponent stats={stats} />
        <AboutComponent stands={stands} stats={stats}/>
      </MainContainer>
    </>
  );
}

const MainContainer = styled.main`
  width: 70%;
  margin: 0 auto;

  @media screen and (max-width: 48rem) {
    width: 90%;
  }
`;

export default App;