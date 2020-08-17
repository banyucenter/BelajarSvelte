<script>
    import { ListGroupItem, Row, Col } from 'sveltestrap';
    export let produk ="Tidak ada merk";
    export let summary ="Informasi laptop"

</script>

<ListGroupItem tag="a" href="https://svelte.dev" action>
    <Row>
        <Col xs="2"><img src="image/mbp2019.jpg" alt="gambar" width="60"/></Col>
        <Col xs="8"><h5>{produk}</h5><p>{summary}</p></Col>
    </Row>
</ListGroupItem>