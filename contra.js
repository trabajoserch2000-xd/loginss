
document.addEventListener("DOMContentLoaded", function() {

    const boton = document.getElementById("btnlogin");

    boton.addEventListener("click", function() {

        const usuario = document.getElementById("correoinput").value.trim();
        const contraseña = document.getElementById("claveinput").value;
        const mensaje = document.getElementById("mensaje");

        if (usuario === "pro123" && contraseña === "serch") {

            mensaje.textContent = "¡Inicio de sesión exitoso!";
            mensaje.style.color = "green";

        } else {

            mensaje.textContent = "Usuario no válido";
            mensaje.style.color = "red";

        }

    });

});
