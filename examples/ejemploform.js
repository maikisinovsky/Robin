document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todos los botones para el primer destino
  const primerDestinoBtns = document.querySelectorAll(".primerDestinoBtn");
  // Selecciona todos los botones para el segundo destino
  const segundoDestinoBtns = document.querySelectorAll(".segundoDestinoBtn");

  // Obtiene los campos ocultos de entrada para el primer y segundo destino
  const primerDestinoInput = document.getElementById("primerDestino");
  const segundoDestinoInput = document.getElementById("segundoDestino");

  // Añade un evento a cada botón del primer destino para asignar su valor al campo oculto correspondiente
  primerDestinoBtns.forEach(button => {
    button.addEventListener("click", function () {
      primerDestinoInput.value = button.textContent;
    });
  });
  document.getElementById
  // Añade un evento a cada botón del segundo destino para asignar su valor al campo oculto correspondiente
  segundoDestinoBtns.forEach(button => {
    button.addEventListener("click", function () {
      segundoDestinoInput.value = button.textContent;
    });
  });

  // Maneja el envío del formulario, previniendo la acción predeterminada, almacenando los datos en localStorage y mostrando un mensaje de confirmación
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
});