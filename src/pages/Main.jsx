import React, { useEffect } from 'react'
import styled from "styled-components";
import useAddressStore from '../stores/store';
import useConnectWallet from '../hooks/useConnectWallet.tsx';

const BodyContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #032746;
  width: 100%;
  height: 100vh;
  z-index: -1;
`;

const LandingTextContainer = styled.div`
  position: absolute;
  left: 8%;
  top: 15%;
  width: 1000px;
  height: auto;
`;

const Maintitle = styled.div`
  position: absolute;
  color: white;
  font-family: Inter;
  font-size: 60px;
`;

const Subtitle = styled.div`
  position: absolute;
  top: 100px;
  color: white;
  font-family: Inter;
  font-size: 30px;
`;

const LandingButtonElseContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 8%;
  color: white;
  font-family: Inter;
  font-size: 60px;
`;

const LandingButton = styled.button`
  color: black;
  font-family: Inter;
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
  top: 30%;
  left: 45%;
  z-index: -2;

  @media (max-width: 900px) {
    display: none;
  }
`;

const LandingButtonGuide = styled.div`
  color: white;
  font-family: Inter;
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
  const { address, setAddress } = useAddressStore();
  const { loginState, walletState, connectWalletHandler } = useConnectWallet();

  useEffect(() => {
    setAddress(walletState);
    //console.log("addresss : " + address);
  }, [loginState, walletState]);

  const handleClick = () => {
    if (address === "") {
      connectWalletHandler();
    }
  };
  return (
    <>
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
          <LandingButton onClick={handleClick}>Get Started {"\b >"} </LandingButton>
          <SecondButton>Documantation {"\b >"} </SecondButton>
        </LandingButtonElseContainer>
        <LandingImage src="langingpage-image1.png" />
      </BodyContainer>
    </>
  );
}
