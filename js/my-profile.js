document.addEventListener("DOMContentLoaded", function (e) {

    let guardarCambios = document.getElementById("guardarCambios")

    guardarCambios.addEventListener("click", function (e) {

        e.preventDefault();
        e.stopPropagation();

        let primerNombre = document.getElementById("primerNombre")
        let primerApellido = document.getElementById("primerApellido")
        let email = document.getElementById("email")
        let paso = true;

        primerNombre.classList.remove('is-invalid');
        primerApellido.classList.remove('is-invalid');
        

        if (primerNombre.value === "") {
            primerNombre.classList.add('is-invalid');
            paso = false;
        }

        if (primerApellido.value === "") {
            primerApellido.classList.add('is-invalid');
            paso = false;
        }

        if (email.value === "") {
            email.classList.add('is-invalid');
            paso = false;
        }
    })
})