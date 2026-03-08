import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";

/**
 * Solana Stablecoin Standard SDK
 * Implements SSS-1 (Minimal) and SSS-2 (Compliant) presets.
 */
export class StablecoinSDK {
    constructor(public program: Program) {}

    /**
     * Initializes SSS-1: Minimal Stablecoin
     * Features: Mint authority + metadata.
     */
    async initializeSSS1(name: string, symbol: string, uri: string) {
        const config = {
            name,
            symbol,
            uri,
            decimals: 6,
            enablePermanentDelegate: false,
            enableTransferHook: false,
            defaultAccountFrozen: false,
        };
        return await this.program.methods.initialize(config).rpc();
    }

    /**
     * Initializes SSS-2: Compliant Stablecoin
     * Features: SSS-1 + Permanent delegate + Transfer hook + Blacklist PDA.
     */
    async initializeSSS2(name: string, symbol: string, uri: string) {
        const config = {
            name,
            symbol,
            uri,
            decimals: 6,
            enablePermanentDelegate: true,
            enableTransferHook: true,
            defaultAccountFrozen: false,
        };
        return await this.program.methods.initialize(config).rpc();
    }

    /**
     * Mint stablecoins to a recipient (Role-based)
     */
    async mint(amount: number) {
        return await this.program.methods
            .mintTo(new anchor.BN(amount))
            .rpc();
    }
}
