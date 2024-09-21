// Función para cargar los datos del municipio seleccionado
async function cargarDatos() {
    const municipio = document.getElementById('municipioSelect').value;
    const url = `https://censopoblacion.azurewebsites.net/API/INDICADORES/2/${municipio}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error al obtener los datos');
        }
        const res = await response.json();
        //res a json
        let data = JSON.parse(res);
        mostrarDatos(data);
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('datos').innerHTML = '<tr><td colspan="2">Error al cargar los datos</td></tr>';
    }
}

// Función para mostrar los datos obtenidos en una tabla
function mostrarDatos(data) {
    const tbody = document.querySelector('#datos tbody');
    tbody.innerHTML = ''; // Limpiar la tabla antes de llenarla

    const indicadores = [
        { nombre: "Nombre", valor: data.nombre },
        { nombre: "Total de Lugares", valor: data.total_lugares },
        { nombre: "Extensión Territorial (km²)", valor: data.ext_territorial },
        { nombre: "Población Total", valor: data.pob_total },
        { nombre: "Índice de Masculinidad", valor: data.indice_masculinidad },
        { nombre: "Promedio de Hijos por Mujer", valor: data.prom_hijos_mujer },
        { nombre: "Edad Promedio", valor: data.edad_promedio },
        { nombre: "Índice de Dependencia", valor: data.indice_dependencia },
        { nombre: "Años Promedio de Estudio", valor: data.anios_prom_estudio },
        { nombre: "Tasa de Alfabetismo (%)", valor: data.alfabetismo },
        { nombre: "Viviendas Particulares", valor: data.viviendas_part },
        { nombre: "Total de Hogares", valor: data.total_hogares },
        { nombre: "Promedio de Personas por Hogar", valor: data.prom_personas_hogar },
        { nombre: "Total Sexo Hombre", valor: data.total_sexo_hombre },
        { nombre: "Porcentaje Sexo Hombre (%)", valor: data.porc_sexo_hombre },
        { nombre: "Total Sexo Mujer", valor: data.total_sexo_mujeres },
        { nombre: "Porcentaje Sexo Mujer (%)", valor: data.porc_sexo_mujeres },
        { nombre: "Total Sector Urbano", valor: data.total_sector_urbano },
        { nombre: "Porcentaje Sector Urbano (%)", valor: data.porc_sector_urbano },
        { nombre: "Total Sector Rural", valor: data.total_sector_rural },
        { nombre: "Porcentaje Sector Rural (%)", valor: data.porc_sector_rural },
        { nombre: "Población Edad 0-14", valor: data.pob_edad_014 },
        { nombre: "Porcentaje Edad 0-14 (%)", valor: data.porc_edad_014 },
        { nombre: "Población Edad 15-64", valor: data.pob_edad_1564 },
        { nombre: "Porcentaje Edad 15-64 (%)", valor: data.porc_edad_1564 },
        { nombre: "Población Edad 65+", valor: data.pob_edad_65 },
        { nombre: "Porcentaje Edad 65+ (%)", valor: data.porc_edad_65 },
        { nombre: "Población Pueblo Maya", valor: data.pob_pueblo_maya },
        { nombre: "Porcentaje Pueblo Maya (%)", valor: data.porc_pueblo_maya },
        { nombre: "Población Pueblo Garífuna", valor: data.pob_pueblo_garifuna },
        { nombre: "Porcentaje Pueblo Garífuna (%)", valor: data.porc_pueblo_garifuna },
        { nombre: "Población Pueblo Xinca", valor: data.pob_pueblo_xinca },
        { nombre: "Porcentaje Pueblo Xinca (%)", valor: data.porc_pueblo_xinca },
        { nombre: "Población Pueblo Afrodescendiente", valor: data.pob_pueblo_afrodescendiente },
        { nombre: "Porcentaje Pueblo Afrodescendiente (%)", valor: data.porc_pueblo_afrodescendiente },
        { nombre: "Población Pueblo Ladino", valor: data.pob_pueblo_ladino },
        { nombre: "Porcentaje Pueblo Ladino (%)", valor: data.porc_pueblo_ladino },
        { nombre: "Población Pueblo Extranjero", valor: data.pob_pueblo_extranjero },
        { nombre: "Porcentaje Pueblo Extranjero (%)", valor: data.porc_pueblo_extranjero }
    ];

    indicadores.forEach(indicador => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${indicador.nombre}</td><td>${indicador.valor}</td>`;
        tbody.appendChild(row);
    });
}

// Función para agregar municipios al selector
function agregarMunicipios() {
    const municipioSelect = document.getElementById('municipioSelect');
    const municipios = [
        { value: 202, text: 'Morazán' },
        { value: 203, text: 'San Agustín Acasaguastlán' },
        { value: 204, text: 'San Cristóbal Acasaguastlán' },
        { value: 205, text: 'El Jícaro' },
        { value: 206, text: 'Sansare' },
        { value: 207, text: 'Sanarate' },
        { value: 208, text: 'San Antonio La Paz' }
    ];

    municipios.forEach(municipio => {
        const option = document.createElement('option');
        option.value = municipio.value;
        option.text = municipio.text;
        municipioSelect.add(option);
    });
}

// Cargar datos iniciales al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    agregarMunicipios();
    cargarDatos();
});
