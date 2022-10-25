const formulario_reservas = document.getElementById("formulario_reservas");

formulario_reservas.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = Object.fromEntries(
        new FormData(e.target)
    )

    if (data.id_clientes && data.id_mesas && data.fecha && data.hora) {
        data.id_mesas = Number(data.id_mesas);
        post_reserva(data);
        formulario_reservas.reset();

    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Complete los campos requeridos'
        })
    }
})