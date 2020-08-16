<script>
	 let name = "Ipung DEV"
	 let imgURL = 'image/svelte.png'

	 let skill = {
		 namaSkill : ['ReactJS', 'SvelteJS', 'PHP'],
		 rateSkill : 8
	 }

</script>

<main>
<h2>Hello {name}</h2>
<img src="{imgURL}" alt="logo" width="300"/>
<p> Skill Utama : {skill.namaSkill[0]} dan Rate {skill.rateSkill}</p>
</main>

<style>
	
</style>