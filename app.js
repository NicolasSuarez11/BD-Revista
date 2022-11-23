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
    var fecha = document.getElementById('fechaE').value;

    db.collection("Ediciones").add({
        date: fecha
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        alert("Registro exitoso")
        document.getElementById('fechaE').value = '';
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

// ARTICULOS

function guardarArticulo () {
    var titulo = document.getElementById('titulo').value;
    var texto = document.getElementById('texto').value;
    var link = document.getElementById('link').value;
    var fecha = document.getElementById('fecha').value;
    var seccion = document.getElementById('seccion').value;

    db.collection("Articulos").add({
        title: titulo,
        text: texto,
        link: link,
        date: fecha,
        section: seccion
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        alert("Registro exitoso")
        document.getElementById('titulo').value = '';
        document.getElementById('texto').value = '';
        document.getElementById('link').value = '';
        document.getElementById('fecha').value = '';
        document.getElementById('seccion').value = '';
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
    db.collection("Ediciones").onSnapshot((querySnapshot) => {
        tabla.innerHTML = "";
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            tabla.innerHTML += `
            <tr>
                  <td>${doc.data().date}</td>
                  <td><a class="btn btn-info" style="$colors=red" onclick=window.location.replace("secciones.html")>Ver</td>
                  <td><button class="btn btn-primary" onclick="editarEdicion('${doc.id}','${doc.data().date}')">Editar</button></td>
                  <td><a class="btn btn-danger" onclick="eliminarEdicion('${doc.id}')">Eliminar</a></td>
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
                  <td>${doc.data().type}</td>
                  <td><a class="btn btn-info" style="$colors=red" onclick=window.location.replace("articulos.html")>Ver</td>
                  <td><button class="btn btn btn-primary" onclick="editarSeccion('${doc.id}','${doc.data().type}')">Editar</button></td>
                  <td><a class="btn btn-danger" onclick="eliminarSeccion('${doc.id}')">Eliminar</a></td>
            </tr>
            `
        });
    });
}

// ARTICULOS

function verArticulo() {
    var tabla = document.getElementById("tabla");
    db.collection("Articulos").onSnapshot((querySnapshot) => {
        tabla.innerHTML = "";
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            tabla.innerHTML += `
            <tr>
                <td>${doc.data().date}</td>
                <td>${doc.data().section}</td>
                  <td>${doc.data().title}</td>
                  <td>${doc.data().text}</td>
                  <td><button class="btn btn-primary" onclick="editarArticulo('${doc.id}','${doc.data().title}','${doc.data().text}','${doc.data().link}','${doc.data().date}','${doc.data().section}')">Editar</button></td>
                  <td><a class="btn btn-danger" onclick="eliminarArticulo('${doc.id}')">Eliminar</a></td>
            </tr>
            `
        });
    });
}


// <-------------BORRAR DOCUMENTO-------------->
// EDICION

function eliminarEdicion(id) {
    db.collection("Ediciones").doc(id).delete().then(() => {
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

// ARTICULOS

function eliminarArticulo(id) {
    db.collection("Articulos").doc(id).delete().then(() => {
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
}

// <-------------EDITAR DOCUMENTO-------------->
// EDICION

function editarEdicion(id,fecha) {

    document.getElementById('fechaE').value = fecha;
    var boton = document.getElementById('boton');
    boton.innerHTML = 'Editar';

    boton.onclick = function(){
        var washingtonRef = db.collection("Ediciones").doc(id);
        // Set the "capital" field of the city 'DC'

        var fecha = document.getElementById('fechaE').value;

        return washingtonRef.update({
            date: fecha
        })
        .then(() => {
            console.log("Document successfully updated!");
            boton.innerHTML = 'ENVIAR';
            document.getElementById('fechaE').value = '';
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

// ARTICULOS

function editarArticulo(id,titulo,texto,link,fecha,seccion) {

    document.getElementById('titulo').value = titulo;
    document.getElementById('texto').value = texto;
    document.getElementById('link').value = link;
    document.getElementById('fecha').value = fecha;
    document.getElementById('seccion').value = seccion;
    var boton = document.getElementById('boton');
    boton.innerHTML = 'Editar';

    boton.onclick = function(){
        var washingtonRef = db.collection("Articulos").doc(id);
        // Set the "capital" field of the city 'DC'

        var titulo = document.getElementById('titulo').value;
        var texto = document.getElementById('texto').value;
        var link = document.getElementById('link').value;
        var fecha = document.getElementById('fecha').value;
        var seccion = document.getElementById('seccion').value;

        return washingtonRef.update({
            title: titulo,
            text: texto,
            link: link,
            date: fecha,
            section: seccion
        })
        .then(() => {
            console.log("Document successfully updated!");
            boton.innerHTML = 'ENVIAR';
            document.getElementById('titulo').value = '';
            document.getElementById('texto').value = '';
            document.getElementById('link').value = '';
            document.getElementById('fecha').value = '';
            document.getElementById('seccion').value = '';
            window.location.reload()
            alert("Cambios aplicados")
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
    }
}
