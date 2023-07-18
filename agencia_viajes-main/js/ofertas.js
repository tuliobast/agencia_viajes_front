var erroresFormulario = "";
var formularioError = false;

var entradaDestinos = document.getElementById('destino_of');
var entradaOfertas = document.getElementById('oferta_of');
var entradaTitulo = document.getElementById('titulo-oferta');
var entradaImagen = document.getElementById('img-oferta');
var entradaTexto = document.getElementById('texto-oferta');
var entradaPrecio = document.getElementById('valor-oferta');


var cuadroTextoNombre = document.getElementsByName('nombre_of')[0];
var cuadroTextoMail = document.getElementsByName('mail_of')[0];
var cuadroTextoTelefono = document.getElementsByName('telefono_of')[0];
var cuadroTextoDestino = document.getElementsByName('destino_of')[0];
var cuadroTextoOferta = document.getElementsByName('oferta_of')[0];

var verificarAtributos = function(e){
    cambiarColorCuadrosForm();
    validarCompletitudNombre(e);
    validarCompletitudMail(e);
    validarCompletitudTelefono(e);
    validarCompletitudDestino(e);
    validarCompletitudOferta(e);
    if(erroresFormulario=="")
        erroresFormulario="Se envío el formulario adecuadamente."
    alert(erroresFormulario);
    erroresFormulario = "";
};

var validarCompletitudNombre = function(e){
    if(formulario_of.nombre_of.value==0)
    {
        e.preventDefault();
        erroresFormulario = erroresFormulario + "El nombre no puede estar vacío\n";
        formularioError = true;
        cuadroTextoNombre.style.borderColor='red';
    }
};

var validarCompletitudMail = function(e){
    if(formulario_of.mail_of.value==0)
    {
        e.preventDefault();
        erroresFormulario = erroresFormulario + "El e-mail no puede estar vacío\n";
        formularioError = true
        cuadroTextoMail.style.borderColor='red';
    }
};

var validarCompletitudTelefono = function(e){
    if(formulario_of.telefono_of.value==0)
    {
        e.preventDefault();
        erroresFormulario = erroresFormulario + "El telefono no puede estar vacío\n";
        formularioError = true
        cuadroTextoTelefono.style.borderColor='red';
    }
};

var validarCompletitudDestino = function(e){
    if(formulario_of.destino_of.value==0)
    {
        e.preventDefault();
        erroresFormulario = erroresFormulario + "Debe seleccionar un destino\n";
        formularioError = true;
        cuadroTextoDestino.style.borderColor='red';
    }
};

var validarCompletitudOferta = function(e){
    if(formulario_of.oferta_of.value==0)
    {
        e.preventDefault();
        erroresFormulario = erroresFormulario + "Debe seleccionar un paquete\n";
        formularioError = true;
        cuadroTextoOferta.style.borderColor='red';
    }
};

function cambiarColorCuadrosForm(){
    cuadroTextoDestino.style.borderColor="#ced4da";
    cuadroTextoOferta.style.borderColor="#ced4da";
    cuadroTextoNombre.style.borderColor="#ced4da";
    cuadroTextoMail.style.borderColor="#ced4da";
    cuadroTextoTelefono.style.borderColor="#ced4da";
}

formulario_of.addEventListener("submit", verificarAtributos);


var contenido_destinos;
var vec_destinos_validos=[];
var k = 0;
var control_dup=[];

for(let i in vec_destinos){
    for(let j in vec_ofertas)
    {
        for(let z in vec_ofertas[j].valor_destino)
        {
            if(vec_ofertas[j].valor_destino[z] == vec_destinos[i].valor)
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

var seleccion = document.getElementById('destino_of');
var valor_destino;

var vec_ofertas_validas=[];
function modificarOfertas(){
    let z=0;
    vec_ofertas_validas=[];
    valor_destino = seleccion.options[seleccion.selectedIndex].value;
    for(let i in vec_ofertas){
        for(let j in vec_ofertas[i].valor_destino)
        {
            if(vec_ofertas[i].valor_destino[j]==valor_destino){
                vec_ofertas_validas[z]=vec_ofertas[i];
                z++;
            }
        }
    }

    var contenido_ofertas;
    for(let i=0;i<vec_ofertas_validas.length;i++){

        contenido_ofertas += `
        <option value="${vec_ofertas_validas[i].valor}">${vec_ofertas_validas[i].nombre}</option>
                `

    }

    entradaOfertas.innerHTML = contenido_ofertas;
    if(vec_ofertas_validas != 0)
        mostrarContenido();
    else
    {
        entradaTitulo.innerHTML = "Lo sentimos";
        entradaImagen.src="";
        entradaTexto.innerHTML = "Sin ofertas disponibles";
    }
}

var seleccion_of = document.getElementById('oferta_of');
var valor_oferta;

function mostrarContenido(){
    var valor_oferta = seleccion_of.options[seleccion_of.selectedIndex].value;
    elemento = vec_ofertas_validas.find(o => o.valor == valor_oferta);
    entradaTitulo.innerHTML = `${elemento.nombre}`;
    entradaImagen.src=elemento.imagen;
    entradaTexto.innerHTML = `${elemento.descripcion}`;
    entradaPrecio.innerHTML = `¡Conseguí tu lugar por solo ${elemento.precio}!`;
}



