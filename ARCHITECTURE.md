# Architecture: Solana Stablecoin Standard (SSS)

This repository follows the 3-layer architecture required for high-grade institutional stablecoins.

## Layer Model
- **Layer 1 (Base SDK):** Uses Token-2022 extensions to manage Mint, Freeze, and Metadata authorities.
- **Layer 2 (Compliance Modules):** 
    - **Transfer Hooks:** Enforces blacklist checks on every transaction.
    - **Blacklist PDA:** Stores blocked addresses in a global state.
    - **Permanent Delegate:** Enables token seizure for regulatory compliance.
- **Layer 3 (Standard Presets):** 
    - **SSS-1:** Minimal Stablecoin (Mint + Metadata).
    - **SSS-2:** Compliant Stablecoin (SSS-1 + Compliance Modules).

## Role-Based Access Control (RBAC)
The program implements a multi-authority model:
- **Master Authority:** Overall configuration and role management.
- **Minter:** Authorized to issue new tokens.
- **Blacklister:** Authorized to manage the blacklist PDA.
- **Seizer:** Authorized to use the Permanent Delegate.
