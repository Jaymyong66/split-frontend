import React, { useState } from 'react'
import MiddleBar from '../components/MiddleBar';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const RegisterStepContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const RegisterStep = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25rem;
  height: 3rem;
  background: #032746;
  color: white;
  font-family: var(--font-googleInterRegular);
  font-size: 20px;
  border : 1.5px solid #032746;
  
  align-items: center;
`;

const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  // background: red;
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  `;

const RegisterForm = styled.form`
  width: 77rem;
  // background: blue;
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
gap: 2rem;

`;

const Step2Container = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  `;

const InputLabel = styled.label`
  color: white;
  font-family: var(--font-googleInterLight);
  font-size: 15px;
`;

const InputWindow = styled.input`
  width: 40rem;
  height: 2rem;
  border: 3px solid #032746;

  &::placeholder {
    color: #323232;
    font-family: Inter;
    font-size: 15px;
  }
`;

const SubmitButton = styled.button`
  display: flex;
  width: 15.625rem;
  height: 3.75rem;
  padding: 1rem 1.875rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
  border-radius: 0.3125rem;
  border: 1px solid var(--Blue-Split-Main-Blue---01, #fff);
  background: var(--Blue-Split-Main-Blue---12, #032746);
  color: white;
  font-family: Inter;
  font-size: 15px;
`;

const Step2GuideText = styled.div`
  width: 100%;
  border: 3px solid black;
  padding: 1rem;

  color: black;
  font-family: Inter;
  font-size: 15px;
`;

const Step3GuideContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  
  gap: 1rem;
`;

const Step3GuideText = styled.div`
  width: 100%;
  border: 3px solid black;
  padding: 1rem;

  color: black;
  font-family: Inter;
  font-size: 15px;
`;


export default function Register() {
  const [step, setStep] = useState(1)
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {

    // setStep((prevStep) => ((prevStep + 1) % 4) === 0 ? 1 : prevStep + 1);
    setStep((prevStep) => prevStep + 1);

    event.preventDefault(); // 기본 제출 동작 방지
  };

  const handleClick = () => {
    navigate("/earn");
  }

  return (
    <>
      <MiddleBar title={"Register Product"} />
      <RegisterStepContainer>
        <RegisterStep
          style={{
            backgroundColor: step === 1 ? "#032746" : "white",
            color: step === 1 ? "white" : "black",
          }}
        >
          Step 1. Submit Product Info
        </RegisterStep>
        <RegisterStep
          style={{
            backgroundColor: step === 2 ? "#032746" : "white",
            color: step === 2 ? "white" : "black",
          }}
        >
          Step 2. Make Incentive Pool
        </RegisterStep>
        <RegisterStep
          style={{
            backgroundColor: step === 3 ? "#032746" : "white",
            color: step === 3 ? "white" : "black",
          }}
        >
          Step 3. Get Key
        </RegisterStep>
      </RegisterStepContainer>
      <FormContainer>
        <RegisterForm onSubmit={handleFormSubmit}>
          {step === 1 && (
            <InputContainer>
              {/* <InputLabel htmlFor="product-name">Product Name</InputLabel> */}
              <InputWindow
                type="text"
                id="product-name"
                name="product-name"
                placeholder="Product Name"
              />
              <InputWindow
                type="text"
                id="web-link"
                name="web-link"
                placeholder="Web Link"
              />
              <InputWindow
                type="text"
                id="twitter-link"
                name="twitter-link"
                placeholder="Twitter Link"
              />
              <InputWindow
                type="text"
                id="description"
                name="description"
                placeholder="Description"
                style={{
                  height: "10rem",
                }}
              />
              <SubmitButton type="submit">Next Step</SubmitButton>
            </InputContainer>
          )}

          {step === 2 && (
            <Step2Container>
              <Step2GuideText>Pool Guide</Step2GuideText>
              <InputContainer>
                <InputWindow
                  type="text"
                  id="incentive-network"
                  name="incentive-network"
                  placeholder="Incentive Network"
                />
                <InputWindow
                  type="text"
                  id="incentive-tokenAddress"
                  name="incentive-tokenAddress"
                  placeholder="Incentive Token Address"
                />
                <InputWindow
                  type="text"
                  id="target-address"
                  name="target-address"
                  placeholder="Target Address"
                />
                <InputWindow
                  type="text"
                  id="tx-data"
                  name="tx-data"
                  placeholder="Transaction Data"
                  style={{
                    height: "10rem",
                  }}
                />
                <SubmitButton type="submit">Next Step</SubmitButton>
              </InputContainer>
            </Step2Container>
          )}
          {step === 3 && (
            <Step3GuideContainer>
              <Step3GuideText>SDK Key</Step3GuideText>
              <Step3GuideText
                style={{
                  height: "20rem",
                }}
              >
                SDK GUIDE
              </Step3GuideText>
              <SubmitButton type="button" onClick={handleClick}>Complete</SubmitButton>
            </Step3GuideContainer>
          )}
        </RegisterForm>
      </FormContainer>
    </>
  );
}
