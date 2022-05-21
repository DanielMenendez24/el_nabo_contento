function validaVacio(valor) {

    valor = valor.replace("&nbsp;", "");
    valor = valor == undefined ? "" : valor;

    if (!valor || 0 === valor.trim().length) {
        return true;
    } else {
        return false;
    }

}

function validarMail() {

    var email = document.getElementById("emailForm").nodeValue;

    var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!expr.test(email)) {
        alert("Error: la dirección de correo electrónico " + email + " no es correcta. Por favor, ingrese un correo electrónico válido.");
        return false;
    }

    if (validaVacio(correo.value)) {
        alert("Error: el campo no puede estar vacio. Por favor, ingrese un correo electrónico.");
        return false;
    }

    return true;

}