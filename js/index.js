document.getElementById("ingresar").addEventListener("click", function(){
    let email = document.getElementById("email").value ;
    let contraseña = document.getElementById("password").value ;
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
        let perfile = localStorage.setItem("perfil", email)
    }
    
})


//console.log(email)