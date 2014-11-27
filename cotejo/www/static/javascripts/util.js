var servicio = "http://oxes-cotejo.rhcloud.com/webresources/";
//var servicio = "http://10.1.244.33:8081/webresources/";
function message(e) {
    var html = $.parseHTML(e.responseText)
    for (var i = 0; i < html.length; i++) {
        if (html[i].innerHTML != null && html[i].innerHTML.indexOf('java.lang') !== -1) {
            return html[i].innerHTML.split(":")[1];
        }
    }
}

function mensajeSoporte() {
    alert('Error no controlado, contactenos para asistirte o intenta de nuevo.');
}