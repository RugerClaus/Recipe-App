const today = new Date()
const home = document.getElementById('home')
const newRecipe = document.getElementById('newRecipe')
const categories = document.getElementById('categories')


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
}

const footer = () => {
    const footer = document.getElementById('footer')
    footer.innerHTML = `Copyright &copy; Recipays ${today.getFullYear()}`
}

header()
content()
footer()