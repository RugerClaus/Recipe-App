const today = new Date()
const home = document.getElementById('home')
const newRecipe = document.getElementById('newRecipe')
const categories = document.getElementById('categories')
const listOfRecipes = []
const ingredientList = document.getElementById("dynamicIngredientList")


const colors = {
    sunday: () => {
        ingredientList.style.border = '3px solid blue'
        banner.style.backgroundColor = 'blue'
        banner.style.color = 'White'
    },
    monday: () => {
        ingredientList.style.border = '3px solid green'
        banner.style.backgroundColor = 'white'
        banner.style.color = 'black'
    },
    tuesday: () => {
        ingredientList.style.border = '3px solid pink'
        banner.style.backgroundColor = 'red'
        banner.style.color = 'White'
    },
    wednesday: () => {
        ingredientList.style.border = '3px solid red'
        banner.style.backgroundColor = 'green'
        banner.style.color = 'White'
    },
    thursday: () => {
        ingredientList.style.border = '3px solid magenta'
        banner.style.backgroundColor = 'black'
        banner.style.color = 'White'
    },
    friday: () => {
        ingredientList.style.border = '3px solid burgundy'
        banner.style.backgroundColor = 'yellow'
        banner.style.color = 'black'
    },
    saturday: () => {
        ingredientList.style.border = '3px solid orange'
        banner.style.backgroundColor = 'lime-green'
        banner.style.color = 'White'
    }
}

const header = () => {

    

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
        const ingredientsUnit = document.getElementById('ingredientsUnit')
        const unit = ingredientsUnit.options[ingredientsUnit.selectedIndex].value // gets the value of the selected option
        

        console.log(category, name, ingredientAmount, ingredientsUnit, unit)

        const newRecipe = {
            category: category,
            name: name,
            ingredientAmount: ingredientAmount,
            unit: unit // now shows selected option instead of an object
        }
        listOfRecipes.push(newRecipe)

        // document.getElementById("currentList").innerHTML = JSON.stringify(listOfRecipes)

        appendIngredient(newRecipe)
        document.getElementById('newRecipeForm').reset()
    })

    const appendIngredient = (recipe) => {
        
        const li1 = document.createElement("li")
        li1.className = 'child1'
        const li2 = document.createElement("li")
        li2.className = 'child2'
        const li3 = document.createElement("li")
        li3.className = 'child3'
        const li4 = document.createElement("li")
        li4.className = 'child4'
        const amountOutcome = document.createTextNode(`Amount: ${recipe.ingredientAmount} ${recipe.unit}`)
        const nameOutcome = document.createTextNode(`Name: ${recipe.name}`)
        const categoryOutcome = document.createTextNode(`Category: ${recipe.category}`)
        const separator = document.createTextNode("--------------------------------")


        const listEntry = document.createElement("ul")
        listEntry.className = 'listEntries'
        listEntry.appendChild(li1).appendChild(categoryOutcome) // implemented template literals to clean up the code a bit
        listEntry.appendChild(li2).appendChild(nameOutcome) // implemented template literals to clean up the code a bit
        listEntry.appendChild(li3).appendChild(amountOutcome) // implemented template literals to clean up the code a bit
        listEntry.appendChild(li4).appendChild(separator)
        ingredientList.append(listEntry)
    }
}

const footer = () => {
    const footer = document.getElementById('footer')
    const footerText = `Copyright &copy; Recipays ${today.getFullYear()}`
    footer.innerHTML = `${footerText}`
}

header()
content()
footer()