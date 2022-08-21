const today = new Date()

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
    }
    menu()
}

const content = () => {
    
}

const footer = () => {
    const footer = document.getElementById('footer')
    footer.innerHTML = `Copyright &copy; Recipays ${today.getFullYear()}`
}




header()
content()
footer()