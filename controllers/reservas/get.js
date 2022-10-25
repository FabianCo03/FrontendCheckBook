function get_reservas() {
    fetch(`${URL}/reservas`, {
        method: "GET",
    })
        .then(res => res.json())
        .then(data => {

            build_list_reservas(data);

        }).catch((error) => {
            debugger
            Swal.fire({
                icon: 'error',
                title: 'Error API get reservas',
                text: `Error Response: ${error.statusText}`
            })
        });
}