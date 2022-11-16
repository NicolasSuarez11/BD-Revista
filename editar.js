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

//SECCION EDITAR
function editarSeccion(id,nombre) {

    document.getElementById('nombreS').value = nombre;
    var boton = document.getElementById('botonS');
    boton.innerHTML = 'Editar';

    boton.onclick = function(){
        var washingtonRef = db.collection("Secciones").doc(id);
        // Set the "capital" field of the city 'DC'

        var nombre = document.getElementById('nombreS').value;

        return washingtonRef.update({
            nombre: nombre
        })
        .then(() => {
            console.log("Document successfully updated!");
            boton.innerHTML = 'ENVIAR';
            document.getElementById("nombreS").value = "";
            alert("Cambios aplicados")
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
    }
}

//ARTICULO EDITAR
function editarArticulo(id,nombre,apellido) {

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
