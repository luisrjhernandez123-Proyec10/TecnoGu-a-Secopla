// Manejo de inicio de sesión, protección de páginas y cierre de sesión (versión móvil)
(function() {
    // ----- LOGIN -----
    const btnLogin = document.getElementById('btnLogin');
    if (btnLogin) {
        btnLogin.addEventListener('click', function() {
            const usuario = document.getElementById('usuario').value.trim();
            const contrasena = document.getElementById('contrasena').value.trim();
            const errorMsg = document.getElementById('error-msg');

            const usuariosValidos = {
                'luishdez12': '12345',
                'efrain1': '54321',
                'wicho1': 'lr1201'
            };

            if (usuariosValidos[usuario] && usuariosValidos[usuario] === contrasena) {
                sessionStorage.setItem('loggedIn', 'true');
                window.location.href = 'menu.html';
            } else {
                if (errorMsg) {
                    errorMsg.textContent = 'Usuario o contraseña incorrectos';
                }
            }
        });
    }

    // ----- FUNCIÓN GLOBAL: CERRAR SESIÓN -----
    window.logout = function() {
        sessionStorage.removeItem('loggedIn');
        window.location.replace('index.html');
    };

    // ----- PROTECCIÓN DE TODAS LAS PÁGINAS (EXCEPTO LOGIN) -----
    document.addEventListener('DOMContentLoaded', function() {
        const body = document.body;
        if (!body) return;

        const esLogin = body.classList.contains('login-page');
        if (!esLogin) {
            const logged = sessionStorage.getItem('loggedIn') === 'true';
            if (!logged) {
                window.location.replace('index.html');
            }
        }
    });
})();