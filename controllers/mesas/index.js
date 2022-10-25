const formulario_mesas = document.getElementById("formulario_mesas");

formulario_mesas.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = Object.fromEntries(
        new FormData(e.target)
    )
    if (data.num_mesa && data.num_sillas) {
        post_mesa(data);
        formulario_mesas.reset();
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Falta crear una mesa'
        })
    }

})