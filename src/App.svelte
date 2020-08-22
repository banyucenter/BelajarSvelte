<script>
  import { Col, Container, Row, Button, ListGroup } from "sveltestrap";
  import NavigationBar from "./NavigationBar/NavigationBar.svelte";
  import ListItem from "./ListItem/ListItem.svelte";
  import Welcome from "./Welcome/Welcome.svelte";
  import Table from "./Table/Table.svelte";
  import TableProduk from "./TableProduk/TableProduk.svelte";
  import Produk from "./Table/Produk.svelte";
  // const newlaptop = {
  //   produk: "Asus Gaming",
  //   desc: "Laptop Gaming Keren",
  // };

  // //data user dummy
  // let user = {
  //   username: "Ipung",
  //   role: 3
  // }

  //data dummy
  let produk = [
    {
      id: "uuid1",
      produk: "Macbook Pro Mid 2020",
      harga: 30000000,
    },
    {
      id: "uuid2",
      produk: "Surface Pro 2020",
      harga: 27000000,
    },
    {
      id: "uuid3",
      produk: "Azus ROG Gaming",
      harga: 35000000,
    },
  ];

  //data baru
  let databaru = [
    {
        id: "uuid4",
        produk: "HP Pavillion",
        harga: 25000000,
    },
    {
        id: "uuid5",
        produk: "HP Monster",
        harga: 35000000,
    }
  ]
    

  function AddtoCart(event) {
    produk.push(event.detail.data)
    produk = produk
  }

</script>

<NavigationBar />
<br />
<Container>
  <!-- <Welcome role={user.role} user={user.username}/> -->
  <!-- <Table/> -->
  <Row>
    <Col>
      <TableProduk produk={produk} />
    </Col>
    <Col>
      <h2>Data Produk</h2>
      <hr />
      <Row>
        <Col>
          <Produk on:toCart={AddtoCart} produk={databaru[0]}/>
        </Col>
        <Col>
          <Produk on:toCart={AddtoCart} produk={databaru[1]} />
        </Col>
        
      </Row>
    </Col>
  </Row>

  <!-- <Row>
    <Col>
      <ListGroup>
        <ListItem produk={'Macbook Pro 2020'} desc={'Ini adalah laptop'} />
        <ListItem produk={'Dell Mountain 2020'} />
        <ListItem {...newlaptop} />
        <ListItem />
        <ListItem />
      </ListGroup>
    </Col>
  </Row> -->

</Container>
