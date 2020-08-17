<script>
  // import Other from "./Other/Other.svelte";
  import NavigationBar from "./NavigationBar/NavigationBar.svelte";
  import {
    Col,
    Container,
    Row,
    Button,
    Card,
    CardTitle,
    CardSubtitle,
    CardBody,
    CardImg,
    Alert,
  } from "sveltestrap";

  let keranjang = 0;
  let harga = 10000000;
  let diskon = {
    lebihdari3: 0.1,
    lebihdari5: 0.5,
  };

  //deklaratif
  $: hargatotal = keranjang * harga;

  $: if (keranjang >= 5) {
    hargatotal = keranjang * harga - keranjang * harga * diskon.lebihdari5;
  } else if (keranjang >= 3) {
    hargatotal = keranjang * harga - keranjang * harga * diskon.lebihdari3;
  } else {
    hargatotal 
  }

  function handleClick() {
    keranjang += 1;
  }
</script>

<style>
  /* .nama {
    color: red;
  } */
</style>

<NavigationBar />
<br />
<Container>
  <h2>Pembelian Produk</h2>
  <hr />
  <Row>

    <Col xs="4">
      <Card>
        <br />
        <CardImg
          src="image/mbp2019.jpg"
          alt="Card image cap"
          width="300"
          class="mb-3" />
        <CardBody>
          <CardTitle class="mb-3">
            <h2>Macbook Pro 2020</h2>
          </CardTitle>
          <Alert color="danger">Selamat mendapatkan Diskon 10%</Alert>
          <CardSubtitle>Best Laptop in 2020</CardSubtitle>
          <br />
          <CardSubtitle class="mb-3">
            <b>Harga Rp. {harga}</b>
          </CardSubtitle>
          <Button color="primary" on:click={handleClick}>Add to Cart</Button>
        </CardBody>
      </Card>

    </Col>
    <Col xs="3">
      <Card body color="light" class="mb-3">Jumlah pesanan: {keranjang}</Card>
      <Card body color="primary" class="mb-3" inverse>
        Harga Sebelum Diskon: {hargatotal}
      </Card>
      <Card body color="danger" inverse>
        Harga Setelah Diskon : {hargatotal}
      </Card>

    </Col>
  </Row>
</Container>
