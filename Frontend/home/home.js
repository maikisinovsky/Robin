document.addEventListener("DOMContentLoaded", () => {
    let tablaRobin = document.getElementById("tablaRobin");
    
             

    postData("guardados",{user:(JSON.parse(localStorage.getItem("usuarioActual")).mail)},(data) => {
        for (let index = 0; index < 5; index++) {
            if (data.data[index]) {
                console.log(data.data[index].destination);
            
            // Crear la sección principal
            const firstSeccion = document.createElement("section");
            firstSeccion.classList.add("envio" + (index+1)  + "placeholder");
        
            // Crear el div principal
            const firstDiv = document.createElement("div");
            firstDiv.classList.add("envio" + (index+1));
        
            // Crear el elemento h2 para el usuario
            const quien = document.createElement("h2");
            quien.textContent = data.data[index].user;
        
            // Crear el elemento h2 para el destino (aula)
            const aula = document.createElement("h2");
            aula.textContent = data.data[index].destination;
        
            // Agregar el h2 del usuario al div principal
            firstDiv.appendChild(quien);
        
            // Crear el div para el aula
            const firstDivAula = document.createElement("div");
            firstDivAula.classList.add("envio" + (index+1) + "aula");
        
            // Agregar el h2 del aula al div del aula
            firstDivAula.appendChild(aula);
        
            // Agregar el div principal y el div del aula a la sección principal
            firstSeccion.appendChild(firstDiv);
            firstSeccion.appendChild(firstDivAula);
        
            // Finalmente, agregar la sección al contenedor adecuado (por ejemplo, tablaRobin)
            tablaRobin.appendChild(firstSeccion);
            }else{
            
                // Crear la sección principal
                const firstSeccion = document.createElement("section");
                firstSeccion.classList.add("envio" + (index+1) +"placeholder");
            
                // Crear el div principal
                const firstDiv = document.createElement("div");
                firstDiv.classList.add("envio" + (index+1));
            
                // Crear el elemento h2 para el usuario
                const quien = document.createElement("h2");
            
                // Crear el elemento h2 para el destino (aula)
                const aula = document.createElement("h2");
            
                // Agregar el h2 del usuario al div principal
                firstDiv.appendChild(quien);
            
                // Crear el div para el aula
                const firstDivAula = document.createElement("div");
                firstDivAula.classList.add("envio" + (index+1) + "aula");
            
                // Agregar el h2 del aula al div del aula
                firstDivAula.appendChild(aula);
            
                // Agregar el div principal y el div del aula a la sección principal
                firstSeccion.appendChild(firstDiv);
                firstSeccion.appendChild(firstDivAula);
            
                // Finalmente, agregar la sección al contenedor adecuado (por ejemplo, tablaRobin)
                tablaRobin.appendChild(firstSeccion);
            }
        }
        
    })
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

