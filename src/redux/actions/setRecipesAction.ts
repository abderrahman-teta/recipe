export const setRecipesAction = (recipes:any[]) =>{
        return {
            type : 'SET_RECIPES',
            payload : recipes
        }
}