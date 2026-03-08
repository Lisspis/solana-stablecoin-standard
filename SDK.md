# Solana Stablecoin SDK Guide

The SDK is a configurable toolkit for issuers to deploy and manage stablecoins.

## Quick Start (TypeScript)

```typescript
import { StablecoinSDK } from "./ts-sdk/src";

// Initialize SSS-2 (Compliant) Preset
const sdk = new StablecoinSDK(program);
await sdk.initializeSSS2("Institutional USD", "iUSD", "https://arweave.net");

// Compliance: Add address to Blacklist
await sdk.addBlacklist(maliciousPubkey);

// Minting
await sdk.mint(1000000000);
Modular Presets
SSS-1: Standard Mint/Burn/Metadata.
SSS-2: SSS-1 + Blacklist + Transfer Hook + Permanent Delegate.
