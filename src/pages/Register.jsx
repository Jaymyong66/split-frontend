import React, { useState } from 'react'
import MiddleBar from '../components/MiddleBar';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const RegisterStepContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 3rem;
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
  /* background: blue; */
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
  font-size: 20px;
`;

const Step3GuideContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
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

const GuideText = styled.div`
  text-align: left;
  font-size: 25px;
  font-weight: 700;
  margin-top: 20px;
`;

const RowContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;


export default function Register() {
  const [step, setStep] = useState(1);
  const [sdkKey, setSdkKey] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [productInfo, setProductInfo] = useState({
    name: '',
    webLink: '',
    twitterLink: '',
    description: '',
  });
  const [transactions, setTransactions] = useState([
    {
      txNetwork: '',
      targetAddress: '',
      txData: '',
      incentiveNetwork: '',
      incentiveTokenAddress: '',
      incentiveTokenAmountPerTx: '',
    },
  ]);

  // const handleFormSubmit = (event) => {

  //   // setStep((prevStep) => ((prevStep + 1) % 4) === 0 ? 1 : prevStep + 1);
  //   setStep((prevStep) => prevStep + 1);

  //   event.preventDefault();
  // };

  const handleInputChange = (field, value, index = 0) => {
    if (field === 'transactions') {
      const updatedTransactions = [...transactions];
      updatedTransactions[index] = { ...updatedTransactions[index], [value.field]: value.value };
      setTransactions(updatedTransactions);
    } else {
      setProductInfo({ ...productInfo, [field]: value });
    }
  };

  const handleClickBefore = () => {
    setStep((prevStep) => prevStep - 1);
  }

  const handleClickNext = () => {
    setStep((prevStep) => prevStep + 1);
  }

  const handleClickGetKey = async () => {
    setLoading(true);
    setStep((prevStep) => prevStep + 1);
    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZGRyZXNzIjoiMHgzY2EyMWM4MzY0YTZiMTMyZTMwNTA4Y2UwMzA2NDlhOTg4M2Q0ZDhkIiwiaWF0IjoxNzAzNjU2MzkwLCJleHAiOjE4MDM2NTYzOTB9.B1Ft3josNxtNmzygE8KrMHFILoL5dJQ7VcI1nbCyfrk";

    const productData = {
      name: productInfo.name,
      webLink: productInfo.webLink,
      twitterLink: productInfo.twitterLink,
      description: productInfo.description,
      transactions: transactions.map((transaction) => ({
        txNetwork: transaction.txNetwork,
        targetAddress: transaction.targetAddress,
        txData: transaction.txData,
        incentiveNetwork: transaction.incentiveNetwork,
        incentiveTokenAddress: transaction.incentiveTokenAddress,
        incentiveTokenAmountPerTx: transaction.incentiveTokenAmountPerTx,
      })),
    };

    console.log(productData);

    try {
      const productRes = await axios.post('http://localhost:8000/product', productData, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        }
      });


      try {
        const deployRes = await axios.post(`http://localhost:8000/product/deploy?id=${productRes.data.id}`, null, {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          }
        });
        setSdkKey(deployRes.data.apiKey);

      } catch (error) {
        console.error('Error deploying product:', error);
      } finally {
        setLoading(false);
      }

    } catch (error) {
      console.error('Error registering product:', error);
    }
  }

  const handleClick = () => {
    alert('successfully copied!!');
  };

  const handleAgain = () => {
    setStep(1);
  };

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
        <RegisterForm>
          {step === 1 && (
            <InputContainer>
              <InputWindow
                type="text"
                id="product-name"
                name="product-name"
                placeholder="Product Name"
                value={productInfo.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
              <InputWindow
                type="text"
                id="web-link"
                name="web-link"
                placeholder="Web Link"
                value={productInfo.webLink}
                onChange={(e) => handleInputChange('webLink', e.target.value)}
              />
              <InputWindow
                type="text"
                id="twitter-link"
                name="twitter-link"
                placeholder="Twitter Link"
                value={productInfo.twitterLink}
                onChange={(e) => handleInputChange('twitterLink', e.target.value)}
              />
              <InputWindow
                type="text"
                id="description"
                name="description"
                placeholder="Description"
                style={{
                  height: '3rem',
                }}
                value={productInfo.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
              />
              <SubmitButton type="button" onClick={handleClickNext}>
                Next Step
              </SubmitButton>
            </InputContainer>
          )}

          {step === 2 && (
            <Step2Container>
              <Step2GuideText>
              Pool Guide
              <div style={{height:"30px"}}/>
              <img src="pool_guide.png" alt="guide" width="500px" height="450px" />

              </Step2GuideText>
              <InputContainer>
                <InputWindow
                  type="text"
                  id="txnetwork"
                  name="txnetwork"
                  placeholder="Tx Network"
                  value={transactions[0].txNetwork}
                  onChange={(e) => handleInputChange('transactions', { field: 'txNetwork', value: e.target.value })}
                />
                <InputWindow
                  type="text"
                  id="incentive-network"
                  name="incentive-network"
                  placeholder="Incentive Network"
                  value={transactions[0].incentiveNetwork}
                  onChange={(e) => handleInputChange('transactions', { field: 'incentiveNetwork', value: e.target.value })}
                />
                <InputWindow
                  type="text"
                  id="incentive-tokenAddress"
                  name="incentive-tokenAddress"
                  placeholder="Incentive Token Address"
                  value={transactions[0].incentiveTokenAddress}
                  onChange={(e) => handleInputChange('transactions', { field: 'incentiveTokenAddress', value: e.target.value })}
                />
                <InputWindow
                  type="text"
                  id="target-address"
                  name="target-address"
                  placeholder="Target Address"
                  value={transactions[0].targetAddress}
                  onChange={(e) => handleInputChange('transactions', { field: 'targetAddress', value: e.target.value })}
                />
                <InputWindow
                  type="text"
                  id="incentive-tokenAmount-per-tx"
                  name="incentive-tokenAmount-per-tx"
                  placeholder="Incentive Token Amount Per Tx"
                  value={transactions[0].incentiveTokenAmountPerTx}
                  onChange={(e) => handleInputChange('transactions', { field: 'incentiveTokenAmountPerTx', value: e.target.value })}
                />
                <InputWindow
                  type="text"
                  id="tx-data"
                  name="tx-data"
                  placeholder="Transaction Data"
                  style={{
                    height: '10rem',
                  }}
                  value={transactions[0].txData}
                  onChange={(e) => handleInputChange('transactions', { field: 'txData', value: e.target.value })}
                />
                <RowContainer>
                  <SubmitButton type="button" onClick={handleClickBefore}>
                    Previous Step
                  </SubmitButton>
                  <SubmitButton type="button" onClick={handleClickGetKey}>
                    Deploy & Get SDK-key
                  </SubmitButton>
                </RowContainer>
              </InputContainer>
            </Step2Container>
          )}
          {step === 3 && (
            <Step3GuideContainer>
              {loading ? (
                <p style={{
                  textAlign: "left",
                  fontSize: "20px"
                }}>Loading...</p>
              ) : (
                <>
                  <Step3GuideText>SDK Key: {sdkKey}</Step3GuideText>
                  <GuideText>
                    Add the code below in your website "index.html" file to see if "Split initialized" is successful!                  </GuideText>
                  <Step3GuideText
                    style={{
                      height: "20rem",
                      whiteSpace: "pre-wrap",
                      backgroundColor: "beige",
                      paddingTop: '0px',
                      padding: "10px0px 0px -40px",
                      fontWeight: '700',
                    }}
                  >
                    {`
                      <html>
                        <head>

                          <!-- Include splitsdk -->
                          <script type="text/javascript" src="https://split.xyz/splitsdk/splitsdk.js"></script>

                        </head>

                        <body>

                          <div id="root"></div>

                          <script>
                            var split = new Split.sdk.constructor();
                            split.init("YOUR_SDK_KEY"); 
                          </script>

                        </body>
                      </html>
                    `}
                  </Step3GuideText>
                  <RowContainer>
                    <SubmitButton type="button" onClick={handleAgain}>
                      Try Again
                    </SubmitButton>
                    <SubmitButton type="button" onClick={handleClick}>
                      Copy SDK Key
                    </SubmitButton>

                  </RowContainer>

                </>
              )}
            </Step3GuideContainer>
          )}
        </RegisterForm>
      </FormContainer>
    </>
  );
}
