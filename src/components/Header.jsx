import React from 'react'
import styled from './Header.module.css'
import useConnectWallet from '../hooks/useConnectWallet.tsx';




export default function Header() {
  const { loginState, walletState, connectWalletHandler } = useConnectWallet();
  
  return (
    <>
      <header className={styled.header}>
        <a href="/">
          <img 
            src="logo-black.png"
            width="83px"
          />
        </a>

        <nav className={styled.nav}>
          <a href="/earn">Earn</a>
          <a href="/login">Advertise</a>
          <a href="/login">Resourse</a>
        </nav>
        <button className={styled.button} onClick={connectWalletHandler}>Sign in</button>
      </header>
    </>
  );
}
