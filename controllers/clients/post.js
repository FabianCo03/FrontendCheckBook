function post_client(payload) {
    fetch(`${URL}/cliente`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    })
        .then(response => {
            if (response.status !== 200) {
                response.json().then(error => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error API post clients',
                        text: `Error Response: ${error.sqlMessage}`
                    })
                })
            } else {
                Swal.fire(
                    'Hola ' + payload.nombre,
                    'Registro éxitoso',
                    'success'
                )
                get_clients();
            }
        }).catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Error Catch post client',
                text: `Error Response: ${error.statusText}`
            })
        });
}