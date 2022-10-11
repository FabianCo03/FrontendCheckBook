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
                alert(`Error Response: ${response.statusText}`);
            } else {
                get_clients();
            }
        }).catch((error) => {
            alert(`Error Catch POST: ${error.statusText}`);
        });
}