var erroresFormulario = "";
var formularioError=false;
var seleccion_destino = "";

var cuadroTextoNombre = document.getElementsByName('nombre_des')[0];
var cuadroTextoMail = document.getElementsByName('mail_des')[0];
var cuadroTextoTelefono = document.getElementsByName('telefono_des')[0];
var cuadroTextoFechaInicio = document.getElementsByName('fecha_inicio_des')[0];
var cuadroTextoFechaFin = document.getElementsByName('fecha_fin_des')[0];

var entradaDestino = document.getElementsByName('destino_des')[0];
var contenedorDestinos = document.getElementById('container_destinos');

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
    if(cuadroTextoNombre.value==0)
    {
        e.preventDefault();
        erroresFormulario = erroresFormulario + "El nombre no puede estar vacío\n";
        formularioError = true;
        cuadroTextoNombre.style.borderColor='red';
    }
};

var validarCompletitudMail = function(e){
    if(cuadroTextoMail.value==0)
    {
        e.preventDefault();
        erroresFormulario = erroresFormulario + "El e-mail no puede estar vacío\n";
        formularioError = true
        cuadroTextoMail.style.borderColor='red';
    }
};

var validarCompletitudTelefono = function(e){
    if(cuadroTextoTelefono.value==0)
    {
        e.preventDefault();
        erroresFormulario = erroresFormulario + "El telefono no puede estar vacío\n";
        formularioError = true
        cuadroTextoTelefono.style.borderColor='red';
    }
};

var validarCompletitudFechas = function(e){
    if(cuadroTextoFechaInicio.value==0 || cuadroTextoFechaFin.value==0)
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

formulario_des.addEventListener("submit", verificarAtributos);

var contenido_destinos = "";

contenido_destinos += `
<div class="row row-cols-1 row-cols-lg-3 g-4">
`;

var vec_destinos = [];
for (i in destinos)
{
    vec_destinos[i] = destinos[i];
}

for(let i=0;i<destinos.length;i++){

    contenido_destinos += `
    <div class="col">
        <div class="card" style="width: 15rem;" data-bs-toggle="modal" data-bs-target="#modalForm" id="destino-${destinos[i].valor}"onclick="seleccionarDestino(this.id)">
            <div class="card_img_container">
                <img class="card-img-top" src="${destinos[i].imagen}"></img>
            </div>
            <div class="card-body">
                <h5 class="card-title">${destinos[i].destino}</h5>
                <p class="card-text">${destinos[i].pais}</p>
            </div>
        </div></a>
    </div>
            `

}

function seleccionarDestino(id){
    seleccion_destino = id;
    seleccion_destino = destinos.find(({valor})=> valor === id.slice(8));
    entradaDestino.value = seleccion_destino.destino;
}

contenido_destinos += `</div>`;

contenedorDestinos.innerHTML = contenido_destinos;

