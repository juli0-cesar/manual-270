const textos = [
    "LUCHA POR TU MUNDO Y POR EL MIO",
    "TU SITIO VERDE CONFIABLE",
    "UN HABITO DE RAIZ ",
    "GERMINANDO UN MUNDO MEJOR JUNTOS ",
    "OBTIENES LO QUE COSECHAS :)"
];
const indiceAleatorio = Math.floor(Math.random() * textos.length);
document.getElementById("texto").innerText = textos[indiceAleatorio];
function toggleSwitch() {
    // Verificamos el estado del checkbox
    const isChecked = document.getElementById('toggleSwitch').checked;
    // Cambiamos la clase del body según el estado del checkbox
    document.body.className = isChecked ? 'dark-theme' : 'light-theme';
}

