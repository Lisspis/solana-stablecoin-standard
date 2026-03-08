# Solana Stablecoin Standard (SSS)

An open-source, modular SDK for building production-ready stablecoins on Solana. This repository implements the standards **SSS-1** (Minimal) and **SSS-2** (Compliant) using **Token-2022** extensions.

## 🏗 Architecture Overview

This project follows a 3-layer architecture as per the Superteam Brazil technical specifications:

- **Layer 1 (Base SDK):** Core token logic with Mint/Freeze/Metadata authorities.
- **Layer 2 (Modules):** Composable logic for Compliance (Blacklists, Permanent Delegate).
- **Layer 3 (Presets):** Pre-configured standards (SSS-1 & SSS-2).

## 🚀 Features

- **SSS-1 (Minimal Stablecoin):** Clean implementation with Mint and Freeze authorities.
- **SSS-2 (Compliant Stablecoin):** Advanced compliance with:
    - **Permanent Delegate:** Ability to seize tokens for regulatory requirements.
    - **Blacklist enforcement:** PDA-based global blacklist.
    - **Transfer Hooks:** Compliance checks on every transaction.
- **Role-Based Access Control (RBAC):** Separate authorities for Admin, Minter, and Blacklister.

## 📁 Repository Structure

- `/programs`: Anchor smart contracts (Rust).
- `/ts-sdk`: TypeScript SDK for institutional integration.
- `/cli`: Admin CLI tool (`sss-token`) for rapid operations.

## 🛠 Quick Start

### Build Program
```bash
anchor build
``` 
### Initialize SSS-2 Token (SDK Example)
```typescript
const sdk = new StablecoinSDK(program);
await sdk.initializeSSS2("My Stablecoin", "MYUSD", "https://metadata.url");
``` 
### CLI Operations
```bash
# Mint tokens
sss-token mint <RECIPIENT_PUBKEY> 1000

# Blacklist address (SSS-2)
sss-token blacklist <MALICIOUS_PUBKEY> 
``` 

