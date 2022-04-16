<script lang="ts">
	import ethers from 'ethers';
import { CONTRACT_ADDRESS } from './config/contract';
import CryptoContract from './artifacts/contracts/NFT.sol/CryptoExamples.json';
	export let name: string;

	async function getAllWaves() {
    if (!window.ethereum) {
      return;
    }
    
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const wavePortalContract = new ethers.Contract(
      CONTRACT_ADDRESS,
      CryptoContract.abi,
      provider
    );

	wavePortalContract
    const recievedWaves = await wavePortalContract.getAllWaves();
    
    if (!recievedWaves) {
      waveList = [];
      return;
    }
    
    const normalizeWave = (wave) => ({
      reaction: wave.reaction,
      message: wave.message,
      waver: wave.waver,
      timestamp: new Date(wave.timestamp * 1000),
    });
    
    waveList = recievedWaves
      .map(normalizeWave)
      .sort((a, b) => b.timestamp - a.timestamp);
    console.log('waveList: ', waveList);
    return;
  }
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
	/>
</svelte:head>
<main>
	<h1>{name}</h1>
	<p>
		View and mint the beautiful collection of these {name} NFTs!
	</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
