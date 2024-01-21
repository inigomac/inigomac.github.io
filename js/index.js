// index.js
// Voy dividiendo en bloques con las acciones que voy haciendo
// Estructura:
// - Bloque 1: menu desplegable header
// - Bloque 2: scroll automatico con boton
// - Bloque 3: eliminar div al cargar pagina

"use strict"

// BLOQUE 1: menu desplegable header
// Cuando haga CLICK sobre .header__btn , .header__nav LE TOGGLE active

// Selección del boton del header
const  headerBtn = document.querySelector(".header__btn")
// Selección del menu de navegación
const  headerNav = document.querySelector(".header__nav")

// Cuando hago click sobre header boton
headerBtn.addEventListener( "click" , () => {
    // Le añadimos la clase active a header nav
    headerNav.classList.toggle("active")
} )


console.log( headerNav )
console.log( headerBtn )






// BLOQUE 2: scroll automático con boton
// Cuando haga click en .video__button, quiero hacer scroll hasta .main__np

// Seleccion del boton que quiero clickar
const videoButton = document.querySelector(".video__button")
// Selección del div que quiero hacer scroll hasta el
const mainNp      = document.querySelector(".main__np")


videoButton.addEventListener( "click" , () => {
    // Esta propiedad no sabia como hacerla, por eso la busque en foros de internet y luego pedi a Chatgpt que me la explicase. Es bastante sencilla de entender asi como sus valores. En este caso utilize behavior porque queria que fuese un desplazamiento suave. seleccione la sección que queria que me bajase, que en este caso en la .main__np
    mainNp.scrollIntoView({
        behavior: "smooth"
    })
})

console.log( videoButton )
console.log( mainNp )




// BLOQUE 3: eliminar el div al cargar la página
// Cuando haga click en loading__btn,
    // Se le add la clase up a .loading__btn
    // se le add la clase now a .loading
    // se le add la clase color a .btn__span

// Quiero que cuando se toque ese boton, se desactive esa etiqueta

// Elemento boton del div loading
let loadingBtn = document.querySelector(".loading__btn")
// Seleccion del div loading
let loading = document.querySelector(".loading")
// Selección del texto del boton
let btnSpan = document.querySelector(".btn__span")

    // Cuando hacemos click en loading buton, se ejecuta la siguiente funcion
    loadingBtn.addEventListener( "click" , () => {
        loadingBtn.classList.add("up")
        loading.classList.add("now")
        btnSpan.classList.add("color")
        
        
        // Para que luego puedan funcionar los botones, he decidido eliminar la etiqueta directamente una vez que pulsamos sobre ella.
        // Para ello, utilizamos la funcion setTimeout con una duración de 3s despues de hacer click sobre el boton.
        setTimeout(() => {
            // Con el parentNode accedemos a la etiqueta que queremos situarnos para eliminar,
                // Removechild, le eliminamos el hijo del "nodo" loading
            loading.parentNode.removeChild(loading);
        }, 2200);
    })


console.log( loadingBtn )
console.log( loading )
console.log( btnSpan )



