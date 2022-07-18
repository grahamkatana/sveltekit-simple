/** @type {import('@sveltejs/kit').Load}*/
export async function GET(page){
    const apiKey = import.meta.env.VITE_SPOONACULAR_API
    const url = `https://api.spoonacular.com/recipes/${page.params.id}/information?apiKey=${apiKey}`
    const result = await fetch(url);
    if(result.ok){
        const data = await result.json();
        return{
            body:{recipe:data}
        }  
    }
    return {
        status:404,
        body:{error:'Failed to fetch results'}
    }  

}