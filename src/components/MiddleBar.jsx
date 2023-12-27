import React from 'react'
import styled from 'styled-components';

const MainContainer = styled.div`
  width: 100%;
  background: #032746;
  height: 150px;
`;

const BodyContainer = styled.div`
  position: relative;
  display: flex;
`;

const ContentContainer = styled.div`
  position: absolute;
  left: 5%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 35px;
`;

const Maintitle = styled.div`
  color: white;
  font-family: Inter;
  font-size: 40px;
`;

const Subtitle = styled.div`
  color: white;
  font-family: var(--font-googleInterLight);
  font-size: 15px;
`;

export default function MiddleBar(props) {
  const middleTitle = props.title;
  return (
    <MainContainer>
      <BodyContainer>
        <ContentContainer>
          <Maintitle>{middleTitle}</Maintitle>
          <Subtitle>
            Check your earnings so far through affiliate activities and
            transactions.
          </Subtitle>
        </ContentContainer>
      </BodyContainer>
    </MainContainer>
  );
}
