<script lang="ts">
    import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
    } from "sveltestrap";

    export let open = false;
    let copyBtnText = "Copy link";
    let copied: boolean;
    const toggle = () => (open = !open);

    const copyToClipboard = () => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(window.location.href);
            copied = true;
            copyBtnText = "Copied!"
        } else {
            copyBtnText = "Error! Can not copy";
        }
    };
</script>

<Modal isOpen={open} {toggle}>
    <ModalHeader {toggle}>Share with your friends 🎉</ModalHeader>
    <ModalBody>Copy the link and share it with your friends!</ModalBody>
    <ModalFooter>
        <Button color="primary" on:click={copyToClipboard}>
            {copyBtnText}
        </Button>
        <Button color="secondary" on:click={toggle}>Cancel</Button>
    </ModalFooter>
</Modal>
