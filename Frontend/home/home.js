document.addEventListener("DOMContentLoaded", () => {
    const h1Element = document.querySelector(".grid-container h1");
    const botonUsar = document.getElementById("botonUsar");

    const aula = localStorage.getItem("aula");
    const motivo = localStorage.getItem("motivo");

    console.log(aula)

    if (aula && motivo) {
        h1Element.textContent = `Robin está yendo a ${aula}`;
        botonUsar.textContent = "MOTIVO";
    } else {
        h1Element.textContent = "Robin está quieto";
        botonUsar.textContent = "Usar";
    }

    botonUsar.addEventListener("click", (event) => {
        event.preventDefault();

        if (aula && motivo) {
            alert(`Motivo: ${motivo}`);
            window.location.href = "../start";
        } else {
            alert("Por favor, selecciona un aula y un motivo primero.");
        }
    });
});

