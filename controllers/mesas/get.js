//fetch otro ejemplo parecido a innerHTML, accede y manipula partes del canal HTTP
function get_mesas(reservas) {
    //fetch devuelve una promesa, las promesas podemos resolverlas con .then
    fetch(`${URL}/mesas`, {
        method: "GET",
    })
        .then(res => res.json())
        .then(data => {

            build_list_mesas(data);
            build_mapa_mesas(data, reservas);
            agregar_opciones_mesas(data);

        }).catch((error) => {
            debugger
            Swal.fire({
                icon: 'error',
                title: 'Error API get mesas',
                text: `Error Response: ${error.statusText}`
            })
        });
}