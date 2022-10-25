function post_reserva(payload) {
    fetch(`${URL}/reserva`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    })
        .then(response => {
            if (response.status !== 200) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error API post reservas',
                    text: `Error Response: ${response.statusText}`
                })
            } else {
                Swal.fire(
                    'OK',
                    'Reserva creada',
                    'success'
                )
                get_reservas();
            }
        }).catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Error API post reservas',
                text: `Error Response: ${error.statusText}`
            })
        });
}