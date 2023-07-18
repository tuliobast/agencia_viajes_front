var erroresFormulario = "";
var formularioError=false;

var cuadroTextoNombre = document.getElementsByName('nombre')[0];
var cuadroTextoMail = document.getElementsByName('mail')[0];
var cuadroTextoTelefono = document.getElementsByName('telefono')[0];
var cuadroTextoFechaInicio = document.getElementsByName('fecha_inicio')[0];
var cuadroTextoFechaFin = document.getElementsByName('fecha_fin')[0];

var entradaOfertas = document.getElementById('container_ofertas');
var entradaPaquetes = document.getElementById('container_paquetes');
var entradaDestinos = document.getElementById('destino');
var entradaTemperatura = document.getElementById('temperatura');

var verificarAtributos = function(e){
    cambiarColorCuadrosForm();
    validarCompletitudNombre(e);
    validarCompletitudMail(e);
    validarCompletitudTelefono(e);
    validarCompletitudFechas(e);
    if(erroresFormulario=="")
        erroresFormulario="Se envío el formulario adecuadamente."
    alert(erroresFormulario);
    erroresFormulario = "";
};

var validarCompletitudNombre = function(e){
    if(formulario.nombre.value==0)
    {
        e.preventDefault();
        erroresFormulario = erroresFormulario + "El nombre no puede estar vacío\n";
        formularioError = true;
        console.log(formularioError);
        cuadroTextoNombre.style.borderColor='red';
    }
};

var validarCompletitudMail = function(e){
    if(formulario.mail.value==0)
    {
        e.preventDefault();
        erroresFormulario = erroresFormulario + "El e-mail no puede estar vacío\n";
        formularioError = true
        cuadroTextoMail.style.borderColor='red';
    }
};

var validarCompletitudTelefono = function(e){
    if(formulario.telefono.value==0)
    {
        e.preventDefault();
        erroresFormulario = erroresFormulario + "El telefono no puede estar vacío\n";
        formularioError = true
        cuadroTextoTelefono.style.borderColor='red';
    }
};

var validarCompletitudFechas = function(e){
    if(formulario.fecha_inicio.value==0 || formulario.fecha_fin.value==0)
    {
        e.preventDefault();
        erroresFormulario = erroresFormulario + "Debe seleccionar fechas de inicio y fin de viaje\n";
        formularioError = true;
        cuadroTextoFechaInicio.style.borderColor='red';
        cuadroTextoFechaFin.style.borderColor='red';
    }
};

function cambiarColorCuadrosForm(){
    cuadroTextoFechaInicio.style.borderColor="#ced4da";
    cuadroTextoFechaFin.style.borderColor="#ced4da";
    cuadroTextoNombre.style.borderColor="#ced4da";
    cuadroTextoMail.style.borderColor="#ced4da";
    cuadroTextoTelefono.style.borderColor="#ced4da";
}

formulario.addEventListener("submit", verificarAtributos);

var contenido_ofertas = "";

contenido_ofertas += `
<div class="row row-cols-1 row-cols-md-3 g-4">
`;

for(let i=0;i<ofertas.length;i++){

    contenido_ofertas += `
    <div class="col">
        <a href="ofertas.html"><div class="card" style="width: 15rem;">
            <div class="card_img_container">
                <img class="card-img-top" src="${ofertas[i].imagen}"></img>
            </div>
            <div class="card-body">
                <h5 class="card-title">${ofertas[i].nombre}</h5>
                <p class="card-text">${ofertas[i].precio}</p>
            </div>
        </div></a>
    </div>
            `

}

contenido_ofertas += `</div>`;

entradaOfertas.innerHTML = contenido_ofertas;

var contenido_paquetes = "";

contenido_paquetes += `
<div class="row row-cols-1 row-cols-lg-3 g-4">
`;

for(let i=0;i<paquetes.length;i++){

    contenido_paquetes += `
    <div class="col">
        <a href="paquetes.html"><div class="card" style="width: 15rem;">
            <div class="card_img_container">
                <img class="card-img-top" src="${paquetes[i].imagen}"></img>
            </div>
            <div class="card-body">
                <h5 class="card-title">${paquetes[i].nombre}</h5>
                <p class="card-text">${paquetes[i].precio}</p>
            </div>
        </div></a>
    </div>
            `

}

contenido_paquetes += `</div>`;

entradaPaquetes.innerHTML = contenido_paquetes;

var contenido_destinos = "";
for(let i=0;i<vec_destinos.length;i++){
    contenido_destinos += `
    <option value="${vec_destinos[i].valor}">${vec_destinos[i].destino}</option>
            `
}

entradaDestinos.innerHTML = contenido_destinos;

var xhttp = new XMLHttpRequest();

var clima_b;
// Esta es la función que se ejecutará al finalizar la llamada
xhttp.onreadystatechange = function() {
  // Si nada da error
  if (this.readyState == 4 && this.status == 200) {
    // La respuesta, aunque sea JSON, viene en formato texto, por lo que tendremos que hace run parse
    clima_b=JSON.parse(this.responseText)
    console.log(clima_b)
    entradaTemperatura.innerHTML = clima_b.hourly.temperature_2m[clima_b.hourly.temperature_2m.length-1] + "°C";
  }
};

// Endpoint de la API y método que se va a usar para llamar
xhttp.open("GET", "https://api.open-meteo.com/v1/forecast?latitude=-34.60&longitude=-58.54&hourly=temperature_2m", true);
// Si quisieramos mandar parámetros a nuestra API, podríamos hacerlo desde el método send()
xhttp.send(null);