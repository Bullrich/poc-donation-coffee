import { expect, use as chaiUse } from "chai";
import { utils } from "ethers";
import { ethers } from "hardhat";
import chaiAsPromised from "chai-as-promised";

chaiUse(chaiAsPromised);

describe("Greeter", function () {
  it("Should update the balance on token minted", async function () {
    const [owner] = await ethers.getSigners();
    const NFT = await ethers.getContractFactory("CryptoExamples");
    const nft = await NFT.deploy(50);
    await nft.deployed();

    const metadataURI = 5;

    let balance = await nft.balanceOf(owner.address);
    expect(balance).to.equal(0);

    await nft.payToMint(owner.address, metadataURI, {
      value: utils.parseEther("0.05"),
    });

    balance = await nft.balanceOf(owner.address);
    expect(balance).to.equal(1);
  });

  it("Should not allow to mint and already minted token", async function () {
    const [owner] = await ethers.getSigners();
    const NFT = await ethers.getContractFactory("CryptoExamples");
    const nft = await NFT.deploy(50);
    await nft.deployed();

    const metadataURI = 10;

    let balance = await nft.balanceOf(owner.address);
    expect(balance).to.equal(0);

    const newlyMintedToken = await nft.payToMint(owner.address, metadataURI, {
      value: utils.parseEther("0.05"),
    });

    balance = await nft.balanceOf(owner.address);
    expect(balance).to.equal(1);
    console.log(newlyMintedToken);

    return expect(
      nft.payToMint(owner.address, metadataURI, {
        value: utils.parseEther("0.05"),
      })
    ).to.be.rejectedWith(/NFT\salready\sminted!/);
  });
});
