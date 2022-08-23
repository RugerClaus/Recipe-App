const today = new Date()
const home = document.getElementById('home')
const newRecipe = document.getElementById('newRecipe')
const categories = document.getElementById('categories')
const listOfRecipes = []


const header = () => {

    const colors = {
        sunday: () => {
            banner.style.backgroundColor = 'blue'
            banner.style.color = 'White'
        },
        monday: () => {
            banner.style.backgroundColor = 'white'
            banner.style.color = 'black'
        },
        tuesday: () => {
            banner.style.backgroundColor = 'red'
            banner.style.color = 'White'
        },
        wednesday: () => {
            banner.style.backgroundColor = 'green'
            banner.style.color = 'White'
        },
        thursday: () => {
            banner.style.backgroundColor = 'black'
            banner.style.color = 'White'
        },
        friday: () => {
            banner.style.backgroundColor = 'yellow'
            banner.style.color = 'black'
        },
        saturday: () => {
            banner.style.backgroundColor = 'purple'
            banner.style.color = 'White'
        }
    }

    const banner = document.getElementById('banner')
    switch (today.getDay()){
        case 0: 
            colors.sunday()
            break
        case 1: 
            colors.monday()
            break
        case 2: 
            colors.tuesday()
            break
        case 3:
            colors.wednesday()
            break
        case 4:
            colors.thursday()
            break
        case 5:
            colors.friday()
            break
        case 6:
            colors.saturday()
            break
    }
    const menu = () => {
        const menuButton = document.getElementById('navigation')
        const navigation = document.getElementById('navMenu')
        menuButton.addEventListener('click', () => {
            navigation.style.display = "block"
        })
        document.querySelector('.content').addEventListener('click', () => {
            navigation.style.display = 'none'
        })
        const buttons = document.querySelectorAll('.button')
        const homeButton = document.getElementById('homeButton')
        const newRecipeButton = document.getElementById('newRecipeButton')
        const categoriesButton = document.getElementById('categoriesButton')
        
        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                if (button == homeButton){
                    home.style.display = 'block'
                    newRecipe.style.display = 'none'
                    categories.style.display = 'none'
                }
                else if (button == newRecipeButton){
                    newRecipe.style.display = 'grid'
                    home.style.display = 'none'
                    categories.style.display = 'none'
                }
                else if (button == categoriesButton){
                    categories.style.display = 'block'
                    home.style.display = 'none'
                    newRecipe.style.display = 'none'
                }
            })
        })
        
    }
    menu()
}

const content = () => {
    window.onload = () => {
        home.style.display = 'block'
        newRecipe.style.display = 'none'
        categories.style.display = 'none'
    }
    document.getElementById("newRecipeForm").addEventListener('submit', (e) => {
        e.preventDefault()
        const category = document.getElementById('category').value
        const name = document.getElementById('name').value
        const ingredientAmount = document.getElementById('amount').value
        const ingredientsUnits = document.getElementById('ingredientsUnit')
        const value = ingredientsUnits.options[ingredientsUnits.selectedIndex].value
        

        console.log(category, name, ingredientAmount, ingredientsUnits)

        const newRecipe = {
            category: category,
            name: name,
            ingredientAmount: ingredientAmount,
            value: value
        }
        listOfRecipes.push(newRecipe)

        // document.getElementById("currentList").innerHTML = JSON.stringify(listOfRecipes)

        appendIngredient(newRecipe)
        document.getElementById('newRecipeForm').reset()
    })

    const appendIngredient = (recipe) => {
        const listEntry = document.createElement("li")
            .appendChild(document.createElement("ul"))
        listEntry.appendChild(document.createElement("li"))
            .appendChild(document.createTextNode(`Category: ${recipe.category}`)) // implemented template literals to clean up the code a bit
        listEntry.appendChild(document.createElement("li"))
            .appendChild(document.createTextNode(`Name: ${recipe.name}`)) // implemented template literals to clean up the code a bit
        listEntry.appendChild(document.createElement("li"))
            .appendChild(document.createTextNode(`Ingredients: ${recipe.ingredientAmount} ${recipe.value}`)) // implemented template literals to clean up the code a bit
        listEntry.appendChild(document.createElement("li"))
            .appendChild(document.createTextNode("--------------------------------"))
        document.getElementById("dynamicIngredientList").appendChild(listEntry)
    }
}

const footer = () => {
    const footer = document.getElementById('footer')
    footer.innerHTML = `Copyright &copy; Recipays ${today.getFullYear()}`
}

header()
content()
footer()