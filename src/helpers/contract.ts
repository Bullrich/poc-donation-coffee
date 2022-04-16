import { ethers } from "ethers";
import { CONTRACT_ADDRESS } from "src/config/contract";
import CryptoContract from "../artifacts/contracts/BuyCoffee.sol/BuyCoffee.json";
import type { BuyCoffee } from "../contracts";

export async function buyCoffee() {
    if (!window.ethereum) {
        return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const coffeeContract = new ethers.Contract(
        CONTRACT_ADDRESS,
        CryptoContract.abi,
        provider.getSigner()
    ) as BuyCoffee;

    const donate = await coffeeContract.donate(
        "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
        { value: coffeePrice.mul(3) }
    );
    console.log(donate);
}

export const coffeePrice = ethers.utils.parseEther("0.0001");

export async function connectWallet() {
    // walletConnected = false;
    const { ethereum } = window;
    await ethereum
      .request({ method: 'eth_requestAccounts' })
      .then((accountList) => {
        const [firstAccount] = accountList;
        // account = firstAccount;
        // walletConnected = true;
      })
      .catch((error) => {
        // walletConnected = false;
        // connectWalletError = error;
        console.log('error connecting wallet');
      });
  }
