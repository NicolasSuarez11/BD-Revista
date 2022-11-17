//EDICION ELIMINAR
function eliminarEdicion(id) {
    db.collection("Ediciones").doc(id).delete().then(() => {
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
}

