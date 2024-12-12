let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let contraseña = document.getElementById("contrasena");
const cadenaDeCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(),.?":{}|<>]';
const mensaje = document.getElementById("mensaje");


function generar() {

    let numeroGenerado = parseInt(cantidad.value);
    console.log(numeroGenerado);
    

    if (numeroGenerado < 8) {
        alert("cantidad de caracteres tiene que ser mayor a 8");
    }

    let password = '';

    for (let i = 0; i < numeroGenerado; i++) {
   
        let caracterAleatorio = cadenaDeCaracteres[Math.floor(Math.random() * cadenaDeCaracteres.length)];
        console.log(caracterAleatorio);
        
        password+= caracterAleatorio;

    }
    
    contraseña.value = password;
    evaluarFortaleza(password);
    
}

function evaluarFortaleza(password) {
    let longitud = password.length;
    let tieneMayusculas = /[A-Z]/.test(password);
    let tieneMinusculas = /[a-z]/.test(password);
    let tieneNumeros = /[0-9]/.test(password);
    let tieneSimbolos = /[!@#$%^&*(),.?":{}|<>]/.test(password);


    let fortaleza;


    let nivel = 0;

    // Sumar puntos según la variedad de caracteres presentes
    if (tieneMayusculas) nivel++;
    if (tieneMinusculas) nivel++;
    if (tieneNumeros) nivel++;
    if (tieneSimbolos) nivel++;


    if (longitud >= 16 && nivel === 4) {
        fortaleza = "Muy Fuerte";
        color = '#FF0000';
    } else if (longitud >= 12 && nivel >= 3) {
        fortaleza = "Fuerte";
        color = '#20c500';
    } else if (longitud >= 8 && nivel >= 2) {
        fortaleza = "Media";
        color = '#ffe000';
    } else if (longitud >= 8 && nivel === 1) {
        fortaleza = "Débil";
        color = '#ff6c00';
    } else {
        fortaleza = "Muy Débil";
        
    }
    

mensaje.innerHTML = `Fortaleza de la contraseña: <span style="color: ${color};">${fortaleza}</span>`;

    
}


function limpiar() {
    cantidad.value = "";
    contraseña.value = "";

    mensaje.innerHTML = "Fortaleza de la contraseña:"; 
}















