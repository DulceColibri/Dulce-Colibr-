let previousTitle = document.title

window.addEventListener('blur', () => {
    let previousTitle = document.title
    document.title = '¡No te vallas! ¡Vuelve! '
} )

window.addEventListener('focus', () => {
    document.title = previousTitle
})

