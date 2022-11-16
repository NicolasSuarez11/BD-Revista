function guardarEdicion () {
    db.collection("Ediciones").add({
        nombre: document.getElementById("name").value,
        apellido: document.getElementById("last").value
    })
    .then((docRef) => {
        alert("Registro exitoso")
        document.getElementById("name").value = "";
        document.getElementById("last").value = "";
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