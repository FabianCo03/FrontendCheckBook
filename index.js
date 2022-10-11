const URL = 'http://localhost:9000/api';
get_clients();
const formulario_usuarios = document.getElementById("formulario_clientes");

formulario_usuarios.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = Object.fromEntries(
        new FormData(e.target)
    )
    if (data.cedula && data.nombre && data.telefono && data.correo) {
        post_client(data);
        formulario_usuarios.reset();
        Swal.fire(
            'Hola ' + data.nombre,
            'Registro éxitoso',
            'success'
        )
    } else {
        alert("Complete los campos requeridos")
    }

})
//fetch otro ejemplo parecido a innerHTML, accede y manipula partes del canal HTTP
function get_clients() {
    //fetch devuelve una promesa, las promesas podemos resolverlas con .then
    fetch(`${URL}/clientes`, {
        method: "GET",
    })
        .then(res => res.json())
        .then(data => {

            build_list(data);

        }).catch((error) => {
            alert(`Error Catch GET: ${error.statusText}`);
        });
}

//construir lista
function build_list(data) {
    const lista = document.getElementById("listado_clientes");
    lista.innerHTML = "";
    if (data.length) {
        data.forEach(element => {
            lista.innerHTML += `<div class="content-row-client"><p class="text-client">${element.nombre}</p><button onclick="delete_client('${element.cedula}')">Borrar</button></div>`;
        });
    } else {
        lista.innerHTML = `<div class="content-row-client"><p class="text-client">No hay clientes creados :(<p></div>`;
    }
}