//DELETE
function delete_mesa(id) {
    //fetch devuelve una promesa, las promesas podemos resolverlas con .then
    fetch(`${URL}/mesa/${id}`, {
        method: "DELETE",
    })
        //.then(res => res.json())
        .then(response => {
            if (response.status !== 200) {
                response.json().then(error => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error API delete mesas',
                        text: `Error Response: ${error.sqlMessage}`
                    })
                })
            } else {
                Swal.fire({
                    icon: 'success',
                    title: '🗑',
                    text: 'Borraste la mesa'
                })
                get_mesas();
            }
        }).catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Error API delete mesas',
                text: `Error Response: ${error.statusText}`
            })
        });
}