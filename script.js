// Manejo de inicio de sesión y protección de páginas
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
                // Marca sesión iniciada
                sessionStorage.setItem('loggedIn', 'true');
                // Redirige al menú si los datos son correctos
                window.location.href = 'menu.html';
            } else {
                // Muestra mensaje de error
                if (errorMsg) {
                    errorMsg.textContent = 'Usuario o contraseña incorrectos';
                }
            }
        });
    }

    // ----- FUNCIÓN GLOBAL DE CIERRE DE SESIÓN -----
    window.logout = function() {
        sessionStorage.removeItem('loggedIn');
        // replace evita que con "atrás" vuelva a la app
        window.location.replace('index.html');
    };

    // ----- PROTECCIÓN DE PÁGINAS (todas menos la de login) -----
    document.addEventListener('DOMContentLoaded', function() {
        const body = document.body;
        if (!body) return;

        // La única página pública es la de login (clase login-page)
        const esLogin = body.classList.contains('login-page');
        if (!esLogin) {
            const logged = sessionStorage.getItem('loggedIn') === 'true';
            if (!logged) {
                // Si no hay sesión válida, siempre manda al login
                window.location.replace('index.html');
            }
        }
    });
})();