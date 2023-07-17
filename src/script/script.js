//alert('Pressione a tecla F11')
let num = document.getElementById('num')
let c = 0
const TIME_IN_MINUTE = 1 * 60 * 1000
function contar () {
    if (c < 100) {
        c += 1
        num.innerHTML = ` ${c}%`
    }
    else {
        c = 0
        num.innerHTML = ` ${c}%`
    }
}
setInterval(contar(),TIME_IN_MINUTE)
