const API_BASE = "https://fstats.onrender.com/api/v1/auth";

export async function registerUser(usuario) {

    const response = await fetch(`${API_BASE}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Erro ao cadastrar");
    }

    return data;
}

export async function loginUser(credenciais) {

    const response = await fetch(`${API_BASE}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credenciais)
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Erro ao fazer login");
    }

    const token = data.data.token;

    localStorage.setItem("token", token);

    return data;
}