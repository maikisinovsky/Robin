for (let index = 1; index <= 4; index++) {
    document.getElementById(index.toString()).addEventListener("click", () => {
        postData("sendArduino", {"aula": index.toString()}, (data) => {
            console.log(data);
            if (true === true) {
                window.location.href = "./cargando.html";
            }
        });
    });
}
