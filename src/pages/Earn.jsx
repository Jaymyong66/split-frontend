import React from 'react'
import MiddleBar from '../components/MiddleBar'
import styled from 'styled-components';
import TotalActivity from '../components/TotalActivity';
import Products from '../components/Products';

const BodyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Earn() {
  return (
    <>
      <MiddleBar title={"Dashboards"} />
      <BodyContainer>
        <TotalActivity />
        <Products />
      </BodyContainer>
    </>
  );
}
