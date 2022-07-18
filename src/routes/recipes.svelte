<script>
	export let recipes = [];
</script>
<h1 class="text-2xl text-center mb-10 mt-10">Food Recipes</h1>
<div class="grid grid-cols-3 gap-4">
	{#each recipes as item}
	<a class="relative"  href={`/recipes/${item.id}`}>
		<p class="text-sm absolute font-bold text-center mt-20 inset-x-0 text-white">{item.title}</p>
		<img class="rounded shadow-md" src={item.image} alt={item.title} />
	</a>
{/each}
</div>
