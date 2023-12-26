import React from 'react'
import Header from '../components/Header'
import styled from "styled-components";

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #032746;
  width: 100%;
  height: 100vh;
  color: white;
  font-family: var(--font-googleInterRegular);
  font-size: 60px ;
`;

const MainContainer = styled.div`
  width: 100%;
`;

const Maintitle = styled.h1`

`;


export default function Main() {
  return (
    <MainContainer>
      <Header />
      <BodyContainer>
        <Maintitle></Maintitle>
        <h1>The First Web3 Affiliate Marketing</h1>
        
      </BodyContainer>
    </MainContainer>
  );
}
