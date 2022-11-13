document.addEventListener("DOMContentLoaded", function (e) {

    let guardarCambios = document.getElementById("guardarCambios")

    guardarCambios.addEventListener("click", function (e) {

        e.preventDefault();
        e.stopPropagation();

        let primerNombre = document.getElementById("primerNombre")
        let segundoNombre = document.getElementById("segundoNombre")
        let primerApellido = document.getElementById("primerApellido")
        let segundoApellido = document.getElementById("segundoApellido")
        let contacto = document.getElementById("contacto")
        let email = document.getElementById("email")
        let paso = true;

        primerNombre.classList.remove('is-invalid');
        primerApellido.classList.remove('is-invalid');
        email.classList.remove('is-invalid');

        if (primerNombre === "") {
            primerNombre.classList.add('is-invalid');
            paso = false;
        } else {
            primerNombre.classList.add('is-valid')
        }        
        if (primerApellido.value === "") {
            primerApellido.classList.add('is-invalid');
            paso = false;
        } else {
            primerApellido.classList.add('is-valid');
        }        
        if (email.value === "") {
            email.classList.add('is-invalid');
            paso = false;
        } else {
            email.classList.add('is-valid');
        }
        // modificar datos en el local storage 

        let local = localStorage.getItem("usuario")
        let modificarlocal = JSON.parse(local)
        modificarlocal.nombre1 = primerNombre.value
        modificarlocal.nombre2 = segundoNombre.value
        modificarlocal.apellido1 = primerApellido.value
        modificarlocal.apellido2 = segundoApellido.value
        modificarlocal.email1 = email.value
        modificarlocal.contacto1 = contacto.value
        let localModificado = JSON.stringify(modificarlocal)
        localStorage.setItem("usuario", localModificado)
    })
})
