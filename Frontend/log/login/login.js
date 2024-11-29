const loginform = document.querySelector("#loginForm");

loginform.addEventListener("submit", (e) => {
    e.preventDefault();

    const Mail = document.querySelector("#Mail").value;
    const Contraseña = document.querySelector("#Contraseña").value;
    const Users = JSON.parse(localStorage.getItem("users")) || [];
    let validUser = false;

    postData("login", { mail: Mail, contraseña: Contraseña }, (data) => {
        console.log('front',data.data);
        validUser = data.data;

        if (!validUser) {
            return alert("Usuario y/o contraseña incorrectos");
        } else {
            localStorage.setItem("usuarioActual", JSON.stringify({ mail: Mail }));

            // Borra solo las claves 'aula' y 'motivo' en el localStorage
            localStorage.removeItem("aula");
            localStorage.removeItem("motivo");

            alert("Bienvenido!");
            window.location.href = "/Frontend/home/home.html";
        }
    });
});
