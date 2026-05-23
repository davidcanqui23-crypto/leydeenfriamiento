document.getElementById('btnCalcular').addEventListener('click', function() {
    const tO = parseFloat(document.getElementById('tO').value);
    const ts = parseFloat(document.getElementById('ts').value);
    const k = parseFloat(document.getElementById('k').value);
    const t = parseFloat(document.getElementById('t').value);

    if (isNaN(tO) || isNaN(ts) || isNaN(k) || isNaN(t)) {
        document.getElementById('res').textContent = "Por favor, llena todos los campos.";
        return;
    }

    const exponente = -k * t;
    const resultadoExacto = ts + (tO - ts) * Math.exp(exponente);
    const resultadoRedondeado = Math.round(resultadoExacto);

    document.getElementById('res').textContent = resultadoRedondeado + " °C";
});