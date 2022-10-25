const formulario_usuarios = document.getElementById("formulario_clientes");

formulario_usuarios.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = Object.fromEntries(
        new FormData(e.target)
    )
    if (data.cedula && data.nombre && data.telefono && data.correo && data.fecha_nacimiento) {
        debugger
        if (validateAge(data.fecha_nacimiento)) {
            post_client(data);
            formulario_usuarios.reset();
        } else {
            Swal.fire({
                icon: 'error',
                title: 'No eres mayor de edad',
                text: ''
            })
        }

    } else {
        Swal.fire({
            icon: 'error',
            title: 'Te falta algo',
            text: 'Verifica los campos requeridos'
        })
    }
})

function validateAge(date) {
    debugger
    var today = new Date();
    var birthdate = new Date(date);
    var age = today.getFullYear() - birthdate.getFullYear();
    var m = today.getMonth() - birthdate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }

    return age >= 18;
}