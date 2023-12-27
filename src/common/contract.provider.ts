import { ethers } from "ethers";

// Types
export type Network = "viction_testnet";

type providerType = ethers.providers.JsonRpcProvider;
type walletType = ethers.Wallet;

export const rpcInfo: {
    [key in Network]: {
        url: string;
        chainId: number;
    };
} = {
    viction_testnet: {
        url: "https://rpc-testnet.viction.xyz/",
        chainId: 89,
    },
};

class ProviderService {
    account: string;
    privateKey: string;
    
    constructor() {
        this.account = process.env.REACT_APP_DEVELOPER_ACCOUNT as string;
        this.privateKey = process.env.REACT_APP_DEVELOPER_PRIVATE_KEY as string;
    
        if (!this.privateKey) throw new Error("개인키를 불러올 수 없습니다. 환경변수를 확인하세요.");
        if (!this.account) throw new Error("계정을 불러올 수 없습니다. 환경변수를 확인하세요.");
    }
    
    getProvider() {
        // const network = process.env.NETWORK as Network;
        return new ethers.providers.JsonRpcProvider(
          "https://rpc-testnet.viction.xyz/"
        ) as providerType;

    }
    
    getWallet() {
        return new ethers.Wallet(this.privateKey, this.getProvider()) as walletType;
    }
}

export const providerService = new ProviderService();