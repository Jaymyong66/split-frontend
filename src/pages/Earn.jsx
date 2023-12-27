import React, { useEffect, useState } from 'react'
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
  const [dashboardData, setDashboardData] = useState({});
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
        setDashboardData(response.data);
      })
      .catch((error) => {
        // 오류 처리
        console.error("Error:", error);
      });

  }, []);

  const defaultData = {
    monthlyTotalDashboard: {
      earned: 9.5,
      claimed: 0,
      productNum: 10,
      walletConnectNum: 2414,
      transactionNum: 95,
      conversion: 3.93,
    },
    totalDashboard: {
      earned: 30.3,
      claimed: 20,
      productNum: 33,
      walletConnectNum: 9201,
      transactionNum: 303,
      conversion: 3.29,
    },
    products: [
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
    ]
  }

  return (
    <>
      <MiddleBar title={"Dashboards"} />
      <BodyContainer>
        {dashboardData ? (
          <>
            <TotalActivity monthly={dashboardData.monthlyTotalDashboard} total={dashboardData.totalDashboard} />
            <Products products={dashboardData.products} />
          </>
        ) : (
          <>
            <TotalActivity monthly={defaultData.monthlyTotalDashboard} total={defaultData.totalDashboard} />
            <Products products={defaultData.products} />
          </>
        )}

      </BodyContainer>
    </>
  );
}
