<script lang="ts">
    import { Tooltip } from "sveltestrap";
    import DonateCoffee from "../components/DonateCoffee.svelte";
    import ShareModal from "../components/ShareModal.svelte";

    export let address: string;
    const shortAddress = `${address.slice(0, 6)}...${address.slice(
        address.length - 4
    )}`;
    let open = false;
    const toggle = () => (open = !open);
</script>

<div
    class="cover-container d-flex h-100 p-3 mx-auto flex-column"
    style="width: 70em;"
>
    <header class="masthead mb-auto">
        <div class="inner">
            <h3 class="masthead-brand">Buy me a Crypto Coffee</h3>
            <nav class="nav nav-masthead justify-content-center">
                <button type="button" class="btn btn-info" on:click={toggle}
                    >Share</button
                >
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
        <ShareModal {open} {address} />
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
