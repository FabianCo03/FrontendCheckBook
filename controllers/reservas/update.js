function update_reserva() {
    fetch(`${URL}/reserva/:id_clientes/:id_mesas`, {
        method: "PUT",
    })
        .then(res => res.json())
        .then(data => {
        }).catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Error API update reservas',
                text: `Error Response: ${error.statusText}`
            })
        });
}