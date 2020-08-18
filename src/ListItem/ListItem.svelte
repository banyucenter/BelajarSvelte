<script>
  import { ListGroupItem, Row, Col } from "sveltestrap";
  export let produk = "Tidak ada merk";
  export let desc ="Tidak ada deskripsi";
</script>

<ListGroupItem>
  <Row>
    <Col>
      <img src="image/mbp2019.jpg" alt="gambar ini" width="100" />
    </Col>
    <Col>
      <h5>{produk}</h5>
      <p>{desc}</p>
    </Col>
  </Row>
</ListGroupItem>
