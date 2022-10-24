import * as anchor from "@project-serum/anchor";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { STABLE_POOL_IDL, STABLE_POOL_PROGRAM_ID } from "./const";
import toast, { Toaster } from "react-hot-toast";
import { CiWallet } from "react-icons/ci";
// const [isWalletConnected, setIsisWalletConnected] = useState(false);

export function getProgramInstance(connection, wallet) {
  const provider = new anchor.AnchorProvider(
    connection,
    wallet,
    anchor.AnchorProvider.defaultOptions()
  );

  const idl = STABLE_POOL_IDL;

  const programId = STABLE_POOL_PROGRAM_ID;

  const program = new anchor.Program(idl, programId, provider);

  return program;
}
