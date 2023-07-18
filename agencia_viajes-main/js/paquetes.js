var erroresFormulario = "";
var formularioError = false;

var entradaDestinos = document.getElementById('destino_pq');
var entradaPaquetes = document.getElementById('paquete_pq');
var entradaTitulo = document.getElementById('titulo-paquete');
var entradaImagen = document.getElementById('img-paquete');
var entradaTexto = document.getElementById('texto-paquete');
var entradaPrecio = document.getElementById('valor-paquete');


var cuadroTextoNombre = document.getElementsByName('nombre_pq')[0];
var cuadroTextoMail = document.getElementsByName('mail_pq')[0];
var cuadroTextoTelefono = document.getElementsByName('telefono_pq')[0];
var cuadroTextoDestino = document.getElementsByName('destino_pq')[0];
var cuadroTextoPaquete = document.getElementsByName('paquete_pq')[0];

var verificarAtributos = function(e){
    cambiarColorCuadrosForm();
    validarCompletitudNombre(e);
    validarCompletitudMail(e);
    validarCompletitudTelefono(e);
    validarCompletitudDestino(e);
    validarCompletitudPaquete(e);
    if(erroresFormulario=="")
        erroresFormulario="Se envío el formulario adecuadamente."
    alert(erroresFormulario);
    erroresFormulario = "";
};

var validarCompletitudNombre = function(e){
    if(formulario_pq.nombre_pq.value==0)
    {
        e.preventDefault();
        erroresFormulario = erroresFormulario + "El nombre no puede estar vacío\n";
        formularioError = true;
        cuadroTextoNombre.style.borderColor='red';
    }
};

var validarCompletitudMail = function(e){
    if(formulario_pq.mail_pq.value==0)
    {
        e.preventDefault();
        erroresFormulario = erroresFormulario + "El e-mail no puede estar vacío\n";
        formularioError = true
        cuadroTextoMail.style.borderColor='red';
    }
};

var validarCompletitudTelefono = function(e){
    if(formulario_pq.telefono_pq.value==0)
    {
        e.preventDefault();
        erroresFormulario = erroresFormulario + "El telefono no puede estar vacío\n";
        formularioError = true
        cuadroTextoTelefono.style.borderColor='red';
    }
};

var validarCompletitudDestino = function(e){
    if(formulario_pq.destino_pq.value==0)
    {
        e.preventDefault();
        erroresFormulario = erroresFormulario + "Debe seleccionar un destino\n";
        formularioError = true;
        cuadroTextoDestino.style.borderColor='red';
    }
};

var validarCompletitudPaquete = function(e){
    if(formulario_pq.paquete_pq.value==0)
    {
        e.preventDefault();
        erroresFormulario = erroresFormulario + "Debe seleccionar un paquete\n";
        formularioError = true;
        cuadroTextoPaquete.style.borderColor='red';
    }
};

function cambiarColorCuadrosForm(){
    cuadroTextoDestino.style.borderColor="#ced4da";
    cuadroTextoPaquete.style.borderColor="#ced4da";
    cuadroTextoNombre.style.borderColor="#ced4da";
    cuadroTextoMail.style.borderColor="#ced4da";
    cuadroTextoTelefono.style.borderColor="#ced4da";
}

formulario_pq.addEventListener("submit", verificarAtributos);


var contenido_destinos;

var vec_destinos_validos=[];
var k = 0;
var control_dup=[];

for(let i in vec_destinos){
    for(let j in vec_paquetes)
    {
        for(let z in vec_paquetes[j].valor_destino){
            if(vec_paquetes[j].valor_destino[z] == vec_destinos[i].valor)
            {
                if(control_dup.indexOf(vec_destinos[i].valor)==-1)
                {
                    vec_destinos_validos[k]=vec_destinos[i];
                    control_dup.push(vec_destinos[i].valor);
                    k++;
                }
            }
        }
    }
}

for(let i=0;i<vec_destinos_validos.length;i++){

    contenido_destinos += `
    <option value="${vec_destinos_validos[i].valor}">${vec_destinos_validos[i].destino}</option>
            `

}

entradaDestinos.innerHTML = contenido_destinos;

var seleccion = document.getElementById('destino_pq');
var valor_destino;

var vec_paquetes_validos=[];
function modificarPaquetes(){
    let z=0;
    vec_paquetes_validos=[];
    valor_destino = seleccion.options[seleccion.selectedIndex].value;
    for(let i in vec_paquetes){
        for(let j in vec_paquetes[i].valor_destino)
        {
            if(vec_paquetes[i].valor_destino[j]==valor_destino){
                vec_paquetes_validos[z]=vec_paquetes[i];
                z++;
            }
        }
    }

    var contenido_paquetes;
    for(let i=0;i<vec_paquetes_validos.length;i++){

        contenido_paquetes += `
        <option value="${vec_paquetes_validos[i].valor}">${vec_paquetes_validos[i].nombre}</option>
                `

    }

    entradaPaquetes.innerHTML = contenido_paquetes;
    if(vec_paquetes_validos != 0)
        mostrarContenido();
}

var seleccion_pq = document.getElementById('paquete_pq');
var valor_paquete;

function mostrarContenido(){
    var valor_paquete = seleccion_pq.options[seleccion_pq.selectedIndex].value;
    elemento = vec_paquetes_validos.find(o => o.valor == valor_paquete);
    entradaTitulo.innerHTML = `${elemento.nombre}`;
    entradaImagen.src=elemento.imagen;
    entradaTexto.innerHTML = `${elemento.descripcion}`;
    entradaPrecio.innerHTML = `¡Conseguí tu lugar por solo ${elemento.precio}!`;
}



