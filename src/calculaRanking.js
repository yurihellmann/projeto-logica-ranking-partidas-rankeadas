let saldoVitorias = calculaSaldoVitorias(107, 5)
let nivelJogador = verificaNivel(saldoVitorias)

console.log(`O herói tem saldo de **${saldoVitorias}** vitórias e está no nível **${nivelJogador}**`)

function calculaSaldoVitorias(vitorias, derrotas){
    let saldo = vitorias - derrotas
    return saldo
}

function verificaNivel(saldoVitorias){
    if (saldoVitorias < 10){
        return nivel = "Ferro"
    }else if(saldoVitorias > 10 && saldoVitorias <= 20){
        return nivel = "Bronze"
    }else if(saldoVitorias > 20 && saldoVitorias <= 50){
        return nivel = "Prata"
    }else if(saldoVitorias > 50 && saldoVitorias <= 80){
        return nivel = "Ouro"
    }else if(saldoVitorias > 80 && saldoVitorias <= 90){
        return nivel = "Diamante"
    }else if(saldoVitorias > 90 && saldoVitorias <= 100){
        return nivel = "Lendário"
    }else{
        return nivel = "Imortal"
    }
}