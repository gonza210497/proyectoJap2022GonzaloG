let contenedorInfo = [];
let comentarioId = []
let traeContenedor = document.getElementById("comentarios");
let traeComent = document.getElementById("coment");


function mostrarInfo() {
    let inf = `<ul class="list-group-item list-group-item-action cursor-active">
                    <h1 class="d-flex w-100 justify-content-between"> ${contenedorInfo.name}</h1>
                    <div>Descripcion: ${contenedorInfo.description}<br>
                        Valor: ${contenedorInfo.cost}<br>
                        Moneda: ${contenedorInfo.currency}<br>
                        Vendidos: ${contenedorInfo.soldCount}<br>
                        Categoria: ${contenedorInfo.category}<br>
                        Imagenes ilustrativas:</div>
                        </ul>
                        <div id="carouselProductsInfo" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img src="${contenedorInfo.images[0]}" class="d-block w-100" alt="First slide">
                          </div>
                          <div class="carousel-item">
                            <img  src="${contenedorInfo.images[1]}" class="d-block w-100"alt="Second slide">
                          </div>
                          <div class="carousel-item">
                            <img src="${contenedorInfo.images[2]}" class="d-block w-100" alt="Third slide">
                          </div>
                          <div class="carousel-item">
                            <img src="${contenedorInfo.images[3]}" class="d-block w-100" alt="Third slide">
                          </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselProductsInfo" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselProductsInfo" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>                        
                      </div>
                      
        `
    document.getElementById("informacionId").innerHTML = inf;
}
document.addEventListener("DOMContentLoaded", function () {
    let productsId = localStorage.getItem("productsID")
    getJSONData(PRODUCT_INFO_URL + productsId + ".json").then(resultado => {
        if (resultado.status == "ok") {
            contenedorInfo = resultado.data
            mostrarInfo()
            mostrarProductsRelacionados()
            //console.log(contenedorInfo)
        } else {
            alert("se hizo mierd.....")
        }
    })

})

function estrellas(cantidad) {
    let estrellaschek = `<span class="fa fa-star checked"></span>`
    let estrella = `<span class="fa fa-star"></span>`
    return estrellaschek.repeat(cantidad) + (estrella.repeat(5 - cantidad))
}
function mostrarCom(listacomentarios) {
    for (let product of listacomentarios) {
        let cantidad = product.score
        let com = `
        <div class="col-md-4">
                    <div class="card mb-4 shadow-sm custom-card cursor-active">
                        <p class="m-1">${product.user}
                        ${product.dateTime}
                        ${estrellas(cantidad)}</p>                        
                        <div class="d-flex w-100 justify-content-between">
                        <p>${product.description}</p>
                        </div>
                    </div>                    
                </div>
            <br>
            <br>`
        traeContenedor.innerHTML += com;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let productsId = localStorage.getItem("productsID")
    getJSONData(PRODUCT_INFO_COMMENTS_URL + productsId + ".json").then(resultado => {
        if (resultado.status == "ok") {
            comentarioId = resultado.data
            mostrarCom(comentarioId)
            //console.log(comentarioId)
        } else {
            alert("no funca che...");
        }
    });
})

//https://japceibal.github.io/emercado-api/products/50921.json
//https://japceibal.github.io/emercado-api/products_comments/50921.json;


function redirigirRelacionados(id2) {
    localStorage.setItem("productsID", id2)
    window.location = "product-info.html"
    mostrarInfo();
}

function mostrarProductsRelacionados() {
    let crp = contenedorInfo.relatedProducts
    let rel = `
                <div class="col-md-4">
                    <div onclick=redirigirRelacionados(${crp[0].id}) class="card mb-4 shadow-sm custom-card cursor-active">
                        <div class="col-3">
                            <img id = image src = ${crp[0].image} class="bd-placeholder-img card-img-top">
                        </div>
                        <div class="d-flex w-100 justify-content-between">
                        <h4 class="m-3">${crp[0].name}</h4>
                        </div>
                    </div>
                </div>`

    document.getElementById("relacionados1").innerHTML = rel;
    let rel1 = `
                <div class="col-md-4">
                    <div onclick=redirigirRelacionados(${crp[1].id}) class="card mb-4 shadow-sm custom-card cursor-active">
                        <div class="col-3">
                        <img id = image src = ${crp[1].image} class="bd-placeholder-img card-img-top">
                        </div>
                        <div class="d-flex w-100 justify-content-between">
                        <h4 class="m-3">${crp[1].name}</h4>
                        </div>
                    </div>
                </div>`
    document.getElementById("relacionados2").innerHTML = rel1;

}



