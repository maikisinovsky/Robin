
document.addEventListener("DOMContentLoaded", function () {
    const listaDatosFormulario = JSON.parse(
      localStorage.getItem("listaDatosFormulario")
    );

    console.log(listaDatosFormulario)
    const container = document.createElement("div");
    container.classList.add("datos");
  
  
    if (listaDatosFormulario && listaDatosFormulario.length > 0) {
      container.innerHTML = `
        <h2>Los datos (literalmente un dataframe)</h2>
        <div class="grid-table">
          <div class="grid-header">Índice (en la lista)</div>
          <div class="grid-header">Nombre</div>
          <div class="grid-header">Primer Destino</div>
          <div class="grid-header">Segundo Destino</div>
        </div>
      `;
  
        
      listaDatosFormulario.forEach((datosFormulario) => {
        const row = document.createElement("div");
        row.classList.add("grid-row");
        row.innerHTML = `
          <div class="grid-cell">${listaDatosFormulario.indexOf(
            datosFormulario
          )}</div>
          <div class="grid-cell">${datosFormulario.nombre}</div>
          <div class="grid-cell">${datosFormulario.primerDestino}</div>
          <div class="grid-cell">${datosFormulario.segundoDestino}</div>
        `;
        container.querySelector(".grid-table").appendChild(row);
      });
    } else {
      container.innerHTML = `<h2>No hay datos subidos</h2>`;
    }
    document.body.appendChild(container);
  });
  