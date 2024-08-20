document.addEventListener("DOMContentLoaded", function () {
    const listaDatosFormulario = JSON.parse(
    localStorage.getItem("listaDatosFormulario")
    );

    console.log(listaDatosFormulario)
    const container = document.querySelector(".tablaRobin");
    container.classList.add("datos");

    if (listaDatosFormulario && listaDatosFormulario.length > 0) {
    container.innerHTML = `
        <div class="grid-table">
            <div class="grid-header">Nombre</div>
            <div class="grid-header">Primer Destino</div>
            <div class="grid-header">Segundo Destino</div>
        </div>
    `;
        
        
    listaDatosFormulario.forEach((datosFormulario) => {
        const row = document.createElement("div");
        row.classList.add("grid-row");
        row.innerHTML = `
            <div class="grid-cell">${datosFormulario.nombre}</div>
            <div class="grid-cell">${datosFormulario.primerDestino}</div>
            <div class="grid-cell">${datosFormulario.segundoDestino}</div>
        `;
        container.querySelector(".grid-table").appendChild(row);
    });
    } else {
    container.innerHTML = `<h3>No hay actividad pendiente de robin</h3>`;    }

    });
