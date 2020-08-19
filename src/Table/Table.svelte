<script >
    import { Table, Button } from 'sveltestrap';

    //data dummy
    let user = [
        {
            id: 'uud1',
            firstname: 'Joko',
            lastname: 'Harris',
            username: 'joe'
        },
        {
            id: 'uud2',
            firstname: 'Rich',
            lastname: 'Harris',
            username: 'rich'
        },
        {
            id: 'uud3',
            firstname: 'Jane',
            lastname: 'Harris',
            username: 'jane'
        }
    ]

    const hapusData = (id) => {
        console.log(id)
        user = user.filter((u)=>u.id !=id)
    }
  </script>
  
  <Table>
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
        <th>Aksi</th>
      </tr>
    </thead>
    <tbody>
    {#each user as u,i (u.id)}
      <tr>
        <th scope="row">{i + 1}</th>
        <td>{u.firstname}</td>
        <td>{u.lastname}</td>
        <td>{u.username}</td>
        <td><Button on:click={()=>hapusData(u.id)}>Hapus</Button></td>
      </tr>
      {:else}
      <br>
      <p>Data tidak ditemukan!</p>
    {/each} 
    </tbody>
  </Table>