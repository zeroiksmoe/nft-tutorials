// File: contracts/BAYC.sol
pragma solidity ^0.7.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";

contract BAYC is ERC721, Ownable {
    using SafeMath for uint256;
    uint256 public constant apePrice = 100000000000; //0.001 ETH
    uint256 public MAX_KS;

    constructor(string memory name, string memory symbol, uint256 maxNftSupply) ERC721(name, symbol) {
        MAX_KS = maxNftSupply;
    }

    function withdraw() public onlyOwner {
        uint balance = address(this).balance;
        msg.sender.transfer(balance);
    }

    function setBaseURI(string memory baseURI) public onlyOwner {
        _setBaseURI(baseURI);
    }

    function mintApe(uint numberOfTokens) public payable {       
        for(uint i = 0; i < numberOfTokens; i++) {
            uint mintIndex = totalSupply();
            if (totalSupply() < MAX_KS) {
                _safeMint(msg.sender, mintIndex);
            }
        }
    }
}