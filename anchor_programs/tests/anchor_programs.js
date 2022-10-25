import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { AnchorPrograms } from "../target/types/anchor_programs";

describe("anchor_programs", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.AnchorPrograms as Program<AnchorPrograms>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});