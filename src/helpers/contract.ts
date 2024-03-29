import { ethers } from "ethers";
import { CONTRACT_ADDRESS } from "src/config/contract";
import CryptoContract from "../artifacts/contracts/BuyCoffee.sol/BuyCoffee.json";
import type { BuyCoffee } from "../contracts";

export async function buyCoffee(address: string, nrOfCoffees: number = 1): Promise<ethers.ContractTransaction> {
    console.log("getting coffee!");
    if (!window.ethereum) {
        console.log('no ethereum!');
        return;
    }

    await window.ethereum.request({ method: 'eth_requestAccounts' });

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const coffeeContract = new ethers.Contract(
        CONTRACT_ADDRESS,
        CryptoContract.abi,
        provider.getSigner()
    ) as BuyCoffee;

    const tx = await coffeeContract.donate(
        "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
        { value: multiply(nrOfCoffees) }
    );

    return tx;
}

const coffeePrice = ethers.utils.parseEther("0.0001");

function multiply(mul: number): ethers.BigNumber {
    return coffeePrice.mul(mul);
}

export async function connectWallet(): Promise<string[]> {
    const { ethereum } = window;
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    return accounts;
}
