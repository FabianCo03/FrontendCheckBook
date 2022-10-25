const URL = 'http://localhost:9000/api';

const mapa = document.getElementById("mapa");
const select_mesas = document.getElementById("select-mesa");
const select_clientes = document.getElementById("select-clientes");
const buscar_reservas = document.getElementById("buscar_reserva")

if (buscar_reservas) {
    buscar_reservas.addEventListener("submit", function (e) {
        e.preventDefault();
        const data = Object.fromEntries(
            new FormData(e.target)
        )
        if (data.fecha && data.hora) {
            search_booking(data);
            //buscar_reservas.reset();
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Te falta algo',
                text: 'Verifica los campos requeridos'
            })
        }
    })
}

function build_list_clients(data) {
    const lista = document.getElementById("listado_clientes");
    if (lista) {
        lista.innerHTML = "";
        if (data.length) {
            data.forEach(element => {
                lista.innerHTML += `<div class="content-row"><p class="text-row">${element.nombre}</p><button onclick="delete_client('${element.cedula}')">Delete</button></div>`;
            });
        } else {
            lista.innerHTML = `<div class="content-row"><p class="text-row">No hay clientes creados :(<p></div>`;
        }
    }
}

function build_list_mesas(data) {
    const lista = document.getElementById("listado_mesas");
    if (lista) {
        lista.innerHTML = "";
        if (data.length) {
            data.forEach(element => {
                lista.innerHTML += `<div class="content-row"><p class="text-row">Mesa ${element.num_mesa} - Sillas ${element.num_sillas}</p><button onclick="delete_mesa('${element.id}')">Delete</button></div>`;
            });
        } else {
            lista.innerHTML = `<div class="content-row"><p class="text-row">No hay mesas :(<p></div>`;
        }
    }
}

function build_list_reservas(data) {
    const lista = document.getElementById("listado_reservas");
    if (lista) {
        lista.innerHTML = "";
        if (data.length) {
            data.forEach(element => {
                lista.innerHTML += `<div class="content-row"><p class="text-row">Reserva: ${element.id} - Fecha: ${element.fecha.split('T')[0]} - Hora: ${element.hora.replace(':00', '')}</p><button onclick="delete_reserva('${element.id}')">Delete</button></div>`;
            });
        } else {
            lista.innerHTML = `<div class="content-row"><p class="text-row">Crea una reserva<p></div>`;
        }
    }
}

function build_mapa_mesas(mesas, reservas) {
    if (mapa) {
        mapa.innerHTML = "";
        if (mesas.length) {
            mesas.forEach(mesa => {
                if (reservas) {
                    let index_reserva = -1;
                    reservas.forEach((reserva, index) => {
                        if (reserva.id_mesas === mesa.id) {
                            //existe reserva para esta mesa
                            index_reserva = index;
                        }
                    });
                    if (index_reserva > -1) {
                        const reserva = reservas[index_reserva];
                        mapa.innerHTML += `<div class="mesa-ocupada"><div class="content-info-mesa"><p class="text-row">Mesa: ${mesa.num_mesa}</p><img class="image-tables" src="../styles/images/${mesa.num_sillas}.png"></img><p class="text-row">Cliente: ${reserva.nombre}</p></div></div>`;
                    } else {
                        mapa.innerHTML += `<div class="mesa-libre"><div class="content-info-mesa"><p class="text-row">Mesa: ${mesa.num_mesa}</p><img class="image-tables" src="../styles/images/${mesa.num_sillas}.png"></img><p>Disponible</p></div></div>`;
                    }
                } else {
                    mapa.innerHTML += `<div class="mesa-libre"><div class="content-info-mesa"><p class="text-row">Mesa: ${mesa.num_mesa}</p><img class="image-tables" src="../styles/images/${mesa.num_sillas}.png"></img><p>Disponible</p></div></div>`;
                }
            })
        }
    }
}

function agregar_opciones_clientes(data) {
    if (select_clientes) {
        select_clientes.innerHTML = "";
        const option = document.createElement("option");
        option.value = "";
        option.text = "Seleccionar cliente";
        select_clientes.appendChild(option);

        data.forEach(element => {
            const option = document.createElement("option");
            option.value = element.cedula;
            option.text = element.nombre;
            select_clientes.appendChild(option);
        });
    }
}

function agregar_opciones_mesas(data) {
    if (select_mesas) {
        select_mesas.innerHTML = "";
        const option = document.createElement("option");
        option.value = "";
        option.text = "Seleccionar mesa";
        select_mesas.appendChild(option);

        data.forEach(element => {
            const option = document.createElement("option");
            option.value = element.id;
            option.text = element.num_mesa;
            select_mesas.appendChild(option);

        });
    }
}

get_clients();
get_mesas();
get_reservas();