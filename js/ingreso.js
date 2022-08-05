function enviar(){
    let nombre=document.getElementById('nombre').value;
    let apellido=document.getElementById('apellido').value;
    let correo=document.getElementById('correo').value;

    fetch('https://crudcrud.com/api/be7cc4ebe2d04d4c93c74a498a64be4c/subgrupo10',
    {
        headers: { "Content-Type": "application/json; charset=utf-8"},
        method: 'POST',
        body: JSON.stringify({
            name: nombre,
            lastName: apellido,
            email: correo
        })
    })
    .then(response => response.json()).then(data =>{
        alert("Enviado con éxito")
        document.getElementById('nombre').value="";
        document.getElementById('apellido').value="";
        document.getElementById('correo').value="";
        })
    }

    document.addEventListener('DOMContentLoaded',()=>{
        document.getElementById('enviar').addEventListener('click', () => {
            enviar();
        })
});