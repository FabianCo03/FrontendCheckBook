function update_mesa() {
    fetch(`${URL}/mesa/:id`, {
        method: "PUT",
    })
        .then(res => res.json())
        .then(data => {
        }).catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Error API update mesas',
                text: `Error Response: ${error.statusText}`
            })
        });
}