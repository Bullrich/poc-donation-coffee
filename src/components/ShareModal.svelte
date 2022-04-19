<script lang="ts">
    import {
        Button,
        Modal,
        ModalBody,
        ModalFooter,
        ModalHeader,
        Tooltip,
    } from "sveltestrap";

    export let address: string;
    export let open = false;
    let copied: boolean;
    const toggle = () => (open = !open);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(
            `https://localhost:5001/coffee/${address}`
        );
        copied = true;
    };
</script>

<Modal isOpen={open} {toggle}>
    <ModalHeader {toggle}>Share with your friends 🎉</ModalHeader>
    <ModalBody>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
    </ModalBody>
    <ModalFooter>
        <Button color="primary" on:click={copyToClipboard}>
            {copied ? "Copied!" : "Copy link"}
        </Button>
        <Button color="secondary" on:click={toggle}>Cancel</Button>
    </ModalFooter>
</Modal>
