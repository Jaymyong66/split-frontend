import React from 'react'
import Header from '../components/Header'
import styled from "styled-components";

const BodyContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #032746;
  width: 100%;
  height: 100vh;
  
`;

const MainContainer = styled.div`
  position: relative;
`;

const LandingTextContainer = styled.div`
  position: absolute;
  left: 8%;
  top: 15%;
  width: 100%;
  height: 100%;
`;

const Maintitle = styled.div`
  position: absolute;
  color: white;
  font-family: var(--font-googleInterRegular);
  font-size: 60px;
`;

const Subtitle = styled.div`
  position: absolute;
  top:13%;
  color: white;
  font-family: var(--font-googleInterRegular);
  font-size: 30px;
`;

const LandingButtonElseContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 8%;
  color: white;
  font-family: var(--font-googleInterRegular);
  font-size: 60px;
`;

const LandingButton = styled.button`
  color: black;
  font-family: var(--font-googleInterRegular);
  font-size: 20px;
  background: white;
  padding: 20px 50px;
  border-radius: 10px;
  text-align: center;
  margin-right: 50px;
`;

const SecondButton = styled(LandingButton)`
  background: #032746;
  color: white;
  border: 2px solid white;
`;

const LandingImage = styled.img`
  position: absolute;
  width: 600px;
  top : 30%;  
  left : 45%;
`;

const LandingButtonGuide = styled.div`
  color: white;
  font-family: var(--font-googleInterRegular);
  font-size: 15px;
  position: absolute;
  left: 8%;
  top: 47%;
`;

const BoldSpan = styled.span`
  font-weight: bold;
  font-size: 17px;
  
`;


export default function Main() {
  return (
    <MainContainer>
      <Header />
      <BodyContainer>
        <LandingTextContainer>
          <Maintitle>The First Web3 Affiliate Marketing</Maintitle>
          <Subtitle>Generate Link, Share to Others, and Earn Tokens</Subtitle>
        </LandingTextContainer>
        <LandingButtonGuide>
          To reach services Split has to offer, you'll need to{" "}
          <BoldSpan>Connect Wallet</BoldSpan>.
        </LandingButtonGuide>
        <LandingButtonElseContainer>
          <LandingButton>Get Started {"\b >"} </LandingButton>
          <SecondButton>Documantation {"\b >"} </SecondButton>
        </LandingButtonElseContainer>
        <LandingImage src="langingpage-image1.png" />
      </BodyContainer>
    </MainContainer>
  );
}
