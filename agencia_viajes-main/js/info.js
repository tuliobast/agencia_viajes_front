var ofertas = [
    {
        "nombre": "Año Nuevo en Paris",
        "precio": "5.000usd",
        "fecha_inicio": "26/12/23",
        "fecha_fin": "2/01/24",
        "imagen": "img/paris_anio_nuevo.jpg",
        "valor": "anio_nuevo_paris",
        "destino": "Paris",
        "valor_destino": ["paris"],
        "descripcion": "Recibir el año nuevo en la Ciudad de las Luces es un sueño que estás a un paso de cumplir. Un tour que incluye una visita al Museo del Louvre, un paseo en barco por el Sena y una excursión que abarca desde la Torre Eiffel hasta el Palacio de Versalles. Todo coronado por una estadía señorial y un fin de año que jamás olvidarás, en alguno de los hoteles más prestigiosos de la ciudad de Voltaire."
    },
    {
        "nombre": "Ski Week en Las Leñas",
        "precio": "1.000usd",
        "fecha_inicio": "06/08/23",
        "fecha_fin": "13/08/23",
        "imagen": "img/las_lenias.jpg",
        "valor": "ski_week_lenias",
        "destino": "Las Leñas",
        "valor_destino": ["las_lenias"],
        "descripcion": "Una opción de excelencia que te permitirá acceder a una experiencia que no vas a olvidar. Hoteles exclusivos y excursiones inimaginables para disfrutar de la vida de montaña en un lugar de fantasía. Ubicada en el corazón de la cordillera de los Andes y constituyéndose en uno de los complejos turísticos de mayor importancia de América del Sur, Las Leñas te invita a vivir momentos mágicos, cargados de aventura y naturaleza pura."
    },
    {
        "nombre": "Finde Patrio en el NOA",
        "precio": "300usd",
        "fecha_inicio": "25/05/23",
        "fecha_fin": "28/05/23",
        "imagen": "img/noa.jpg",
        "valor": "finde_noa",
        "destino": ["Salta", "Jujuy"],
        "valor_destino": ["salta", "jujuy", "la_rioja","santiago_del_estero"],
        "descripcion": "Salta, Jujuy, Tucumán, La Rioja y Santiago del Estero son las opciones para disfrutar días intensos que conjugarán las bellezas naturales, la historia y el amor a nuestra tierra. Paisajes majestuosos te invitarán a conocer lugares de ensueño y una gastronomía distintiva en los mejores hoteles regionales. ¿Qué más se puede pedir?"
    },
    {
        "nombre": "Conocé el Caribe",
        "precio": "3.000usd",
        "fecha_inicio": "20/08/23",
        "fecha_fin": "24/08/23",
        "imagen": "img/cayo_caulker.jpg",
        "valor": "conoce_caribe",
        "destino": "Cayo Caulker",
        "valor_destino": ["cayo_caulker"],
        "descripcion": "La Riviera Maya en todo su esplendor te espera en destinos paradisíacos como Cancún, Holbox y Tulum. Pasado y presente se ensamblan en uno los lugares más fascinantes de nuestro planeta. Los hoteles más exclusivos del Caribe te están esperando, podés ser parte de una aventura que quedará grabada a fuego en tu corazón."
    }
];

