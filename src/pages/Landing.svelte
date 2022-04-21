<script lang="ts">
    import { connectWallet } from "src/helpers/contract";
    import { Link } from "svelte-navigator";

    import { Button, Tooltip } from "sveltestrap";

    let loading = false;
    let account: string | null;

    async function fetchAccount() {
        loading = true;
        const accounts = await connectWallet();
        account = accounts[0];
    }
</script>

<div
    class="cover-container d-flex h-100 p-3 mx-auto flex-column"
    style="width: 70em;"
>
    <header class="masthead mb-auto">
        <div class="inner">
            <h3 class="masthead-brand">Buy me a Crypto Coffee</h3>
        </div>
    </header>
    <main class="px-3 coffee-container">
        <h3>Register your account and receive donations!</h3>
        {#if !account}
            <Button disabled={loading} on:click={fetchAccount}>Register!</Button
            >
        {:else}
            Your account is ready. Go to <Link to={`/coffee/${account}`}
                >/coffee/{account}</Link
            > for your page.
        {/if}
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
