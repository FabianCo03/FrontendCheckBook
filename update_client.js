//UPDATE
function update_client() {
    //fetch devuelve una promesa, las promesas podemos resolverlas con .then
    fetch(`${URL}/cliente/:cedula`, {
        method: "PUT",
    })
        .then(res => res.json())
        .then(data => {
        }).catch((error) => {
            alert(`Error Catch UPDATE: ${error.statusText}`);
        });
}
// async await; pausa la ejecución de la función asíncrona y espera la resolución de la Promise pasada y, a continuación, reanuda la ejecución de la función async y devuelve el valor resuelto