const formReporte = document.getElementById('formReporte');
const tabla = document.getElementById('tablaReportes');

async function cargarReportes(){

    const respuesta = await fetch('/api/reportes');
    const datos = await respuesta.json();

    tabla.innerHTML = '';

    datos.forEach(reporte => {

        tabla.innerHTML += `
        <tr>
            <td>${reporte.id}</td>
            <td>${reporte.titulo}</td>
            <td>${reporte.provincia}</td>
            <td>${reporte.nivel_riesgo}</td>
        </tr>
        `;
    });
}

if(formReporte){

formReporte.addEventListener('submit', async(e) => {

    e.preventDefault();

    const reporte = {
        titulo: document.getElementById('titulo').value,
        provincia: document.getElementById('provincia').value,
        canton: document.getElementById('canton').value,
        descripcion: document.getElementById('descripcion').value,
        nivel_riesgo: document.getElementById('nivel_riesgo').value,
        fecha_reporte: new Date(),
        estado: 'Pendiente'
    };

    await fetch('/api/reportes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reporte)
    });

    formReporte.reset();

    cargarReportes();
});
}

cargarReportes();