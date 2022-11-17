function ver() {
    db.collection("Revistas").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            document.getElementById("imprimir").innerHTML=`${doc.data().nombre}`
            
        });
    });
}

var tabla = document.getElementById("tabla");
db.collection("Ediciones").onSnapshot((querySnapshot) => {
    tabla.innerHTML = "";
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().nombre}`);
        tabla.innerHTML += `
        <tr>
              <th scope="row">${doc.id}</th>
              <td>${doc.data().nombre}</td>
              <td>${doc.data().apellido}</td>
              <td><button class="btn btn-danger" onclick="eliminar('${doc.id}')">Eliminar</button></td>
              <td><button class="btn btn-warning" onclick="editar('${doc.id}','${doc.data().nombre}','${doc.data().apellido}')">Editar</button></td>
        </tr>
        `
    });
});