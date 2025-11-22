document.getElementById('btnLogin').addEventListener('click', function() {
    const usuario = document.getElementById('usuario').value.trim();
    const contrasena = document.getElementById('contrasena').value.trim();
    const errorMsg = document.getElementById('error-msg');

    const usuariosValidos = {
        'luishdez12': '12345',
        'efrain1': '54321',
        'wicho1': 'lr1201'
    };

    if (usuariosValidos[usuario] && usuariosValidos[usuario] === contrasena) {
        // Redirige al menú si los datos son correctos
        window.location.href = 'menu.html';
    } else {
        // Muestra mensaje de error
        errorMsg.textContent = 'Usuario o contraseña incorrectos';
    }
});
