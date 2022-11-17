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

function guardarSeccion () {
    db.collection("Secciones").add({
        nombre: document.getElementById("nombreS").value
    })
    .then((docRef) => {
        alert("Registro exitoso")
        document.getElementById("nombreS").value = "";
    })
    .catch((error) => {
        alert("Error en el registro")
    });
}

function guardarArticulo () {
    db.collection("Articulos").add({
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