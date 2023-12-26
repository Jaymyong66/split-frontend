import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
  width: 635px;
  height: 85%;
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const Maintitle = styled.div`
  position: absolute;
  color: black;
  font-family: var(--font-googleInterRegular);
  font-size: 20px;
`;

const BodyContainer = styled.div`
  position: relative;
  top: 30px;
  background: #f2f2f2;
  width: 100%;
  height: 90%;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  color: #323232;

  font-family: var(--font-googleInterRegular);
  font-size: 14px;
`;

const NumberContnent = styled.span`
  color: #000000;
  font-family: var(--font-googleInterRegular);
  font-size: 20px;
`;


export default function TotalActivity__month(props) {
  const [
    earned,
    claimed,
    productNum,
    walletConnectNum,
    transactionNum,
    conversion,
  ] = Object.values(props.myValue);
  const { title } = props;


  const formatValue = (value) => (value === 0 ? "-" : value);


  return (
    <MainContainer>
      <Maintitle>{title}</Maintitle>
      <BodyContainer>
        <ContentContainer>
          <span>Total Earned {"(in USDC)"} </span>
          <NumberContnent>{formatValue(earned)} </NumberContnent>
        </ContentContainer>
        <ContentContainer>
          <span>Total Claimed {"(in USDC)"} </span>
          <NumberContnent>{formatValue(claimed)} </NumberContnent>
        </ContentContainer>
        <ContentContainer>
          <span>Total Products </span>
          <NumberContnent>{formatValue(productNum)} </NumberContnent>
        </ContentContainer>
        <ContentContainer>
          <span>Total Wallet Connect </span>
          <NumberContnent>{formatValue(walletConnectNum)} </NumberContnent>
        </ContentContainer>
        <ContentContainer>
          <span>Total Transaction </span>
          <NumberContnent>{formatValue(transactionNum)} </NumberContnent>
        </ContentContainer>
        <ContentContainer>
          <span>Conversion </span>
          <NumberContnent>{formatValue(conversion)} </NumberContnent>
        </ContentContainer>
      </BodyContainer>
    </MainContainer>
  );
}
