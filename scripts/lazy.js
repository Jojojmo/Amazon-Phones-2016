const lazLoading = () => {
    const listaElementos = document.querySelectorAll("[data]")

    listaElementos.forEach((elemento) => {
        if (elemento.getBoundingClientRect().top < window.innerHeight) {
            elemento.src = elemento.getAttribute("data")
            elemento.removeAttribute("data")
        }

    })
}
// window.onload = () => {
//     lazLoading()
// }
window.onscroll = ()=> {
    lazLoading()
}

// fonte do codigo: https://www.youtube.com/watch?v=Un3R2HReu5E