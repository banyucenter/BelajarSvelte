<script>
  import { Col, Container, Row, Button, ListGroup } from "sveltestrap";
  import NavigationBar from "./NavigationBar/NavigationBar.svelte";
  import ListItem from "./ListItem/ListItem.svelte";
import Welcome from "./Welcome/Welcome.svelte";
import Table from "./Table/Table.svelte";

  const newlaptop = {
    produk: "Asus Gaming",
    desc: "Laptop Gaming Keren",
  };

  //data user dummy
  let user = {
    username: "Ipung",
    role: 3
  }

</script>

<NavigationBar />
<br />
<Container>
  <Welcome role={user.role} user={user.username}/>
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
  </Row>

</Container>
