//EDICION EDITAR
function editarEdicion(id,numero,fecha) {

    document.getElementById('numeroE').value = numero;
    document.getElementById('fechaE').value = fecha;
    var boton = document.getElementById('botonE');
    boton.innerHTML = 'Editar';

    boton.onclick = function(){
        var washingtonRef = db.collection("Ediciones").doc(id);
        // Set the "capital" field of the city 'DC'

        var numero = document.getElementById('numeroE').value;
        var fecha = document.getElementById('fechaE').value;

        return washingtonRef.update({
            numero: numero,
            fecha: fecha
        })
        .then(() => {
            console.log("Document successfully updated!");
            boton.innerHTML = 'ENVIAR';
            document.getElementById("numeroE").value = "";
            document.getElementById("fechaE").value = "";
            alert("Cambios aplicados")
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
    }
}

