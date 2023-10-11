function calculateRankedMatchBelance(victory, defeat) {
    let matchBelance = victory - defeat;
    let level = null;

    if(victory <= 10) level = "Ferro"
    else if(victory >= 11 && victory <= 20) level = "Bronze"
    else if(victory >= 21 && victory <= 50) level = "Prata"
    else if(victory >= 51 && victory <= 80) level = "Ouro"
    else if(victory >= 81 && victory <= 90) level = "Diamante"
    else if(victory >= 91 && victory <= 100) level = "Lendário"
    else level = "Imortal"


    return {
        belance: matchBelance,
        rank: level
    }
}


function init() {
    const victoryBelance = calculateRankedMatchBelance(95, 7);
    console.log(`O Herói tem de saldo de ${victoryBelance.belance} está no nível de ${victoryBelance.rank}`)
}

init();