var paquetes = [
    {
        "nombre": "Bariloche Clásico",
        "precio": "500usd",
        "destino": "Bariloche",
        "imagen": "img/bariloche.jpg",
        "valor": "bariloche_clasico",
        "valor_destino": ["bariloche"],
        "descripcion": "<i>PASAJES AÉREOS:</i> Buenos Aires - BARILOCHE - Buenos Aires<br><i>BARILOCHE:</i> 3 Noches en Hotel Cambria<br><i>TRASLADOS:</i> Aeropuerto - Hotel - Aeropuerto<br><i>RÉGIMEN DE COMIDAS:</i> Desayuno"
    },
    {
        "nombre": "Río de Janeiro y Buzios",
        "destino": "Río de Janeiro",
        "precio": "600usd",
        "imagen": "img/rio.jpg",
        "valor": "rio_buzios",
        "valor_destino": ["buzios","rio_de_janeiro"],
        "descripcion": "<i>PASAJES AEREOS:</i> Ida y vuelta<br><i>HOTEL:</i> 4 noches en Rio De Janeiro, 3 en Buzios<br><i>TRASLADOS:</i> Aeropuerto - Hotel en Río - Buzios - Aeropuerto<br><i>EXCURSIÓN:</i> Paseo en barco (incluye agua sin cargo)"
    },
    {
        "destino": "Salta",
        "nombre": "Tucumán, Salta y Jujuy",
        "precio": "300usd",
        "imagen": "img/tucsaltajujuy.jpg",
        "valor": "salta_jujuy_tuc",
        "valor_destino": ["salta","jujuy","tucuman"],
        "descripcion": "<i>PASAJES AÉREOS:</i> Buenos Aires - TUCUMÁN - SALTA - Buenos Aires<br><i>TUCUMÁN:</i> 1 Noche en Hotel Amerian Apart & Suites<br><i>CAFAYATE:</i> 1 Noche en Hotel Muñay<br><i>SALTA:</i> 3 Noches en Hotel Inkai<br><i>PURMAMARCA:</i> 1 Noche en Hotel Refugio de Coquena<br><i>TRASLADOS:</i> Aeropuerto - Hotel - Aeropuerto<br><i>RÉGIMEN DE COMIDAS:</i> Desayuno<br>EXCURSIONES INCLUIDAS en todos los Destinos"
    },
    {
        "destino": "Salta",
        "nombre": "Valle de Cafayate",
        "precio": "100usd",
        "imagen": "img/cafayate.jpg",
        "valor": "salta_cafayate",
        "valor_destino": ["salta"],
        "descripcion": "<i>PASAJES AÉREOS:</i> Buenos Aires - SALTA - Buenos Aires<br></i>SALTA:</i> 3 Noches en Hotel Inkai<br><i>CAFAYATE:</i> 1 Noche en Hotel Muñay<br><i>TRASLADOS:</i> Aeropuerto - Hotel - Aeropuerto<br><i>RÉGIMEN DE COMIDAS:</i> Desayuno<br>EXCURSIONES INCLUIDAS a CACHI, CAFAYATE & CITY EN SALTA"
    }
];

var destinos = [
    {
        "destino": "Río de Janeiro",
        "valor": "rio_de_janeiro",
        "pais": "Brasil",
        "imagen": "img/rio_dest.jpg"
    },
    {
        "destino": "Bariloche",
        "valor": "bariloche",
        "pais": "Argentina",
        "imagen": "img/bariloche_dest.jpg"
    },
    {
        "destino": "Santorini",
        "valor": "santorini",
        "pais": "Grecia",
        "imagen": "img/santorini_dest.jpg"
    },
    {
        "destino": "Cayo Caulker",
        "valor": "cayo_caulker",
        "pais": "Belice",
        "imagen": "img/belice_dest.jpg"
    },
    {
        "destino": "Abu Simbel",
        "valor": "abu_simbel",
        "pais": "Egipto",
        "imagen": "img/abu_simbel_dest.jpg"
    },
    {
        "destino": "Barcelona",
        "valor": "barcelona",
        "pais": "España",
        "imagen": "img/barcelona_dest.jpg"
    },
    {
        "destino": "Nueva York",
        "valor": "nueva_york",
        "pais": "Estados Unidos",
        "imagen": "img/nueva_york_dest.jpg"
    },
    {
        "destino": "Roma",
        "valor": "roma",
        "pais": "Italia",
        "imagen": "img/roma_dest.jpg"
    },
    {
        "destino": "Machu Picchu",
        "valor": "machu_picchu",
        "pais": "Perú",
        "imagen": "img/machu_picchu_dest.jpg"
    },
    {
        "destino": "Salta",
        "valor": "salta",
        "pais": "Argentina",
        "imagen": "img/salta_dest.jpg"
    },
    {
        "destino": "Tucuman",
        "valor": "tucuman",
        "pais": "Argentina",
        "imagen": "img/tucuman_dest.jpg"
    },
    {
        "destino": "Jujuy",
        "valor": "jujuy",
        "pais": "Argentina",
        "imagen": "img/jujuy_dest.jpg"
    },
    {
        "destino": "París",
        "valor": "paris",
        "pais": "Francia",
        "imagen": "img/paris_dest.jpg"
    },
    {
        "destino": "Las Leñas",
        "valor": "las_lenias",
        "pais": "Argentina",
        "imagen": "img/las_lenias_dest.jpg"
    }
];

var vec_destinos = [];
for (i in destinos)
{
    vec_destinos[i] = destinos[i];
}

vec_destinos.sort(function(a,b)
{
    if(a.destino>b.destino) return 1;
    if(a.destino<b.destino) return -1;
});

var vec_paquetes = [];
for (i in paquetes)
{
    vec_paquetes[i] = paquetes[i];
}

vec_paquetes.sort(function(a,b)
{
    if(a.destino>b.destino) return 1;
    if(a.destino<b.destino) return -1;
});

var vec_ofertas = [];
for (i in ofertas)
{
    vec_ofertas[i] = ofertas[i];
}

vec_ofertas.sort(function(a,b)
{
    if(a.destino>b.destino) return 1;
    if(a.destino<b.destino) return -1;
});

