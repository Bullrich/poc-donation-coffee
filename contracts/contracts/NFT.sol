// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract CryptoExamples is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;
    uint256 immutable private tokenLimit;

    mapping(uint256 => bool) private existingURIs;

    constructor(uint256 maxTokens) ERC721("CryptoExamples", "CE") {
        tokenLimit = maxTokens;
     }

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmTb5npguQRGVMZaVwj4UJtZGHuh4Pb8gyNbzEtowjMfEK/";
    }

    function safeMint(address to) public onlyOwner returns (uint256) {
        uint256 newItemId = mintToken(to);

        return newItemId;
    }

    function payToMint(address recipient) public payable returns (uint256) {
        require(msg.value >= 0.05 ether, "Need to pay up at least 0.05 ether");

        address payable feeOwner = payable(owner());
        feeOwner.transfer(msg.value);

        uint256 newItemId = mintToken(recipient);

        return newItemId;
    }

    function mintToken(address recipient) private returns (uint256) {
        uint256 newItemId = _tokenIdCounter.current();
        require(!existingURIs[newItemId], "NFT already minted!");
        require(newItemId < tokenLimit, "Got over the NFT token limit");


        existingURIs[newItemId] = true;
        // for some reason metadata starts in 1
        string memory dataURI = Strings.toString(newItemId + 1);
        string memory metadata = string(abi.encodePacked(dataURI, ".json"));

        _tokenIdCounter.increment();

        _mint(recipient, newItemId);
        _setTokenURI(newItemId, metadata);

        return newItemId;
    }

    function count() public view returns (uint256) {
        return _tokenIdCounter.current();
    }

    function isContentOwner(uint16 uri) public view returns (bool) {
        return existingURIs[uri];
    }

    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }
}
