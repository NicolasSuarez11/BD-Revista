function editar(id,nombre,apellido) {

    document.getElementById('nombre').value = nombre;
    document.getElementById('apellido').value = apellido;
    var boton = document.getElementById('boton');
    boton.innerHTML = 'Editar';

    boton.onclick = function(){
        var washingtonRef = db.collection("Ediciones").doc(id);
        // Set the "capital" field of the city 'DC'

        var nombre = document.getElementById('nombre').value;
        var apellido = document.getElementById('apellido').value;

        return washingtonRef.update({
            nombre: nombre,
            apellido: apellido
        })
        .then(() => {
            console.log("Document successfully updated!");
            boton.innerHTML = 'ENVIAR';
            document.getElementById("nombre").value = "";
            document.getElementById("apellido").value = "";
            alert("Cambios aplicados")
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
    }
}
