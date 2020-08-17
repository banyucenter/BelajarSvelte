<script>
  import { Col, Container, Row, Button, ListGroup } from "sveltestrap";
  import NavigationBar from "./NavigationBar/NavigationBar.svelte";
  import ListItem from "./ListItem/ListItem.svelte";
  // import Card from "./Card/Card.svelte";
  // import Other from "./Other/Other.svelte";

  // let keranjang = 0
  // let harga = 1000000

  // let diskon = {
  //   diskon3 : 0.1,
  //   diskon10: 0.3
  // }

  // $: hargatotal = keranjang * harga

  // $: if(keranjang >= 10){
  //   hargatotal = keranjang * harga - keranjang * harga * diskon.diskon10
  // }else if(keranjang >=3) {
  //   hargatotal = keranjang * harga - keranjang * harga * diskon.diskon3
  // }else {
  //   hargatotal
  // }

  // function tambahKeranjang() {
  //   keranjang += 1
  // }

  const mbp = {
    produk: "Macbook Pro 2020",
    summary: "Laptop Kece badai guys",
  };
</script>

<NavigationBar />
<br />
<Container>

  <Row>
    <!-- <Col><Button on:click={tambahKeranjang}>Add to Cart</Button></Col>
    <Col> Jumlah Keranjang : {keranjang} 
      <br>Harga total : Rp. {hargatotal}</Col> -->
    <Col md="6">
      <ListGroup>
        <ListItem produk={'Macbook 2019'} summary={'laptop kece badai'} />
        <ListItem {...mbp} />
        <ListItem produk={'Lenovo 2020'} />
        <ListItem />
      </ListGroup>
    </Col>

  </Row>

</Container>
