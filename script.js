function gerar() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*"
    const tam = document.getElementByID("tam".value)
    let senha = ''
    for (let i = 0; i < tam; i++) {
        senha += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    document.getElementById('res').innerText = `Senha gerada: ${senha}`;
}