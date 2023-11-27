document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const response = await fetch('/getUser?correo=' + email + '&contrasenna=' + password);

        if (response.ok) {
            const data = await response.json();
            if (data.length > 0) {
                window.location.href = 'servicios';
            } else {
                errorMessage.style.display = 'block';
            }
        } else {
            console.error('Error al procesar la solicitud');
        }
    });
});
