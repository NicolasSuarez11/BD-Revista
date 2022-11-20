// <-------------CONEXION BD-------------->

//import firebase from "firebase/app";
//import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB_-ZW0rlMR72q8GLqy5yvHjCFaGN-Xlqk",
  authDomain: "bd-revista-b1a50.firebaseapp.com",
  projectId: "bd-revista-b1a50",
  storageBucket: "bd-revista-b1a50.appspot.com",
  messagingSenderId: "844178724423",
  appId: "1:844178724423:web:882c9e45f62fee48750362"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

// <-------------GUARDAR-------------->
// EDICION

function guardarEdicion () {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;

    db.collection("Revista").add({
        nombre: nombre,
        apellido: apellido
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        alert("Registro exitoso")
        document.getElementById('nombre').value = '';
        document.getElementById('apellido').value = '';
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
        alert("Error en el registro")
        
    });
}

// SECCIONES

function guardarSeccion () {
    var tipo = document.getElementById('tipo').value;

    db.collection("Secciones").add({
        type: tipo
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        alert("Registro exitoso")
        document.getElementById('tipo').value = '';
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
        alert("Error en el registro")
        
    });
}

// <-------------VER TABLA-------------->
// EDICION


function verEdicion() {
    var tabla = document.getElementById("tabla");
    db.collection("Revista").onSnapshot((querySnapshot) => {
        tabla.innerHTML = "";
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().nombre}`);
            tabla.innerHTML += `
            <tr>
                  <th scope="row">${doc.id}</th>
                  <td>${doc.data().nombre}</td>
                  <td>${doc.data().apellido}</td>
                  <td><a class="btn btn-danger" onclick="eliminarEdicion('${doc.id}')">Eliminar</a></td>
                  <td><button class="btn btn-warning" onclick="editarEdicion('${doc.id}','${doc.data().nombre}','${doc.data().apellido}')">Editar</button></td>
            </tr>
            `
        });
    });
}

// SECCIONES


function verSeccion() {
    var tabla = document.getElementById("tabla");
    db.collection("Secciones").onSnapshot((querySnapshot) => {
        tabla.innerHTML = "";
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            tabla.innerHTML += `
            <tr>
                  <th scope="row">${doc.id}</th>
                  <td>${doc.data().type}</td>
                  <td><a class="btn btn-danger" onclick="eliminarSeccion('${doc.id}')">Eliminar</a></td>
                  <td><button class="btn btn-warning" onclick="editarSeccion('${doc.id}','${doc.data().type}')">Editar</button></td>
            </tr>
            `
        });
    });
}


// <-------------BORRAR DOCUMENTO-------------->
// EDICION

function eliminarEdicion(id) {
    db.collection("Revista").doc(id).delete().then(() => {
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
}

// SECCIONES

function eliminarSeccion(id) {
    db.collection("Secciones").doc(id).delete().then(() => {
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
}

// <-------------EDITAR DOCUMENTO-------------->
// EDICION

function editarEdicion(id,nombre,apellido) {

    document.getElementById('nombre').value = nombre;
    document.getElementById('apellido').value = apellido;
    var boton = document.getElementById('boton');
    boton.innerHTML = 'Editar';

    boton.onclick = function(){
        var washingtonRef = db.collection("Revista").doc(id);
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
            document.getElementById('nombre').value = '';
            document.getElementById('apellido').value = '';
            window.location.reload()
            alert("Cambios aplicados")
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
    }
}

// SECCIONES

function editarSeccion(id,tipo) {

    document.getElementById('tipo').value = tipo;
    var boton = document.getElementById('boton');
    boton.innerHTML = 'Editar';

    boton.onclick = function(){
        var washingtonRef = db.collection("Secciones").doc(id);
        // Set the "capital" field of the city 'DC'

        var tipo = document.getElementById('tipo').value;

        return washingtonRef.update({
            type: tipo
        })
        .then(() => {
            console.log("Document successfully updated!");
            boton.innerHTML = 'ENVIAR';
            document.getElementById('tipo').value = '';
            window.location.reload()
            alert("Cambios aplicados")
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
    }
}
