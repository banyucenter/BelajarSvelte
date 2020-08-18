<script>
  import { Button, Jumbotron } from "sveltestrap";

  export let role = 3;
  export let user = "User";
</script>

<Jumbotron>
  <h1 class="display-3">Hello, {user}!</h1>
  <p class="lead">
    This is a simple hero unit, a simple Jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <hr class="my-2" />
  <p>
    It uses utility classes for typography and spacing to space content out
    within the larger container.
  </p>

  {#if role == 1}
    <p class="lead">
      <Button color="danger">Admin Panel</Button>
    </p>
  {:else if role == 2}
    <p class="lead">
      <Button color="success">Member Panel</Button>
    </p>
  {:else}
    <p class="lead">
      <Button color="primary">Publik Panel</Button>
    </p>
  {/if}

</Jumbotron>
