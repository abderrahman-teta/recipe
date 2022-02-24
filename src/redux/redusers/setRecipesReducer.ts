
type Action = {type:string , payload:[]}
export const setRecipesReducer = (state:any = {recipes :[]}, action :Action ) => {
    const {type,payload } = action
    switch (type) {
        case 'SET_RECIPES':
            return {...state.recipes,recipes : [...state.recipes,payload]}
            break;
    
        default:
            return state
            break;
    }
}