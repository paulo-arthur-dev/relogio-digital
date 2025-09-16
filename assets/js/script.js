const divHora = document.getElementById('horas')
const divMinutos = document.getElementById('minutos')
const divSegundos = document.getElementById('segundos')
const background = document.querySelector('.background')

const atualizarRelogio = () => {
    let date = new Date()

    let hora = String(date.getHours()).padStart(2, '0')
    let min = String(date.getMinutes()).padStart(2, '0')
    let seg = String(date.getSeconds()).padStart(2, '0')

    divHora.textContent = hora
    divMinutos.textContent = min
    divSegundos.textContent = seg

    if (hora >= 1 && hora < 6) {
        background.className = 'background-madruga'
    } else if (hora >= 6 && hora < 12) {
        background.className = 'background-dia'
    } else if (hora < 18) {
        background.className = 'background-tarde'
    } else {
        background.className = 'background-noite'
    }
}

setInterval(atualizarRelogio)
atualizarRelogio()


