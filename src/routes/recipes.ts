/** @type {import('@sveltejs/kit').Load}*/
export async function GET(page){
    const apiKey = import.meta.env.VITE_SPOONACULAR_API
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`
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