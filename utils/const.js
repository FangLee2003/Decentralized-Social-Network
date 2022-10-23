import {clusterApiUrl, PublicKey} from "@solana/web3.js";
import anchor_programs from "./anchor_programs.json";

export const CLUSTER = "devnet";
export const SOLANA_HOST = "https://api.devnet.solana.com";


export const STABLE_POOL_IDL = anchor_programs;
export const STABLE_POOL_PROGRAM_ID = new PublicKey(
    '5rUGRjewt6pUSPQEkVMLUzoNbn7vYcdDTFFtGQF5eq7D'
);
