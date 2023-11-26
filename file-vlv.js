document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const validUsers = [
        {username: 'usuario1', password: '4321'},
        {username: 'Joseph', password: '6969'},
        {username: 'Carlos', password: '5623'}
    ];

    let userIsValid = false;

    for (let user of validUsers) {
        if (username === user.username && password === user.password) {
            userIsValid = true;
            break;
        }
    }

    if (userIsValid) {
        window.location.href = "principal/file-73x.html";
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});
