//EDICION ELIMINAR
function eliminarEdicion(id) {
    db.collection("Ediciones").doc(id).delete().then(() => {
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
}

//SECCION ELIMINAR
function eliminarSeccion(id) {
    db.collection("Secciones").doc(id).delete().then(() => {
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
}

//ARTICULO ELIMINAR
function eliminarArticulo(id) {
    db.collection("Articulos").doc(id).delete().then(() => {
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
}