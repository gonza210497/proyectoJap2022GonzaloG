document.getElementById("ingresar").addEventListener("click", function () {
    let email = document.getElementById("email").value;
    let contraseña = document.getElementById("password").value;
    let seCumple = true;

    if (email == "") {
        seCumple = false
        alert("Falta el email")
    }

    if (contraseña == "") {
        seCumple = false
        alert("Falta la contraseña")
    }

    if (seCumple) {
        window.location.href = "inicio.html"
        let usuario = {
            nombre1: "",
            nombre2: "",
            apellido1: "",
            apellido2: "",
            email1: email,
            contacto1: "",
        }
        localStorage.setItem("usuario", JSON.stringify(usuario))
        
    }

})


