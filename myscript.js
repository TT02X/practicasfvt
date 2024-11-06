
function validarFormulario(){
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
  
  
    const correctemail = 'lic.danaschellhorn@gmail.com'
    const correctpassword = 'Fvt2024'
  
    if (email === correctemail && password === correctpassword) {
        console.log('Iniciaste Sesión Correctamente');
        alert('Se ha iniciado sesión con éxito');
        window.location.href = "pagina.html";
    } else if (email === correctemail && password !== correctpassword) {
        console.log('Contraseña incorrecta');
        alert('La contraseña es incorrecta');
    } else {
        console.log('El email no está registrado');
        alert('El email no está registrado, por favor contáctanos');
    }
}