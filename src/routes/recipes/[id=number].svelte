<script>
	export let recipe = '';
	console.log(recipe);
	// https://api.spoonacular.com/recipes/{id}/information?apiKey=50f6053b3a2647e3974c4dc96aeba5f6
</script>

<h1 class="text-2xl text-center mb-10 mt-10">{recipe.title}</h1>
<div class="flex justify-between">
	<img width="600" class="rounded-lg shadow-sm" src={recipe.image} alt={recipe.title} />
	<div class="ml-10">
		<div>
			<h2 class="text-xl font-bold">Ingredients</h2>
			{#each recipe.extendedIngredients as ingredient}
				<p class="text-gray-600 text-sm">{ingredient.name}</p>
			{/each}
		</div>

		<div>
			<h2 class="text-xl font-bold">Cuisine</h2>
			{#each recipe.cuisines as cuisine}
				<p class="text-gray-600 text-sm">{cuisine}</p>
			{/each}
		</div>
	</div>
</div>
