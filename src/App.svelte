<script lang="ts">
	import { buyCoffee, connectWallet } from "./helpers/contract";
	import { Router, Link, Route } from "svelte-navigator";
	import DonateCoffee from "./components/DonateCoffee.svelte";
	import { Container } from "sveltestrap";
	export let name: string;
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
	/>
</svelte:head>
<main>
	<Container>
		<h1>{name}</h1>
		<p>
			Welcome to {name}!
		</p>
		<Router>
			<Route path="/">
				<h2>This is home!</h2>
				<Link to="coffee/0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266">
					Go to store
				</Link>

				<DonateCoffee address="0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266" />
			</Route>
			<Route path="coffee/:address" let:params>
				<h1>The account is {params.address}</h1>
				<DonateCoffee address={params.address} />
			</Route>
		</Router>
		<button on:click={connectWallet}>Connect Wallet!</button>
		<button on:click={() => buyCoffee}>Donate me!</button>
	</Container>
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
