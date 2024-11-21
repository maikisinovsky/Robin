for (let index = 1; index <= 4; index++) {
    document.getElementById(index.toString()).addEventListener("click",()=>{
        postData("sendArduino",{"aula":index.toString()},(data)=>{
            console.log(data)
            if (data === true) {
                
                location.href = "./cargando.html"
            }
        })
    })
}