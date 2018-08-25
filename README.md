# Crypto Warcraft README

## What is Crypto Warcraft ?

**crypto warcraft** is an ethereum based game, similar to cryptokitties or cryptoZombies but with different functionalities and in the warcraft universe. 

## How to set it up.

### Requirements

#### MetaMask

You will need MetaMask or another Web3 injecter in order to use the website created. I haven't tested the project with other web3 injecters so I advise using MetaMask.

#### Ganache-Cli or Ganache

### Instructions

To launch the game is simple. You must first launch Ganache-Cli or Ganache (You might need to change the network port to 8545 in order to use Ganache) and copy the Mneunomics seed and open your MetaMask with the seed in order to access the private block-chain.

Next you have to open a seperate terminal and navigate to the project's root folder (.../crypto-warcraft/). If the files in crypto-warcraft/build/contracts aren't deleted, then delete them for a smooth launch, since it seems to not adapt to the new block-chain when compiling.

Once deleted, at the root use the following commands :
```
truffle compile
truffle migrate
```

After the migration is done, you can now start the website with :
```
npm run dev
```

## How to play ?
