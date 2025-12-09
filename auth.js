const API_BASE = "https://fstats.onrender.com/api/v1/auth";

// -------- REGISTRO --------
async function registerUser(userData) {
    try {
        const response = await fetch(`${API_BASE}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData)
        });

        const json = await response.json();

        if (!response.ok) {
            console.error("Erro do backend:", json);
            throw new Error(json.message || "Erro ao registrar");
        }

        return json;

    } catch (error) {
        console.error("Erro de requisição:", error);
        throw error;
    }
}


 async function loginUser(payload) {
    try {
        const response = await fetch(`${API_BASE}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Erro ao fazer login:", error);
        throw error;
    }
}
