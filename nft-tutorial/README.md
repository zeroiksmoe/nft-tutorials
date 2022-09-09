# OpenseaTutorials
https://docs.opensea.io/docs/developer-tutorials

# Structure for .env file:
ALCHEMY_KEY = 
ACCOUNT_PRIVATE_KEY = 
NETWORK="rinkeby"
NFT_CONTRACT_ADDRESS= <Needs to be inserted after deployment>

# Important commands
- npx hardhat compile
- npx hardhat deploy
- npx hardhat set-base-token-uri --base-url "https://bafybeiaaoi5r2rhltbjdgk3gh277cgc3egqlagmikjm6zgt37qvxawelya.ipfs.nftstorage.link/metadata/"
- npx hardhat mint --address 0x14b063AC061bE05491FE7Cc3acBd55f4a04cE2CE
- npx hardhat token-uri --token-id 2