
 import {
   postData,
   fetchData
 } from "soquetic";

const signupForm = document.querySelector("#signupForm")
signupForm.addEventListener("submit", (e)=> {
   e.preventDefault()
   const Nombre = document.querySelector("#Nombre").value
   const Mail = document.querySelector("#Mail").value
   const Contraseña = document.querySelector("#Contraseña").value

 

   const Users = JSON.parse(localStorage.getItem("users")) || []
   const isUserRegistrated = Users.find(user => user.Mail === Mail ) 
   if (isUserRegistrated) { 
   return alert("El usuario ya se encuentra registrado") 
   } 

   Users.push({Nombre: Nombre, Mail: Mail, Contraseña: Contraseña})
   localStorage.setItem("users", JSON.stringify(Users))
   alert("Registro Exitoso")
   window.location.href = "login.html"

}) 