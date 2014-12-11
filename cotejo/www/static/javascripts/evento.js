document.write("<script type='text/javascript' src='static/javascripts/util.js'></script>");
document.write("<script type='text/javascript' src='static/javascripts/usuario.js'></script>");
document.write("<script type='text/javascript' src='static/javascripts/sitio.js'></script>");
document.write("<script type='text/javascript' src='static/javascripts/grupo.js'></script>");

var evento = {
    fecha: null, listaGrupos: null, sitio: null, tipoEvento: null, administrador: null, codigo: 0
};

function crearEvento() {
    var url = servicio + "evento/post/evento";

    evento.fecha = "2014-12-09";

    usuario.codigo = sessionStorage.getItem("codigo");
    usuario.correo = sessionStorage.getItem("correo");
    usuario.nombre = sessionStorage.getItem("nombre");
    usuario.apellido = sessionStorage.getItem("apellido");

    sitio.codigo = 123;
    grupo.codigo = 1;
    grupoRival.codigo = 2;

    var data = JSON.stringify({evento: evento, usuario: usuario, sitio: sitio, grupo: grupo, grupoRival: grupoRival});

    $.ajax({
        url: url,
        type: 'POST',
        data: data,
        dataType: 'json',
        contentType: 'application/json',
        success: function (resp) {
            alert('¡¡¡ Evento Creado !!!');
        },
        error: function (e) {
            var mensaje = message(e);
            if (mensaje == null) {
                mensajeSoporte();
            } else {
                alert(mensaje);
            }
        }
    });
}

function cargarEventosUsuario() {
    var url = servicio + "evento/get/eventos/" + sessionStorage.getItem("codigo");

    $.ajax({
        url: url,
        type: 'GET',
        data: {},
        dataType: 'json',
        contentType: 'application/json',
        success: function (resp) {
            alert(resp);
        },
        error: function (e) {
            var mensaje = message(e);
            if (mensaje == null) {
                mensajeSoporte();
            } else {
                alert(mensaje);
            }
        }
    });

}