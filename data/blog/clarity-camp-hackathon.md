---
title: Clarity Camp Hackathon
date: '2024-05-28'
tags: ['Blockchain','Smart Contract','Clarity','Clarinet','Stacks','Hackathon']
draft: false
summary: A hackathon on Clarity Smart Contract language by Stacks Blockchain
images: []
layout: PostLayout
canonicalUrl:
authors: ['default']
---
## Overview

**A virtual hackathon where you'll build your very own smart contracts using Clarity.** The hack will let you **experiment and familiarize yourself with Clarity’s developer environment**. I will share the smart contract that I developed, the inspiration behind it, and how it works. Maybe it will give someone a good idea of how to make a **DAO contract**. I will not share the code itself but will link the **GitHub repository**.

## What is a Smart Contract?

A **smart contract** is a computer program or a transaction protocol that is intended to **automatically execute, control, or document events and actions** according to the terms of a contract or an agreement. The objectives of smart contracts are the **reduction of need for trusted intermediators, arbitration costs, and fraud losses**, as well as the **reduction of malicious and accidental exceptions**. Smart contracts are commonly associated with **cryptocurrencies**, and the smart contracts introduced by **Ethereum** are generally considered a fundamental building block for **decentralized finance (DeFi)** and **NFT applications**.

*Source: [Wikipedia](https://en.wikipedia.org/wiki/Smart_contract)*

## What is Clarity?

**Clarity** is a programming language for writing smart contracts on the **Stacks 2.0 blockchain**. It supports **programmatic control over digital assets** and provides native functions that make it easy for developers to create complex smart contracts while protecting users at every step. Clarity offers precise tools for enabling on-chain logic while reducing unintentional errors.

*Source: [Clarity Language](https://clarity-lang.org/)*

## What is Stacks 2.0
It’s a **Layer-2 blockchain powered by Bitcoin**. Since Bitcoin doesn’t have any smart contract language, Stacks Blockchain created a smart contract language called **Clarity** which serves the purpose. You can create **NFTs, FTs, DeFi, DAO**, and a lot of different architectures using this language. It’s simpler, has a compiler called **Clarinet**, and you can write test cases in **JavaScript**.

*Source: [Stacks Introduction](https://www.stacks.co/learn/introduction)*

## How did I get into this?
Back in 2019, when **Stacks** appeared in the blockchain industry as the only blockchain that can utilize the power of **Bitcoin using smart contracts**, I was intrigued and thought, "What is all the fuss about?” The company where I was working at that time was already exploring and finding developers to delve into this. I, along with a couple of others, were picked to do research on it. I really got into its simplicity and modularity. I spent more than 2 months reading and exploring its functions.

Then, the **Clarity Camp Hackathon** was announced. It was the first-ever hackathon in this language, and we had the freedom to work on any of the following types:

- Simple exchange
- DAOs
- Dapp
- Counter
- Supply chain
- Deeds
- Access Restriction
- Withdrawals
- Send
- State Machines
- Balance Address Checker
- Contracts call another Contract
- Fundraising
- Simple Marketplace
- Basic Provenance
- Asset transfer
- Lottery
- Delegated Voting
- Smart contract IoT devices
- Legal Agreements
- Payment Splitting

I participated in this hackathon as a solo developer because, for some reason, other developers didn’t care or didn’t have the confidence. I chose to work on a **DAO (Decentralized Autonomous Organization)** and called it **Velocity DAO**.

## What is Velocity DAO?
I took inspiration from a DAO contract where a proposal, such as a charity-based initiative, is accepted based on votes by the members. **Simple, right? Let’s see.**

## What does it do?
I added a simple type of proposal where the proposer can enter the stack address of an organization they believe should receive DAO tokens as charity. The DAO tokens are used to vote in this system, and users can obtain these tokens upon registration using their STX. Charity organizations can convert those tokens back to STX using this contract. It is assumed that the contract owner will add tokens and funds to the contract initially to make it work.

## How did I build it?
I built it using **FT tokens** to function as a token for system interaction and a **DAO contract** for members to vote and select the winner. Using the block-height for processing proposals, I assumed that the front end would call this function after a specific block-height is reached (currently, it is every 10 blocks). I also added a conversion rate for the DAO Tokens, i.e., **1 STX = 1 DAO Token**, and gave 100 tokens to the users who registered in their wallets so they can start proposing and interacting with the contract. I kept it limited to **100 members only** to prevent abuse. I used this flow:

**Register -> Propose -> Process -> Evaluate -> Execute -> Reset**

Each user and proposal goes through this flow for execution.

## How does it work?
By following a set of commands in the **Clarinet console** (e.g., compiler for Clarity), you can:

1. **Become a member**
2. **Create a proposal** that transfers 10 STX to the organization as charity
3. **Cast a yes vote**
4. **Advance the chain tip to 20** to process the required proposal in the required time of 10 blocks
5. **Evaluate all the proposals** in the processed-proposals list
6. **Execute the transaction** on success

Your output should be **10 DAO tokens** in the organization's stack address, which can then be converted by that organization principal using the **convert-dao-to-stx** function in the DAO contract. You can follow the steps to interact with the contract [here](https://github.com/SaadTahir28/Velocity-DAO-Clarity).

## The Results
The project was reviewed by **Marvin Janssen, the Technical Lead of Stacks Foundation**. I was thrilled to secure third place in this exciting competition and received a reward of **120 STX** in my wallet. It was a fantastic experience that validated all the hard work and creativity that went into building the **Velocity DAO**.

![clarity-hack](/static/images/blog/clarity-hack.png)

## Advanced Expressions
After this competition, I started working on a live project. There, I delved deeply into the logic of floating-point accuracy. I had to write a smart contract that utilized scientific notations to create **logarithmic and exponential functions in Clarity**, which are not present by default. It was a great challenge, and I had to use recursions because Clarity doesn’t support loops. So, everything needed to be done in **O(1)**. I was able to create **power functions, logarithmic functions, and exponential functions with 10 decimal place accuracy**.

## Conclusion
Learning a language in 90 days and winning a competition is itself a huge accomplishment. Getting judged by the technical lead and the author of the programming language is such an honor. People often hesitate to participate in competitions, especially global ones, because they think they will not win. But that’s just a misconception. **It’s not about winning. It’s about proving to yourself that you can do anything.**

I didn’t participate to win this competition. In fact, I didn’t even see the prize money until it was sent to me. I wanted to compete because I wanted to prove to myself and my peers that if you are confident and determined, you can overcome any challenge. Competitions are about pushing your limits, learning new things, and growing as a developer and as a person. 

**Don’t let the fear of losing stop you from trying. The real victory lies in the journey and the experience gained along the way.** Embrace the challenges, and you might just surprise yourself with what you can achieve.

> **"Success is not the result of spontaneous combustion. You must set yourself on fire."**

## Important Links
- [Velocity DAO - Github](https://github.com/SaadTahir28/Velocity-DAO-Clarity)
- [Devpost](https://devpost.com/software/velcoity-dao-charity)
- [Participants](https://clarity-camp-hackathon.devpost.com/project-gallery)
- [Winning Transaction](https://explorer.hiro.so/txid/0xc56975db3dee005ba2c82248ec48c879f0a875c04b8246416d1b0d205416e3ad?chain=mainnet)







