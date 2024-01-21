// productos.js
// Voy dividiendo en bloques con las acciones que voy haciendo
// Estructura:
// - Bloque 1: menu desplegable header
// - Bloque 2: Carrousel con flechas
// - Bloque 3: Carrousel con puntos
// - Bloque 4: ancho del carrousel con puntos
// - Bloque 5: navegación y scroll por la web

'use strict'

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




// BLOQUE 2: carrousel con flechas


// Selecciono la flecha de avanzar
let flechaNext = document.querySelector(".flecha__next");
// Selecciono la flecha de retroceder
let flechaPrevious = document.querySelector(".flecha__previous");
// Selecciono el carrousel entero
let carrouselDiv = document.querySelector(".carrousel__div");
// Nombramos la variable index con el valor 0
let carrouselIndex = 0; 
// Selecciono todos los carrouseles individuales (los 4 que tengo) 
const carrouselEach = document.querySelectorAll(".carrousel__each");

// Cuando haga click sobre la fecha next se ejecute la siguiente funcion con un condicional
flechaNext.addEventListener("click", () => {
   // sirve para comprobar si estamos o no en el ultimo elemento del array (si estamos en el ultimo elemento no queremos seguir avanzando hacia la derecha) Viene a significar, si el index es menor que la longitud de carrouselEach - 1, le haremos index + 1 al elemento para pasar al siguiente.
    if (carrouselIndex < carrouselEach.length - 1) {  
        // si se cumple, aumentamos el indice
        carrouselIndex = carrouselIndex + 1; 

    } else {
        // Si estamos en el ultimo elemento, pues no se hace nada.
    }
    // se pone en negativo porque queremos que vaya hacia la izquierda
    let operacion = carrouselIndex * -25; 
    carrouselDiv.style.transform = `translateX(${operacion}%)`;
});

// Cuando haga click sobre la flecha previous, quiero que se ejecute la siguiente funcion con un concional
flechaPrevious.addEventListener( "click" , function(){
    // si el carrousel no esta en la primera, es decir, el indice actual es mayor que 0, 
    if (carrouselIndex > 0) { 
        carrouselIndex = carrouselIndex - 1; // reducimos en -1 el indice para retroceder a la anterior
    } else {
       // si estamos en el primero, pues no se hace nada
    }

    let operacion = carrouselIndex * -25; 
    carrouselDiv.style.transform = `translateX(${operacion}%)`;

})


console.log(flechaNext);
console.log(flechaPrevious);
console.log(carrouselDiv);
console.log(carrouselEach);

// BLOQUE 3: carrousel con puntos

// Cuando hago CLICK en .punto__btn 
    //     Calcular el translate = INDEX * (100/3)
    //     .accesorios__grande STYLE transform translateX()
    
   
    // Selecciono todos los puntos del carrousel
    const puntoBtn = document.querySelectorAll(".punto__btn")
    // Selecciono solo el carrousel grande
    const accesoriosGrande = document.querySelector(".accesorios__grande")
    // Declaro la variable multi de forma global y luego la utilizo en local
    let multi;
    // Declaro la variable i de forma global y luego la utilizo en local
    let i;
    
    puntoBtn.forEach( ( eachPunto , i ) => {
        puntoBtn[i].addEventListener( "click" , () => {
            
             // Si el ancho de la ventana es < 900px
        // el ancho de carrousel__Grande  tiene que ser de 100% style
        // javascript la varibale multi tiene que ser i * 100
            if (window.innerWidth < 900) {
                accesoriosGrande.style.width = "100%";
                multi = i * 100;
            } else {
                // Si el ancho de la ventana es mayor
        // el ancho del carrousel__Grande tiene que ser de 300% (3img) style
        // javascript la variable multi tinee que ser i * (100/3)
                accesoriosGrande.style.width = "300%";
                multi = i * ( 100 / 3 );
            }
            
            console.log( multi )
    
            accesoriosGrande.style.transform = `translateX(-${multi}%)`
        })
    })
    
    
    
    console.log( puntoBtn )
    console.log( accesoriosGrande )


// BLOQUE 4: Ancho del carrousel con puntos
// Nos encontramos frente a un problema, que no se actualiza los anchos de la ventana hasta que no tocamos en los botones, entonces para que se ajuste dinamicamente necesitamos una funcion de addeventlistener denominada resize y aplicamos la misma logica
// BUG: creo que no funciona bien y se bugea cuando haces rapido el resize y girar el carrousel a la vez
// Quiero que cuando se cambie el tamaño de ventana, se recalcule el ancho del carrousel
window.addEventListener( "resize" , () => {
   

    if (window.innerWidth < 900) {
        accesoriosGrande.style.width = "100%";
        multi = i * 100;
    } else {
        accesoriosGrande.style.width = "300%";
        multi = i * ( 100 / 3 );
    }
} )


// BLOQUE 5: Navegación y scroll por la web
// Quiero que cuando haga click .btn__accesorios
    // haga scrroll automatico hasta .carrousel__accesorios

// Selecciono el boton que quiero para hacerle click
const btnAccesorios = document.querySelector(".btn__accesorios")
// Selecciono hasta donde quiero hacer scroll
const accesoriosH2 = document.querySelector(".accesorios__h2")
// Cuando hago click en el boton, quiero que se ejecute la siguiente funcion
btnAccesorios.addEventListener( "click" , () => {
    // Quiero que haga scroll hasta el H2
    accesoriosH2.scrollIntoView({
        behavior: "smooth"
    })
})


console.log( btnAccesorios )
console.log( accesoriosH2 )






    