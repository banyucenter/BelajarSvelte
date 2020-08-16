<script>

	import Other from './Other/Other.svelte'

	let name = "Jack Ma"
	let skill = {
		namaSkill : ["Svelte", "PHP", "ReactJs", "VueJS"],
		ratingSkill : 80
	}

	let imageURL = "image/logosvelte.png"
	
</script>

<main>
	<h2>Welcome, <span class="nama">{name}</span></h2>
	<hr>
	<p>Skill : <b>{skill.namaSkill[0]} dan {skill.namaSkill[3]} </b></p>
	<p>Rating: {skill.ratingSkill}</p>
	<img src="{imageURL}"alt="Logo Svelte" width="300"/>
	<Other/>
</main>



<style>
	.nama {
		color: red;
		font-family: "Times New Roman", Times, serif;
	}
</style>