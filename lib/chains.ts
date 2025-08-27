import { defineChain } from 'thirdweb';


// From env: 11155111 (Sepolia) or 1 (mainnet)
const CHAIN_ID = Number(process.env.NEXT_PUBLIC_CHAIN_ID || 11155111);


export const activeChain = defineChain(CHAIN_ID);