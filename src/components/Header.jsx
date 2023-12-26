import React from 'react'
import styled from './Header.module.css'
import useConnectWallet from '../hooks/useConnectWallet.tsx';
import { Link } from 'react-router-dom';




export default function Header() {
  const { loginState, walletState, connectWalletHandler } = useConnectWallet();
  // const summarizedAddress = `${ethereumAddress.slice(
  //   0,
  //   6
  // )}...${ethereumAddress.slice(-4)}`;
  
  return (
    <>
      <header className={styled.header}>
        <nav className={styled.nav}>
          <Link to="/">
            <img src="logo-black.png" width="83px" />
          </Link>
          <ul>
            <li className={styled.li}>
              <Link to="/earn">Earn</Link>
            </li>
            <li className={styled.li}>
              <Link to="/">Advertise</Link>
            </li>
            <li className={styled.li}>
              <Link to="/">Resources</Link>
            </li>
          </ul>
        </nav>
        {loginState === "done" ? (
          <button
            disable={loginState === "progress"}
            className={styled.button}
            onClick={connectWalletHandler}
          >
            <img src="WalletIcon.png" />
            {`${walletState.slice(0, 6)}...${walletState.slice(-4)}`}
          </button>
        ) : (
          <button
            disable={loginState === "progress"}
            className={styled.button}
            onClick={connectWalletHandler}
          >
            Sign in
          </button>
        )}
      </header>
    </>
  );
}
