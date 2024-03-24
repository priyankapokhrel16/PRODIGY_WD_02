let [segundos, minutos, horas] = [0, 0, 0];
let displayTempo = document.getElementById("displayTempo");
let temporizador = null;
function cronometro() {
    segundos++;
    if (segundos == 60) {
        segundos = 0;
        minutos++;
        if (minutos == 60) {
            minutos = 0;
            horas++;
        }
    }
    let h = horas < 10 ? "0" + horas : horas;
    let m = minutos < 10 ? "0" + minutos : minutos;
    let s = segundos < 10 ? "0" + segundos : segundos;
    displayTempo.innerHTML = h + ":" + m + ":" + s;
}
function iniciarCronometro() {
    if (temporizador !== null) {
        clearInterval(temporizador);
    }
    temporizador = setInterval(cronometro, 1000);
}
function pararIniciarCronometro() {
    clearInterval(temporizador);
}
function reiniciarCronometro() {
    clearInterval(temporizador);
    [segundos, minutos, horas] = [0, 0, 0];
    displayTempo.innerHTML = "00:00:00";
}
