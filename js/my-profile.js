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

        if (primerNombre.value === "") {
            primerNombre.classList.add('is-invalid');
            paso = false;
        }else {

            primerNombre.classList.add('is-valid')
        }
        if (segundoNombre.value === ""){

        }else{}

        if (primerApellido.value === "") {
            primerApellido.classList.add('is-invalid');
            paso = false;
        }else {
            primerApellido.classList.add('is-valid');
        }
        if (segundoApellido.value === ""){

        }else {}

        if (email.value === "") {
            email.classList.add('is-invalid');
            paso = false;
        }else {
            email.classList.add('is-valid');
        }
        if (contacto.value === ""){

        }else{}

        
    })
})