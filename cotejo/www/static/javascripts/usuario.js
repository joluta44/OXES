document.write("<script type='text/javascript' src='static/javascripts/util.js'></script>");

var usuario = {
    nombre: null, clave: null, claveConfirmacion: null, correo: null, edad: 0, listaGoles: null, apellido: null
};

function actualizarUsuario() {
    var url = servicio + "generic/put/usuario";
    usuario.codigo = sessionStorage.getItem("codigo");
    usuario.correo = sessionStorage.getItem("correo");
    usuario.nombre = $$("#nombre_actualizar").val();
    usuario.apellido = $$("#apellido_actualizar").val();
    usuario.clave = $$("#clave_actualizar").val();
    usuario.claveConfirmacion = $$("#clave_actualizar_confirmacion").val();

    $.ajax({
        url: url,
        type: 'POST',
        data: JSON.stringify(usuario),
        dataType: 'json',
        contentType: 'application/json',
        success: function (resp) {
            alert('actualización completa.')
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

function cargarDatosUsuarioActualizar() {
    $$("#correo_actualizar").val(sessionStorage.getItem("correo"));
    $$("#nombre_actualizar").val(sessionStorage.getItem("nombre"));
    $$("#apellido_actualizar").val(sessionStorage.getItem("apellido"));
}