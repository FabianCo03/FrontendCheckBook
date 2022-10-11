//fetch otro ejemplo parecido a innerHTML, accede y manipula partes del canal HTTP
function get_clients() {
    //fetch devuelve una promesa, las promesas podemos resolverlas con .then
    fetch(`${URL}/clientes`, {
        method: "GET",
    })
        .then(res => res.json())
        .then(data => {

            build_list(data);

        }).catch((error) => {
            alert(`Error Catch GET: ${error.statusText}`);
        });
}