function post_mesa(payload) {
    fetch(`${URL}/mesa`, {
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
                        title: 'Error API post mesas',
                        text: `Error Response: ${error.sqlMessage}`
                    })
                })
            } else {
                Swal.fire(
                    'Listo',
                    'Creaste una mesa',
                    'success'
                )
                get_mesas();
            }
        }).catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Error API post mesas',
                text: `Error Response: ${error.statusText}`
            })
        });
}