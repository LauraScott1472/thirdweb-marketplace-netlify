// lib/contracts.ts
import { getContract } from "thirdweb";
import { client } from "./client";
import { sepolia } from "thirdweb/chains";

export const MARKETPLACE_ADDRESS = process.env.NEXT_PUBLIC_MARKETPLACE_ADDRESS!;
export const NFT_COLLECTION_ADDRESS = process.env.NEXT_PUBLIC_NFT_COLLECTION_ADDRESS!;
export const USDC_ADDRESS = process.env.NEXT_PUBLIC_USDC_ADDRESS!;

// Export marketplace contract
export const marketplace = getContract({
  client,
  chain: sepolia,
  address: MARKETPLACE_ADDRESS,
});

// Export NFT collection contract (optional)
export const nftCollection = getContract({
  client,
  chain: sepolia,
  address: NFT_COLLECTION_ADDRESS,
});
