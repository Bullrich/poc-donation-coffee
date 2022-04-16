<script lang="ts">
	import {buyCoffee, connectWallet }from './helpers/contract';
		export let name: string;
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
		Welcome to {name}!
	</p>
	<button on:click={connectWallet}>Connect Wallet!</button>
	<button on:click={buyCoffee}>Donate me!</button>
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
