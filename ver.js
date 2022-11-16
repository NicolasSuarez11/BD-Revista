function ver() {
    db.collection("Revistas").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            document.getElementById("imprimir").innerHTML=`${doc.data().nombre}`
            
        });
    });
}