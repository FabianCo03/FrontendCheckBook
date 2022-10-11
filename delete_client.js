//DELETE
function delete_client(cedula) {
    //fetch devuelve una promesa, las promesas podemos resolverlas con .then
    fetch(`${URL}/cliente/${cedula}`, {
        method: "DELETE",
    })
        .then(res => res.json())
        .then(data => {
            Swal.fire({
                icon: 'error',
                title: '🗑',
                text: 'Borraste el usuario'
            })
            get_clients();
        }).catch((error) => {
            alert(`Error Catch DELETE: ${error.statusText}`);
        });
}