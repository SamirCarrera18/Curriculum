//Ejecutando funciones
window.addEventListener("resize", anchoPage);

//Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var contenedor_login = document.querySelector(".contenedor__login");
var caja_trasera_login = document.querySelector(".caja__trasera-login");

    //FUNCIONES

function anchoPage(){

    if (window.innerWidth > 850){
        caja_trasera_login.style.display = "block";
    }else{
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
    }
}

anchoPage();


    function iniciarSesion(){
        if (window.innerWidth > 850){
            formulario_login.style.display = "block";
            caja_trasera_login.style.opacity = "0";
        }else{
            formulario_login.style.display = "block";
            caja_trasera_login.style.display = "none";
        }
    }
