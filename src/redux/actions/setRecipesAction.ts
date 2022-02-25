export const setRecipesAction = (recipes:any[]) =>{
        return {
            type : 'SET_RECIPES',
            payload : recipes
        }
}
export const setSelectedRecipeAction = (recipe:any) =>{
    return {
        type : 'SET_SELECTED_RECIPES',
        payload : recipe
    }
}