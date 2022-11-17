//EDICION VER
var tabla = document.getElementById("tablaEdicion");
db.collection("Ediciones").onSnapshot((querySnapshot) => {
    tabla.innerHTML = "";
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        tabla.innerHTML += `
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

