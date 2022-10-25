//fetch otro ejemplo parecido a innerHTML, accede y manipula partes del canal HTTP
function get_clients() {
    //fetch devuelve una promesa, las promesas podemos resolverlas con .then
    fetch(`${URL}/clientes`, {
        method: "GET",
    })
        .then(res => res.json())
        .then(data => {

            build_list_clients(data);
            agregar_opciones_clientes(data);

        }).catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Error API get clients',
                text: `Error Response: ${error.statusText}`
            })
        });
}