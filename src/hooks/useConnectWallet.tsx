import { useCallback, useEffect, useState } from "react";
import { useAccount, useConnect, useNetwork, useSignMessage } from "wagmi";
import { apiService } from "../api/api.service.ts";
import { SiweMessage } from "siwe";
import useAddressStore from '../stores/store.js';

export enum LoginState {
  NOT_STARTED = "not_started",
  PROGRESS = "progress",
  DONE = "done",
}

export default function useConnectWallet() {
  const { accesstoken, setAccesstoken } = useAddressStore();
  
  const [loginState, setLoginState] = useState<LoginState>(
    LoginState.NOT_STARTED
  );
  const [walletState, setWalletState] = useState<string>("");

  const { connect, connectors } = useConnect();
  const { address } = useAccount();
  const { chain } = useNetwork();
  const { signMessageAsync } = useSignMessage();

  const connectWalletHandler = () => {
    setLoginState(LoginState.PROGRESS);

    console.log("here");

    try {
      // TODO: 커넥터 추가 시 수정
      const metamaskConnector = connectors[0];
      connect({ connector: metamaskConnector });
    } catch (error) {
      console.log(error);
      setLoginState(LoginState.NOT_STARTED);
    }
  };

  const signInHandler = useCallback(async () => {
    try {
      const chainId = chain?.id;
      if (!address || !chainId) return;

      // 1. 지갑 데이터베이스에 등록
      await apiService.createWallet(address);

      // 2. 논스 받아옴
      const nonce = await apiService.fetchNonce(address);

      // 3. 메시지 및 서명 생성
      const message = new SiweMessage({
        domain: window.location.host,
        address,
        statement: "Sign in to SPLIT",
        uri: window.location.origin,
        version: "1",
        chainId,
        nonce,
      });
      const signature = await signMessageAsync({
        message: message.prepareMessage(),
      });

      // 4. 해당 메시지 및 서명으로 서버에 인증, JWT 토큰 가져옴
      const data = await apiService.signWallet(message, signature);
      setAccesstoken(data["accessToken"]);

      setLoginState(LoginState.DONE);
    } catch (error) {
      console.log(error);
      setLoginState(LoginState.NOT_STARTED);
    }
  }, [address, chain, signMessageAsync]);

  useEffect(() => {
    setWalletState(address as string);
  }, [address]);

  useEffect(() => {
    if (walletState && loginState === LoginState.PROGRESS) {
      signInHandler();
    }
  }, [walletState, loginState, signInHandler]);

  return { loginState, walletState, connectWalletHandler };
}
