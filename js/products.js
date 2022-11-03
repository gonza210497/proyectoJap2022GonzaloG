let contenedor = []
let min = undefined;
let max = undefined;
let lista = document.getElementById("contenedores");

function filtrarProductos(objetos) {

    let productosFiltrados = objetos.products.filter(products => (parseInt(products.cost) >= min || min == undefined) && (parseInt(products.cost) <= max || max == undefined));

    return productosFiltrados;
}
function redirigir(id) {
    localStorage.setItem("productsID", id)
    window.location.href = "product-info.html"
}

function mostrarProductos(objetos) {

    lista.innerHTML = "";

    for (let products of objetos) {

        let li = `
            <ul onclick=redirigir(${products.id}) class="list-group-item list-group-item-action cursor-active">
            <div class="row">
                    <div class="col-3">
                        <img src="${products.image}" alt="${products.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${products.name}</h4>
                            <small class="text-muted">Valor: ${products.cost}</small>
                        </div>
                        <p class="mb-1">${products.description}</p>                       
                        <p class="mb-1">Moneda: ${products.currency}</p>
                        <p class="mb-1">Vendidos: ${products.soldCount}</p>
                    </div>
                     
            
            
            </div>
            
            </ul>
            <br>
            <br>`
        lista.innerHTML += li;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    getJSONData(PRODUCTS_URL).then(resultObj => {
        if (resultObj.status === "ok") {
            contenedor = resultObj.data;
            mostrarProductos(contenedor.products); //contenedor.products es el parametro que definimos como array  
            //console.log(contenedor.products);

        } else { alert("error 102...") }
        //}).then(resultObj => {
        //nombre = resultObj.data.catName
        //console.log(nombre)
    });
    document.getElementById("filtrar").addEventListener("click", function () {
        if (document.getElementById("rango-min").value != "") {
            min = parseInt(document.getElementById("rango-min").value);
        }
        else {
            min = undefined
        }
        if (document.getElementById("rango-max").value != "") {
            max = parseInt(document.getElementById("rango-max").value);
        }
        else {
            max = undefined
        }
        mostrarProductos(filtrarProductos(contenedor));


    })
    document.getElementById("limpiar").addEventListener("click", function () {
        min = undefined;
        max = undefined;
        mostrarProductos(contenedor.products);

        document.getElementById("rango-max").value;
        document.getElementById("rango-min").value;

    })
    document.getElementById("precioDesc").addEventListener("click", function () {

        contenedor.products.sort(function (a, b) {
            return parseInt(b.cost) - parseInt(a.cost);
        });

        mostrarProductos(contenedor.products);
    });
    document.getElementById("precioAsce").addEventListener("click", function () {

        contenedor.products.sort(function (a, b) {
            return parseInt(a.cost) - parseInt(b.cost);

        });

        mostrarProductos(contenedor.products);
    });
    document.getElementById("porRelevancia").addEventListener("click", function () {

        contenedor.products.sort(function (a, b) {
            return parseInt(b.soldCount) - parseInt(a.soldCount);
        });

        mostrarProductos(contenedor.products);

    })
})


