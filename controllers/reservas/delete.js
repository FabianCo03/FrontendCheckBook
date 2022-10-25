function delete_reserva(id) {
    fetch(`${URL}/reserva/${id}`, {
        method: "DELETE",
    })
        .then(res => res.json())
        .then(data => {
            Swal.fire({
                icon: 'error',
                title: '❌',
                text: 'Cancelaste la reserva'
            })
            get_reservas();
        }).catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Error API delete reservas',
                text: `Error Response: ${error.statusText}`
            })
        });
}