// conocenos.js
// Voy dividiendo en bloques con las acciones que voy haciendo
// Estructura:
// - Bloque 1: menu desplegable header
// - Bloque 2: minimizar la ventana ajustando el translate y skew del div

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



// BLOQUE 2: minimizar la ventana ajustando el translate y skew del div
// Quiero que cuando minimize la ventana, se vaya ajustando automaticamente el translate y el skew

// La funcion, cuando se haga resize, quiero que se ejecute la siguiente funcion que la he declarado afuera
window.addEventListener('resize', tamañoventana) ;

    function tamañoventana() {
      // Para calcular el ancho de la ventana actual
      var windowWidth = window.innerWidth;
      // para el grado de inclinacion que quiero que tenga ese div
      let medida;
      // si es menor de 600, quiero que no tenga inclinacion para que no se superponga a las letras
      if (windowWidth < 600) {
        medida = 0
      } else {
        medida = 10    // Si es mayor, quiero que tenga 10 grados de inclinacion
      }

      //  Esta formula me permite calcular el translate hacia la izquierda. La operación se hace para obtener un % (por eso se divide entre 100) y se multiplica por el ancho de la ventana que saque antes, asi se traslada constantemente hacia la izquierda un 10%
      var translationValue = (-10 / 100) * windowWidth;

      // Sería el resultado que quiero aplicar al div first media
      document.querySelector('.first__media').style.transform = 'skewX(' + medida + 'deg) translateX(' + translationValue + 'px)';
    }



