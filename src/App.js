import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import Cage from './components/Cage';

function App() {
  // firebase.auth().createUserWithEmailAndPassword('it18060904@gmail.com','1234567');

 

 

  return (
    <div>
      <Header>
        <h2>Smart Cage</h2>
      </Header>
      <Cage />
    </div>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 15px;
  background: #000;

  h2 {
    font-weight: 400;
    color: yellow;
    font-size: 1.5rem;
  }

  li {
    list-style: none;
    display: inline-block;
    color: #ccc;
  }
`;
export default App;
