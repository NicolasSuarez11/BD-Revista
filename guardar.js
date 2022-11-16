function guardarEdicion () {
    db.collection("Ediciones").add({
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value
    })
    .then((docRef) => {
        alert("Registro exitoso")
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
    })
    .catch((error) => {
        alert("Error en el registro")
        
    });
}

function guardarSeccion () {
    db.collection("Secciones").add({
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