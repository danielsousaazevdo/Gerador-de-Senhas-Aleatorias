function gerar() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";
    const tam = Number(document.getElementById("tam").value);

    if (!tam || tam <= 0) {
        alert("Digite um tamanho válido para a senha!");
        return;
    }

    let senha = '';
    for (let i = 0; i < tam; i++) {
        senha += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    document.getElementById('res').innerText = `Senha gerada: ${senha}`;
}