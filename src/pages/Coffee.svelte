<script lang="ts">
    import { Button, Tooltip } from "sveltestrap";

    import DonateCoffee from "../components/DonateCoffee.svelte";

    export let address: string;
    const shortAddress =
        address.slice(0, 6) + "..." + address.slice(address.length - 4);
</script>

<div
    class="cover-container d-flex h-100 p-3 mx-auto flex-column"
    style="width: 70em;"
>
    <header class="masthead mb-auto">
        <div class="inner">
            <h3 class="masthead-brand">Buy me a Crypto Coffee</h3>
            <nav class="nav nav-masthead justify-content-center">
                <button type="button" class="btn btn-info">Share</button>
            </nav>
        </div>
    </header>
    <main class="px-3 coffee-container">
        <h3>Donate a coffee for the address</h3>
        <h4 id="address-short">{shortAddress}</h4>
        <Tooltip target="address-short" placement="bottom">
            {address}
        </Tooltip>
        <DonateCoffee {address} />
    </main>
</div>

<style>
    .coffee-container {
        max-width: 30rem;
        padding: auto;
        width: 50%;
        margin: 0 auto;
    }

    .masthead {
        margin-bottom: 2rem;
    }

    @media (min-width: 48em) {
        .masthead-brand {
            float: left;
        }
        .nav-masthead {
            float: right;
        }
    }
</style>
