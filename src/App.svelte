<script>
  import { Col, Container, Row, Button, ListGroup,Form, FormGroup, FormText, Input, Label  } from "sveltestrap";
  import NavigationBar from "./NavigationBar/NavigationBar.svelte";
// import TableProduk from "./TableProduk/TableProduk.svelte";
// import Produk from "./TableProduk/Produk.svelte";
// import AllProduk from "./TableProduk/AllProduk.svelte";
//   import ListItem from "./ListItem/ListItem.svelte";
//   import Welcome from "./Welcome/Welcome.svelte";
// import Table from "./Table/Table.svelte";


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

  //data yang akan kita tambahkan
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

  function AddtoCart(event){
    produk.push(event.detail.data)
    produk = produk
  }

  let hargadefault = 100000

  const setHargaDefault = () => {
    hargaDefault = 100000
  }

  const inputHarga = (e) => {
    hargadefault = e.target.value
  }


</script>

<NavigationBar />
<br />
<Container>
  <Row>
    <Col>
      <Form>
        <FormGroup>
          <Label>Harga</Label>
          <!-- <Input type="number" on:input={inputHarga} value={hargadefault}/> -->
          <Input type="number" bind:value={hargadefault}/>
          <br>
          <Button on:click={setHargaDefault}>Set Default</Button>
        </FormGroup>
      </Form>
      <!-- <TableProduk produk={produk}/> -->
    </Col>
    <Col>
      <Row>
        <div>
          <p>Harga Produk:</p>
          <h4>Rp. {hargadefault}</h4>
        </div>
        <!-- <AllProduk on:toCart={AddtoCart} produk={databaru}/> -->
      </Row>
    </Col>
  </Row>
  <!-- <Welcome role={user.role} user={user.username}/>
  <Table/>
  
  <Row>
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
