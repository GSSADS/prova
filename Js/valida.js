
function validarLogin(event) {
    event.preventDefault(); 
    const emailCorreto = "ads2023@gmail.com";
    const senhaCorreta = "1234";

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    
    if (email === emailCorreto && senha === senhaCorreta) {
        window.location.href = "pagina.html"; 
    } else {
        alert("Email ou senha incorretos. Tente novamente.");
    }
}
