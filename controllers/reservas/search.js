function search_booking(payload) {
    fetch(`${URL}/reservas`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    })
        .then(res => res.json())
        .then(data => {

            get_mesas(data);

        }).catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Error API search reservas',
                text: `Error Response: ${error.statusText}`
            })
        });
}