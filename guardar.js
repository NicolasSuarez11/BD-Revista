function guardar () {
    db.collection("Revistas").add({
        nombre: document.getElementById("name").value,
        apellido: document.getElementById("last").value
    })
    .then((docRef) => {
        alert("Registro exitoso")
    })
    .catch((error) => {
        alert("Error en el registro")
    });
}