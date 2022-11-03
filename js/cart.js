let productoEnCarr = []
let subtotalUnico = 0;
let porcentaje = 0;
let total = 0;
let precio = 0;
let pesos = "UYU"
let dolares = "USD "
let porcentajeDolar
let express = document.getElementById("express")
let standard = document.getElementById("standard")
let premium = document.getElementById("premium")

// funcion para msotrar el carrito 

function mostrarCarr() {
    for (let i = 0; i < productoEnCarr.articles.length; i++) {
        let carrito = productoEnCarr.articles[i];
        document.getElementById("productoCarr").innerHTML = ""
        document.getElementById("productoCarr").innerHTML += `
        <tr>
            <td><img id = image src = ${carrito.image} class="img-thumbnail lela"></td>
            <td>${carrito.name}</td>
            <td>${carrito.currency}</td>
            <td>${carrito.unitCost}</td>
            <td>
                <div class="input-group-addon">
                    <input type="number" class="form-control" id="cantProducts" min="1" value="${carrito.count}" required>
                        <div class="invalid-feedback">
                            Ingrese una cantidad
                        </div>
                </div></td> 
            <td id="subtotal">${carrito.currency} ${subtotalUnico = parseInt(carrito.unitCost) * parseInt(carrito.count)} </td>
        `
        let cantidad = document.getElementById("cantProducts")
        cantidad.addEventListener("change", () => {
            carrito.count = cantidad.value
            if (standard.checked) {
                porcentaje = subtotalUnico * 0.05;
                porcentajeDolar = dolares + porcentaje
            }
            if (premium.checked) {
                porcentaje = subtotalUnico * 0.25;
                porcentajeDolar = dolares + porcentaje
            }
            if (express.checked) {
                porcentaje = subtotalUnico * 0.07;
                porcentajeDolar = dolares + porcentaje                
            }
            mostrarCarr()
            mostrarCostos()
        })
    }


}


//"https://japceibal.github.io/emercado-api/user_cart/25801.json"

// json 

document.addEventListener("DOMContentLoaded", function () {
    getJSONData(CART_INFO_URL + 25801 + ".json").then(resultado => {
        if (resultado.status == "ok") {
            productoEnCarr = resultado.data
            mostrarCarr()
            mostrarCostos()
        } else {
            alert("se hizo mierd.....")
        }
    })

})

// funcion para mostras  los costos 

function mostrarCostos() {
    for (let i = 0; i < productoEnCarr.articles.length; i++) {
        if (costos.currency = "USD") {
            precio = "USD " + subtotalUnico
            total = dolares + (subtotalUnico + porcentaje)
            let costos = productoEnCarr.articles[i];
            document.getElementById("costos").innerHTML = ""
            document.getElementById("costos").innerHTML += `
        <hr class="mb-4">
        <h4 class="mb-3" id="costos">Costos</h4>
            <ul class="list-group mb-3">
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 class="my-0">Subtotal</h6>
                <small class="text-muted">Unitario del producto por cantidad</small>
              </div>
              <span class="text-muted" id="productCost">${precio}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 class="my-0">Costo de envio</h6>
                <small class="text-muted">Según el tipo de envio</small>
              </div>
              <span class="text-muted" id="comissionText">${porcentajeDolar}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              <span>Total ($)</span>
              <strong id="totalCostText">${total}</strong>
            </li>
          </ul>`

            subtotalUnico = parseInt(costos.unitCost) * parseInt(costos.count)

        } else {
            precio = dolares + subtotalUnico / 40
            total = dolares + (subtotalUnico + porcentaje)
        }

    }

    console.log(costos.currency)


    //funcion para los costos de envio  


    premium.addEventListener('change', function () {
        porcentaje = subtotalUnico * 0.25;
        porcentajeDolar = dolares + porcentaje
        mostrarCostos();
    })
    express.addEventListener('change', function () {
        porcentaje = subtotalUnico * 0.07;
        porcentajeDolar = dolares + porcentaje
        mostrarCostos();
    })
    standard.addEventListener('change', function () {
        porcentaje = subtotalUnico * 0.05;
        porcentajeDolar = dolares + porcentaje
        mostrarCostos();
    })


    console.log(total)

}

// modal 

var modal = document.getElementById("ventanaModal");
var boton = document.getElementById("abrirModal");
var span = document.getElementsByClassName("close")[0];
boton.addEventListener("click", function () {
    modal.style.display = "block";
});
span.addEventListener("click", function () {
    modal.style.display = "none";
});
window.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

// desactivacion de inputs del modal 

let compraRealizada = document.getElementById("compraRealizada")
let cambio = document.getElementById("mostrarSeleccion")
var nmroCuenta = document.getElementById("nmroCuenta")
var tarjeta = document.getElementById("nmroTarjeta")
var codigo = document.getElementById("codigoSeg")
var venc = document.getElementById("vencimiento");
document.getElementById("conTarjeta").addEventListener(`click`, function () {
    let checkTarjeta = (this.checked)
    if (checkTarjeta) {
        cambio.innerHTML = "Tarjeta de credito"
        tarjeta.disabled = false;
        codigo.disabled = false
        venc.disabled = false
        nmroCuenta.disabled = true
    }
})
document.getElementById("transferencia").addEventListener('click', function () {
    let checktransferencia = (this.checked)
    if (checktransferencia) {
        cambio.innerHTML = "Transferencia bancaria"
        tarjeta.disabled = true;
        codigo.disabled = true
        venc.disabled = true
        nmroCuenta.disabled = false
    }
})

function selecionePago() {
    if (document.getElementById("conTarjeta").checked || document.getElementById("transferencia").checked) {
    } else {
        cambio.innerHTML = `<p class="text-danger">Seleccione un metodo de pago <p>`
    }
}
let form = document.getElementById("comprar")
form.addEventListener("submit", function (event) {
    if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
        selecionePago()
    } else {
        alert('Su compra a sido realizada');
    }

    form.classList.add('was-validated')
}, false)
