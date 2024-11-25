let selectedValue = null;

for (let index = 1; index <= 4; index++) {
    document.getElementById(index.toString()).addEventListener("click", () => {
        selectedValue = index.toString();
        console.log(`Seleccionaste: L${selectedValue}`);

        localStorage.setItem("aula", `L${selectedValue}`);

        for (let i = 1; i <= 4; i++) {
            document.getElementById(i.toString()).style.display = "none";
        }

        document.querySelector(".label").style.display = "none";
        document.querySelector(".motivoLabel").style.display = "block";
        document.querySelector(".motivo").style.display = "block";
        document.querySelector(".placeholderMotivo").style.display = "block";
        document.querySelector(".enviar").style.display = "block";
    });
}

document.querySelector(".enviar").addEventListener("click", () => {
    if (selectedValue) {
        const motivo = document.querySelector(".motivo").value;

        localStorage.setItem("motivo", motivo);

        console.log(`Valor almacenado en Local Storage: L${selectedValue}, Motivo: ${motivo}`);

        postData("sendArduino", { aula: selectedValue, motivo }, (data) => {
            console.log(data);
            window.location.href = "./cargando.html";
        });
    } else {
        alert("Por favor, selecciona un aula antes de enviar.");
    }
});
