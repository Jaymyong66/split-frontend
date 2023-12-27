
import { ethers } from 'ethers';
import { providerService } from './contract.provider.ts';

export const IncentivePoolABI = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "deployer",
            type: "address",
          },
          {
            components: [
              {
                internalType: "address",
                name: "incentiveToken",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "incentiveAmountPerTransaction",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "affiliateAmountPerTransaction",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "userAmountPerTransaction",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "leftTransactionNum",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "maxTransactionNumPerWallet",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "endTimeStamp",
                type: "uint256",
              },
            ],
            internalType: "struct CommonDtos.IncentiveInfo",
            name: "incentiveInfo",
            type: "tuple",
          },
        ],
        internalType: "struct CommonDtos.DeployIncentivePoolReq",
        name: "req",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "addedTransactionNum",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalTransactionNum",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "addedIncentiveAmount",
        type: "uint256",
      },
    ],
    name: "AddLeftTransactionNum",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "enum IncentivePoolInterface.ClaimType",
        name: "claimType",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "claimTransactionNum",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "claimedValue",
        type: "uint256",
      },
    ],
    name: "ClaimIncentive",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "addedTransactionNum",
        type: "uint256",
      },
    ],
    name: "addLeftTransactionNum",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "affiliateToClaimedTransactionNum",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "affiliateToLeftTransactionNum",
    outputs: [
      {
        internalType: "uint256",
        name: "leftTransactionNum",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "affiliates",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "claimAffiliateIncentive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claimUserIncentive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAffiliates",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getIncentiveInfo",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "incentiveToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "incentiveAmountPerTransaction",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "affiliateAmountPerTransaction",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "userAmountPerTransaction",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "leftTransactionNum",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxTransactionNumPerWallet",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endTimeStamp",
            type: "uint256",
          },
        ],
        internalType: "struct CommonDtos.IncentiveInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getUsers",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "incentiveInfo",
    outputs: [
      {
        internalType: "address",
        name: "incentiveToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "incentiveAmountPerTransaction",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "affiliateAmountPerTransaction",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "userAmountPerTransaction",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "leftTransactionNum",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxTransactionNumPerWallet",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endTimeStamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isAffiliateExist",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isClaimPaused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isUpdatePaused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isUserExist",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poolAdmin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "affiliate",
            type: "address",
          },
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
        ],
        internalType: "struct CommonDtos.Referral[]",
        name: "referrals",
        type: "tuple[]",
      },
    ],
    name: "updatePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userToClaimedTransactionNum",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userToLeftTransactionNum",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "users",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export default async function ClaimService() { 
  // const _incentivePoolFactory: IncentivePool__factory =
  //   IncentivePoolFactory__factory.connect(
  //     "0x87f7117cf410a8e21b645450e372201a70630d85",
  //     provider
  //   );

  const provider = providerService.getProvider();
  const wallet = providerService.getWallet();

  const incentivePoolContract = new ethers.Contract(
    "0xb3E11Fe33f833FD6C1186a5A7dE01e5404D07cd0",
    IncentivePoolABI,
    provider
  );
  
  console.log("incentivePoolContract: " + incentivePoolContract.address);

  const receipt = await (await incentivePoolContract.connect(wallet).claimAffiliateIncentive({ gasPrice: 1000000000, gasLimit: 10000000})).wait();

  console.log(receipt.status);
}