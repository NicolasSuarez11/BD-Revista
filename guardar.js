function guardarEdicion () {
    db.collection("Ediciones").add({
        numero: document.getElementById("numeroE").value,
        fecha: document.getElementById("fechaE").value
    })
    .then((docRef) => {
        alert("Registro exitoso")
        document.getElementById("numeroE").value = "";
        document.getElementById("fechaE").value = "";
    })
    .catch((error) => {
        alert("Error en el registro")
        
    });
}
