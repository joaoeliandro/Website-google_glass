function mudaFoto(foto) {
    document.getElementById("icone").src = foto
}

function calc_total() {
    var qtn = parseInt(document.getElementById('cQtn').value)
    total = qtn * 1500
    document.getElementById('cVal').value = total
}