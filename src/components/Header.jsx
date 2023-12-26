import React from 'react'
import styled from './Header.module.css'
import useConnectWallet from '../hooks/useConnectWallet';

export default function Header() {
  const { loginState, walletState, connectWalletHandler } = useConnectWallet();
  
  return (
    <>
      <header className={styled.header}>
        <a href="/">
          <img 
            src="logo-black.png"
            width="80px"
          />
        </a>

        <nav className={styled.nav}>
          <a href="/">Earn</a>
          <a href="/login">Advertise</a>
          <a href="/login">Resourse</a>
        </nav>
        <button className={styled.button} onClick={connectWalletHandler}>Sign in</button>
      </header>
    </>
  );
}
