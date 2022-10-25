//DELETE
function delete_client(cedula) {
    //fetch devuelve una promesa, las promesas podemos resolverlas con .then
    fetch(`${URL}/cliente/${cedula}`, {
        method: "DELETE",
    })
        //.then(res => res.json())
        .then(response => {
            if (response.status !== 200) {
                response.json().then(error => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error API delete clients',
                        text: `Error Response: ${error.sqlMessage}`
                    })
                })
            } else {
                Swal.fire({
                    icon: 'success',
                    title: '🗑',
                    text: 'Borraste el usuario'
                })
                get_clients();
            }

        }).catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Error API',
                text: `Error Catch DELETE: ${error.statusText}`
            })
        });
}