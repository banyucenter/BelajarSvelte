<script >
    import { Table, Button } from 'sveltestrap';
    //props
    export let produk

  </script>

  <h2>List Produk</h2>

  <Table>
    <thead>
      <tr>
        <th>#</th>
        <th>Produk</th>
        <th>Harga</th>
      </tr>
    </thead>
    <tbody>
    {#each produk as p,i (p.id)}
      <tr>
        <th scope="row">{i + 1}</th>
        <td>{p.produk}</td>
        <td>{p.harga}</td>
      </tr>
      {:else}
      <br>
      <p>Data tidak ditemukan!</p>
    {/each} 
    </tbody>
  </Table>