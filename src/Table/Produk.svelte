<script lang="ts">
  import {
    Card,
    CardBody,
    Button,
    CardSubtitle,
    CardText
  } from "sveltestrap";
  import { createEventDispatcher } from "svelte";

  //jadikan property
  export let produk: { produk: any; harga: any; } 

  //buat dispatch
  const dispatch = createEventDispatcher();

  //fungsi tambah keranjang dengan dispatch
  function addCart() {
    dispatch("toCart", {
      data: produk,
    });
  }
</script>

<Card>
  <CardBody>
    <img src="image/mbp2019.jpg" alt="macbook" />
    <br />
    <br />
    <CardSubtitle>
      <b>{produk.produk}</b>
    </CardSubtitle>
    <CardText>Rp.{produk.harga}</CardText>
    <Button on:click={addCart}>Add to Cart</Button>
  </CardBody>
</Card>
