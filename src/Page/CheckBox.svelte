<script>
    let yes = false

    let hobi = [""]

    const join = () => {
        hobi.push(hobi)
        return hobi
    }

</script>

<h2>Hobi Kamu adalah</h2>

<label>
    <input type="checkbox" bind:group={hobi} value="Ngoding">Ngoding
</label>
<label>
    <input type="checkbox" bind:group={hobi} value="Main Game">Main Game
</label>
<label>
    <input type="checkbox" bind:group={hobi} value="Bulu Tangkis">Bulu Tangkis
</label>

<p>Hobi Kamu adalah: </p>
<p>{join(hobi)}</p>

<!-- <label>
    <input type="checkbox" bind:checked={yes}> Subscribe Channel Saya!
</label>

{#if yes}
<p>Terimakasih</p>
{:else}
<p>Yaaah :(</p>
{/if} -->