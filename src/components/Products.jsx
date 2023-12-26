import React, { useState } from 'react'
import styled from 'styled-components';
import Product__Card from './Product__Card';

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  // background-color: red;
  margin: 20px;
`;

const BodyContainer = styled.div`
  width: 90%;
  // background-color: blue;
  height: 100%;
`;

const Maintitle = styled.div`
  color: black;
  font-family: var(--font-googleInterRegular);
  font-size: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const ProductButton = styled.button`
  background-color: #032746;
  color: white;
  font-family: var(--font-googleInterRegular);
  font-size: 12px;
  padding: 5px 8px 5px 8px;
  border-radius: 5px;
  text-align: center;
  border: 1px solid #032746;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
`;

// const productCards = [
//   {
//     cardType: "affiliate",
//     cardData: {
//       productName: "NameCard.io",
//       earned: 3.5,
//       claimed: 0,
//       eligibility: false,
//       claimable: 0,
//     },
//   },
// ];




export default function Products() {
  const [selectedOption, setSelectedOption] = useState("allOptions");

  const handleButtonClick = (option) => {
    setSelectedOption((prevOption) =>
      prevOption === option ? "allOptions" : option
    );
  };

  const productCards = [
    {
      cardType: "affiliate",
      cardData: {
        productName: "NameCard.io",
        earned: 3.5,
        claimed: 10,
      },
    },
    {
      cardType: "affiliate",
      cardData: {
        productName: "Second.io",
        earned: 6.5,
        claimed: 0,
      },
    },
    {
      cardType: "user",
      cardData: {
        productName: "NameCard.io",
        eligibility: false,
        claimable: 0,
      },
    },
    {
      cardType: "user",
      cardData: {
        productName: "Second.io",
        eligibility: true,
        claimable: 0.1,
      },
    },
    {
      cardType: "affiliate",
      cardData: {
        productName: "Second.io",
        earned: 6.5,
        claimed: 0,
      },
    },
    {
      cardType: "affiliate",
      cardData: {
        productName: "Second.io",
        earned: 6.5,
        claimed: 0,
      },
    },
    {
      cardType: "affiliate",
      cardData: {
        productName: "Second.io",
        earned: 6.5,
        claimed: 0,
      },
    },
    {
      cardType: "affiliate",
      cardData: {
        productName: "Second.io",
        earned: 6.5,
        claimed: 0,
      },
    },
  ];

  const affiliateProduct = productCards.filter((productData) => {
    return productData.cardType === "affiliate";
  });

  const userRewards = productCards.filter((productData) => {
    return productData.cardType === "user";
  });

  return (
    <MainContainer>
      <BodyContainer>
        <Maintitle>Products</Maintitle>
        <ButtonContainer>
          <ProductButton
            onClick={() => handleButtonClick("affiliate")}
            style={{
              backgroundColor:
                selectedOption === "affiliate" ? "#f2f2f2" : "#032746",
              color: selectedOption === "affiliate" ? "#032746" : "white",
            }}
          >
            Working for Affiliate
          </ProductButton>
          <ProductButton
            onClick={() => handleButtonClick("user")}
            style={{
              backgroundColor:
                selectedOption === "user" ? "#f2f2f2" : "#032746",
              color: selectedOption === "user" ? "#032746" : "white",
            }}
          >
            Made a Transaction
          </ProductButton>
        </ButtonContainer>
        <CardContainer>
          {(selectedOption === "allOptions" ||
            selectedOption === "affiliate") &&
            affiliateProduct.length > 0 &&
            affiliateProduct.map((productData, index) => {
              return (
                <Product__Card
                  key={index}
                  type={"affiliate"}
                  data={productData}
                ></Product__Card>
              );
            })}
          {/* {affiliateProduct.length > 0 &&
            affiliateProduct.map((productData) => {
              return (
                <Product__Card
                  type={"affiliate"}
                  data={productData}
                ></Product__Card>
              );
            })} */}
          {(selectedOption === "allOptions" || selectedOption === "user") &&
            userRewards.length > 0 &&
            userRewards.map((productData, index) => {
              return (
                <Product__Card
                  key={index}
                  type={"user"} data={productData}></Product__Card>
              );
            })}
          {/* {userRewards.length > 0 &&
            userRewards.map((productData) => {
              return (
                <Product__Card type={"user"} data={productData}></Product__Card>
              );
            })} */}
          {/* <Product__Card data={productCards}></Product__Card>
          <Product__Card data={productCards}></Product__Card> */}
        </CardContainer>
      </BodyContainer>
    </MainContainer>
  );
}
