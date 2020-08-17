<script>
  import Other from "./Other/Other.svelte";
  import NavigationBar from "./NavigationBar/NavigationBar.svelte";
  import { Col, Container, Row } from "sveltestrap";

  let name = "Jack Ma";
  let skill = {
    namaSkill: ["Svelte", "PHP", "ReactJs", "VueJS"],
    ratingSkill: 80,
  };

  let imageURL = "image/logosvelte.png";
</script>

<style>
  .nama {
    color: red;
  }
</style>

<NavigationBar />
<Container>
  <main>

    <h2>
      Welcome,
      <span class="nama">{name}</span>
    </h2>
    <hr />
    <p>
      Skill :
      <b>{skill.namaSkill[0]} dan {skill.namaSkill[3]}</b>
    </p>
    <p>Rating: {skill.ratingSkill}</p>
    <img src={imageURL} alt="Logo Svelte" width="300" />

    <!--Other komponen-->
    <Other />
  </main>
</Container>
