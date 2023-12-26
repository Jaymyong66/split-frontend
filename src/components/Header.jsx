import React, { useState } from 'react';
import useConnectWallet from '../hooks/useConnectWallet.tsx';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';


export default function Header() {
  const { loginState, walletState, connectWalletHandler } = useConnectWallet();

  // const summarizedAddress = `${ethereumAddress.slice(
  //   0,
  //   6
  // )}...${ethereumAddress.slice(-4)}`;
  
//   return (
//     <>
//       <header className={styled.header}>
//         <nav className={styled.nav}>
//           <Link to="/">
//             <img src="logo-black.png" width="83px" />
//           </Link>
//           <ul>
//             <li className={styled.li}>
//               <Link to="/earn">Earn</Link>
//             </li>
//             <li className={styled.li}>
//               <Link to="/">Advertise</Link>
//             </li>
//             <li className={styled.li}>
//               <Link to="/">Resources</Link>
//             </li>
//           </ul>
//         </nav>
//         {loginState === "done" ? (
//           <button
//             disable={loginState === "progress"}
//             className={styled.button}
//             onClick={connectWalletHandler}
//           >
//             <img src="WalletIcon.png" />
//             {`${walletState.slice(0, 6)}...${walletState.slice(-4)}`}
//           </button>
//         ) : (
//           <button
//             disable={loginState === "progress"}
//             className={styled.button}
//             onClick={connectWalletHandler}
//           >
//             Sign in
//           </button>
//         )}
  const [isEarnDropdownVisible, setEarnDropdownVisible] = useState(false);

  const handleEarnMouseEnter = () => {
    setEarnDropdownVisible(true);
  };

  const handleEarnMouseLeave = () => {
    setEarnDropdownVisible(false);
  };

  const handleDropdownClick = (event) => {
    event.stopPropagation();
  };

  return (
    <>
      <header className={styles.header}>
        <Link to="/">
          <img src="logo-black.png" width="83px" />
        </Link>

        <nav className={styles.nav}>
          <div className={styles.navItem} onMouseEnter={handleEarnMouseEnter}>
            <Link to="/earn">Earn</Link>
            <div
              className={`${styles.underline} ${
                isEarnDropdownVisible ? styles.active : ""
              }`}
            ></div>
            <div
              className={`${styles.dropdownContent} ${
                isEarnDropdownVisible ? styles.active : ""
              }`}
              onClick={handleDropdownClick}
            >
              <div
                className={styles.subLinkContainer}
                onMouseLeave={handleEarnMouseLeave}
              >
                <Link to="/earn">
                  <div className={styles.subLinkContents}>
                    <img
                      src="earn_1.png"
                      width="40px"
                      height="40px"
                      alt="img"
                    />
                    <div>
                      <div className={styles.subLinkTitle}>Dashboard</div>
                      <div className={styles.subLinkSubTitle}>
                        Check your earnings so far through affiliate activities
                        and transactions.
                      </div>
                    </div>
                  </div>
                </Link>

                <Link to="/">
                  <div className={styles.subLinkContents}>
                    <img
                      src="earn_2.png"
                      width="40px"
                      height="40px"
                      alt="img"
                    />
                    <div className={styles.subLinkTextContents}>
                      <div className={styles.subLinkTitle}>All Products</div>
                      <div className={styles.subLinkSubTitle}>
                        Promote and earn rewards by endorsing the products
                        affiliated with Split.
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.navItem}>
            <a href="/">Advertise</a>
            <div
              className={`${styles.underline} ${
                isEarnDropdownVisible ? styles.active : ""
              }`}
            ></div>
            <div
              className={`${styles.dropdownContent} ${
                isEarnDropdownVisible ? styles.active : ""
              }`}
              onClick={handleDropdownClick}
            >
              <div
                className={styles.subLinkContainer}
                onMouseLeave={handleEarnMouseLeave}
              >
                <Link to="/">
                  <div className={styles.subLinkContents}>
                    <img
                      src="earn_1.png"
                      width="40px"
                      height="40px"
                      alt="img"
                    />
                    <div>
                      <div className={styles.subLinkTitle}>Dashboard</div>
                      <div className={styles.subLinkSubTitle}>
                        Monitor the advertising performance of your registered
                        products and manage the reward pool.
                      </div>
                    </div>
                  </div>
                </Link>

                <Link to="/">
                  <div className={styles.subLinkContents}>
                    <img
                      src="adver_2.png"
                      width="40px"
                      height="40px"
                      alt="img"
                    />
                    <div className={styles.subLinkTextContents}>
                      <div className={styles.subLinkTitle}>
                        Register Products
                      </div>
                      <div className={styles.subLinkSubTitle}>
                        Enlist your product on Split and start promoting it to a
                        broader audience.
                      </div>
                    </div>
                  </div>
                </Link>

                <Link to="/">
                  <div className={styles.subLinkContents}>
                    <img
                      src="adver_3.png"
                      width="40px"
                      height="40px"
                      alt="img"
                    />
                    <div className={styles.subLinkTextContents}>
                      <div className={styles.subLinkTitle}>Developers</div>
                      <div className={styles.subLinkSubTitle}>
                        Manage your API keys and learn how to integrate the
                        Split SDK into your product for enhanced functionality.
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.navItem}>
            <Link to="/">Resource</Link>
            <div
              className={`${styles.underline} ${
                isEarnDropdownVisible ? styles.active : ""
              }`}
            ></div>
            <div
              className={`${styles.dropdownContent} ${
                isEarnDropdownVisible ? styles.active : ""
              }`}
              onClick={handleDropdownClick}
            >
              <div
                className={styles.subLinkContainer}
                onMouseLeave={handleEarnMouseLeave}
              >
                <Link to="/">
                  <div className={styles.subLinkContents}>
                    <div>
                      <div className={styles.subLinkSubTitle}>
                        Sorry, It’s under preparation.
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {loginState === "done" ? (
          <button
            disable={loginState === "progress"}
            className={styles.button}
            onClick={connectWalletHandler}
            style={{
              display: "flex",
            }}
          >
            <img src="WalletIcon.png" />
            {`${walletState.slice(0, 6)}...${walletState.slice(-4)}`}
          </button>
        ) : (
          <button
            disable={loginState === "progress"}
            className={styles.button}
            onClick={connectWalletHandler}
            style={{
              display: "block",
            }}
          >
            Sign in
          </button>
        )}
      </header>
    </>
  );
}
