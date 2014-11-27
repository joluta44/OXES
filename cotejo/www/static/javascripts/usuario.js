document.write("<script type='text/javascript' src='static/javascripts/util.js'></script>");

var usuario = {
    nombre: null, clave: null, claveConfirmacion: null, correo: null, edad: 0, listaGoles: null, apellido: null
};

function actualizarUsuario() {
    var url = servicio + "generic/patch/usuario";
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
            Lungo.Router.section("main_section");
            sessionStorage["codigo"] = resp.codigo;
            sessionStorage["correo"] = resp.correo;
            sessionStorage["nombre"] = resp.nombre;
            sessionStorage["apellido"] = resp.apellido;
            $$("#login_correo").html(sessionStorage.getItem("correo"));
            $$("#login_nombre").html(sessionStorage.getItem("nombre") + ' ' + sessionStorage.getItem("apellido"));
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
    $$("#clave_actualizar").val('clave');
}