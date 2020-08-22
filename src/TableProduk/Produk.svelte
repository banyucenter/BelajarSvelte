<script>
    import {
        Card, CardBody, Button, CardSubtitle,CardText
    } from 'sveltestrap'

    export let produk 

    import {createEventDispatcher} from "svelte"

    const dispatch = createEventDispatcher()

    function addCart() {
        dispatch("toCart", {
            data: produk
        })
    }

</script>

<Card>
    <CardBody>
        <img src="image/mbp2019.jpg" alt="macbook"/>
        <br><br>
        <CardSubtitle>
            <b>{produk.produk}</b>
        </CardSubtitle>
        <CardText>Rp. {produk.harga}</CardText>
        <Button on:click={addCart}>Add to Cart</Button>
    </CardBody>
</Card>