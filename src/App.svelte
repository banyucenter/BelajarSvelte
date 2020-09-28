<script>
  import { Router, Link, Route } from "svelte-routing";
  import {
    Col,
    Container,
    Row,
    Button,
    ListGroup,
    Form,
    FormGroup,
    Label,
    Input,
  } from "sveltestrap";
  import NavigationBar from "./NavigationBar/NavigationBar.svelte";
  import About from "./Page/About.svelte";
  import Home from "./Page/Home.svelte";
  import CheckBox from "./Page/CheckBox.svelte"

  export let url = "";
</script>

<Router {url}>
  <NavigationBar />
  <br />
  <Container>
    <Route path="about" component={About} />
    <Route path="checkbox" component={CheckBox} />
    <Route path="/">
      <Home />
    </Route>
  </Container>
</Router>
