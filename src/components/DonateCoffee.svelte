<script lang="ts">
    import { Button, Card, CardBody, Col, Input, Tooltip } from "sveltestrap";
    import { buyCoffee } from "../helpers/contract";
    export let address: string;
    let donated: boolean = false;
    let amount: number = 1;
    const donateId = "donate-btn";
    const amountInEth = 0.0001 * amount;
    console.log(amountInEth);

    async function donate() {
        await buyCoffee(address, amount);
        donated = true;
    }

    console.log(amount);
</script>

<div class="box-container">
    <Card>
        <CardBody>
            <p>Buy a ☕</p>
            <div class="row coffee-pick">
                <Col><span class="emoji">☕</span> <span class="x">x</span></Col
                >
                <Col>
                    <Input
                        type="number"
                        name="number"
                        id="exampleNumber"
                        placeholder="number placeholder"
                        value={amount}
                        style="max-width: 70px;"
                        on:input={(e) => (amount = e.target.value)}
                    />
                </Col>
                {#each [1, 3, 5] as coffeAmount}
                    <Col>
                        <Button
                            disabled={amount === coffeAmount}
                            on:click={() => (amount = coffeAmount)}
                        >
                            {coffeAmount}
                        </Button>
                    </Col>
                {/each}
            </div>
            <br />
            <h5>Selected amount: {amount / 10000} ETH</h5>
            <br/>
            <Button id={donateId} disabled={donated} on:click={donate}>
                {donated ? "Thank you for donating!" : "Donate coffee"}
            </Button>
            <Tooltip target={donateId} placement="bottom">
                This will open your MetaMask wallet
            </Tooltip>
        </CardBody>
    </Card>
</div>

<style>
    .box-container {
        border: 1px solid rgba(34, 34, 34, 0.1);
        border-radius: 8px;
        box-shadow: none;
    }

    .emoji {
        font-size: 40px;
    }

    .coffee-pick {
        justify-content: center;
        align-items: center;
    }

    .x {
        font-size: 24px;
        margin-left: 4px;
        color: silver;
    }
</style>
