import { registerUser } from "./auth.js";

document.getElementById("registerForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const usuario = {
        profilePicture: "",
        username: document.getElementById("username").value,
        dateOfBirth: document.getElementById("dateOfBirth").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        confirmPassword: document.getElementById("confirmPassword").value
    };

    console.log("Enviando cadastro:", usuario);

    try {
        const resultado = await registerUser(usuario);

        console.log("RESPOSTA DO BACKEND:", resultado);

        alert("Cadastro realizado com sucesso!");
        window.location.href = "login.html";

    } catch (error) {
        alert("Erro ao cadastrar: " + error.message);
    }
});
