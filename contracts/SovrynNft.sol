pragma solidity ^0.6.2;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721.sol";
import "openzeppelin-solidity/contracts/access/Ownable.sol";

contract SovrynNft is ERC721, Ownable {
	
	uint256 nonce;
    constructor(
        string memory name,
        string memory symbol)
        ERC721(name, symbol)
        public {}
        
        
    function mint(address receiver) public onlyOwner {
         nonce++;
        _safeMint(receiver, nonce);
    }
    
    function setTokenURI(uint256 tokenId, string memory tokenURI) public onlyOwner {
        _setTokenURI(tokenId, tokenURI);
    }
    
}

