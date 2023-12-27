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
  width: 80%;
  // background-color: blue;
  height: 100%;
`;

const Maintitle = styled.div`
  color: black;
  font-family: Inter;
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
  font-family: Inter;
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

export default function Products({ products }) {
  const [selectedOption, setSelectedOption] = useState("allOptions");

  const handleButtonClick = (option) => {
    setSelectedOption((prevOption) =>
      prevOption === option ? "allOptions" : option
    );
  };

  var affiliateProduct = products?.filter((productData) => {
    return productData.cardType === "affiliate";
  });

  var userRewards = products?.filter((productData) => {
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
  {(selectedOption === "allOptions" || selectedOption === "affiliate") &&
    (affiliateProduct || []).length > 0 &&
    affiliateProduct.map((productData, index) => {
      return (
        <Product__Card
          key={index}
          type={"affiliate"}
          data={productData}
        ></Product__Card>
      );
    })}
  {(selectedOption === "allOptions" || selectedOption === "user") &&
    (userRewards || []).length > 0 &&
    userRewards.map((productData, index) => {
      return (
        <Product__Card
          key={index}
          type={"user"}
          data={productData}
        ></Product__Card>
      );
    })}
</CardContainer>
      </BodyContainer>
    </MainContainer>
  );
}
