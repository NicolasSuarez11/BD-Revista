//EDICION VER
var tablaE = document.getElementById("tablaEdicion");
db.collection("Ediciones").onSnapshot((querySnapshot) => {
    tablaE.innerHTML = "";
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        tablaE.innerHTML += `
        <tr>
              <th scope="row">${doc.id}</th>
              <td>${doc.data().numero}</td>
              <td>${doc.data().fecha}</td>
              <td><button class="btn btn-danger" onclick="eliminarEdicion('${doc.id}')">Eliminar</button></td>
              <td><button class="btn btn-warning" onclick="editarEdicion('${doc.id}','${doc.data().numero}','${doc.data().fecha}')">Editar</button></td>
        </tr>
        `
    });
});

//SECCIONES VER
var tablaS = document.getElementById("tablaSeccion");
db.collection("Secciones").onSnapshot((querySnapshot) => {
    tablaS.innerHTML = "";
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        tablaS.innerHTML += `
        <tr>
              <th scope="row">${doc.id}</th>
              <td>${doc.data().nombre}</td>
              <td><button class="btn btn-danger" onclick="eliminarSeccion('${doc.id}')">Eliminar</button></td>
              <td><button class="btn btn-warning" onclick="editarSeccion('${doc.id}','${doc.data().nombre}')">Editar</button></td>
        </tr>
        `
    });
});

//ARTICULOS VER
var tablaA = document.getElementById("tablaArticulo");
db.collection("Articulos").onSnapshot((querySnapshot) => {
    tablaA.innerHTML = "";
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().nombre}`);
        tablaA.innerHTML += `
        <tr>
              <th scope="row">${doc.id}</th>
              <td>${doc.data().nombre}</td>
              <td>${doc.data().apellido}</td>
              <td><button class="btn btn-danger" onclick="eliminarArticulo('${doc.id}')">Eliminar</button></td>
              <td><button class="btn btn-warning" onclick="editarArticulo('${doc.id}','${doc.data().nombre}','${doc.data().apellido}')">Editar</button></td>
        </tr>
        `
    });
});