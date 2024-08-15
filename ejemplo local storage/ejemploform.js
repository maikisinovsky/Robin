document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const datosFormulario = new FormData(event.target);
    const objetoDatosFormulario = {};
    datosFormulario.forEach((value, key) => {
    objetoDatosFormulario[key] = value;
    });

    let listaDatosFormulario =
      JSON.parse(localStorage.getItem("listaDatosFormulario")) || [];


    listaDatosFormulario.push(objetoDatosFormulario);

    localStorage.setItem(
      "listaDatosFormulario",
      JSON.stringify(listaDatosFormulario)
    );
    
    alert("Datos guardados en localStorage");
  });