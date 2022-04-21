<script lang="ts">
	import { Route,Router } from "svelte-navigator";
	import Coffee from "./pages/Coffee.svelte";
	import Landing from "./pages/Landing.svelte";
	export let name: string;
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
	/>
</svelte:head>
<main>
	<Router>
		<Route path="/">
			<Landing />
		</Route>
		<Route path="coffee/:address" let:params>
			<Coffee address={params.address} />
		</Route>
	</Router>
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
