<script lang="ts">
    import {
        Button,
        Card,
        CardBody,
        Col,
        Input,
        Row,
        Tooltip,
    } from "sveltestrap";
    import { buyCoffee } from "../helpers/contract";
    export let address: string;
    let donated: boolean = false;
    let amount: number = 1;
    const donateId = "donate-btn";

    async function donate() {
        await buyCoffee(amount);
        donated = true;
    }

    console.log(amount);
</script>

<div class="box-container">
    <Row>
        <Col>
            Buy a coffee for {address}
        </Col>
        <Col>
            <Card>
                <CardBody>
                    <p>Buy a ☕</p>
                    <Row>
                        <Col>☕ x</Col>
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
                    </Row>
                    <br />
                    <Button id={donateId} disabled={donated} on:click={donate}>
                        {donated ? "Thank you for donating!" : "Donate coffee"}
                    </Button>
                    <Tooltip target={donateId} placement="bottom">
                        This will open your MetaMask wallet
                    </Tooltip>
                </CardBody>
            </Card>
        </Col>
    </Row>
</div>

<style>
    .box-container {
        border: 1px solid rgba(34, 34, 34, 0.1);
        border-radius: 8px;
        box-shadow: none;
        max-width: 450px;
    }
</style>
