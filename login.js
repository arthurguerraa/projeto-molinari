import { loginUser } from "./auth.js";

document.getElementById("loginForm").addEventListener("submit", async (e) => {

    e.preventDefault();

    const credenciais = {
        login: document.getElementById("login").value,
        password: document.getElementById("password").value
    };

    console.log("Tentando login:", credenciais);

    try {

        const resultado = await loginUser(credenciais);

        console.log("Resposta da API:", resultado);

        alert("Login realizado com sucesso!");

        window.location.href = "perfil.html";

    } catch (error) {

        alert("Erro no login: " + error.message);

    }

});