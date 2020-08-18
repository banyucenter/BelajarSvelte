<script>
  import { Col, Container, Row, Button, ListGroup } from "sveltestrap";
  import NavigationBar from "./NavigationBar/NavigationBar.svelte";
  import ListItem from "./ListItem/ListItem.svelte";
  import Welcome from "./Welcome/Welcome.svelte";

  const newlaptop = {
    produk: "Asus Gaming",
    desc: "Laptop Gaming Keren",
  };

  let user = {
    username : "Ipung Dev",
    role: 1
  }

</script>

<NavigationBar />
<br />
<Container>
  <Welcome role={user.role} user={user.username}/>
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
  </Row>

</Container>
