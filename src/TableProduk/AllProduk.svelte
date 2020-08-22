<script>

import { Col } from "sveltestrap";
import Produk from "./Produk.svelte";

export let produk

</script>

<Col>
    <Produk on:toCart produk={produk[0]}/>
  </Col>
  <Col>
    <Produk on:toCart produk={produk[1]}/>
  </Col>