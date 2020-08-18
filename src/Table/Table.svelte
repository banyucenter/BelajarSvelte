<script>
    import { Table } from 'sveltestrap';

    let user = [
        {
            id: 'uuid1',
            firstname: 'Jay',
            lastname: 'Harris',
            username: 'jay16'
        },
        {
            id: 'uuid2',
            firstname: 'Rick',
            lastname: 'Harris',
            username: 'jay16'
        },
        {
            id: 'uuid3',
            firstname: 'Chuck',
            lastname: 'Harris',
            username: 'jay16'
        }
    ]

  </script>
  
  <h2>Table User</h2>
  <Table>
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
        <!-- {#each user as u} -->
        {#each user as u, i  }
      <tr>
        <th scope="row">{i+1} : {u.id}</th>
        <td>{u.firstname}</td>
        <td>{u.lastname}</td>
        <td>{u.username}</td>
      </tr>
      {:else}
      <p>Tidak ada data!</p>
      {/each}
    </tbody>
  </Table>