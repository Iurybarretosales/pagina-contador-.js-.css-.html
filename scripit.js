function CONTAR(){
    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    var res = window.document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('Preencha os dados!')
        res.innerHTML= 'Impossivel contar!'
    }else{
        res.innerHTML = 'CONTANDO: <br>' 
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <=0 ){
            window.alert("Passo invalido , considerando passo '1'")
            p = 1
        }
        if (i < f){
            //contagem crescente
            for (var c = i; c <= f; c+=p){
                res.innerHTML += ` ${c}\u{1F449} `
            }
            
        } else {
            //conatgem decrescente
            for(var c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1f449}`
            }
            
        }res.innerHTML += `\u{1f3c1}`
    }
}
