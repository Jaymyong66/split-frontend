import React, { useEffect } from 'react'
import MiddleBar from '../components/MiddleBar'
import styled from 'styled-components';
import TotalActivity from '../components/TotalActivity';
import Products from '../components/Products';
import axios from 'axios';
import useAddressStore from '../stores/store';

const BodyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Earn() {
  const { accesstoken } = useAddressStore();
  useEffect(() => {
    console.log(accesstoken);
    axios
      .get("http://localhost:8000/dashboard/earn", {
        headers: {
          Authorization: `Bearer ${accesstoken}`,
        },
      })
      .then((response) => {
        // 성공적인 응답 처리
        console.log(response.data);
      })
      .catch((error) => {
        // 오류 처리
        console.error("Error:", error);
      });

  }, []);
  
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
