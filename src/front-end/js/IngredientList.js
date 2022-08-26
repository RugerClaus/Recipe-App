import newItem from "./SetItem"


export default class IngredientList {
    constructor(name) {
        id = newItem()
        this.name = name
        this.ingredients = []
        
    }
    static createRecipeList(rawRecipeList){
        const recipeList = Object.assign(new IngredientList(), {
            id: rawRecipeList.id,
            title: rawRecipeList.title
        })
        rawRecipeList.ingredients.forEach((ingredient) )
    }
    
}