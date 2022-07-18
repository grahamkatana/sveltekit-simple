/** @type {import('@sveltejs/kit').Load}*/
export async function GET(page){
    const url = "https://api.spoonacular.com/recipes/complexSearch?apiKey=50f6053b3a2647e3974c4dc96aeba5f6"
    const result = await fetch(url);
    if(result.ok){
        const { results } = await result.json();
        return{
            body:{recipes:results}
        }
    }
    return {
        status:404,
        body:{error:'Failed to fetch results'}
    }
   

}