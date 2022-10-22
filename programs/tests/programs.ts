import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { Programs } from '../target/types/programs';

describe('programs', () => {

  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider)

  const program = anchor.workspace.Programs as Program<Programs>;

  it('Is initialized!', async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
