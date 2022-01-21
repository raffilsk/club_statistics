import dataBase from "./data.js";

export function column3() {
    let column = `
        <div id="statistic">
            <h1>Estatisticas da temporada</h1>
            <div id="graphic">
                <div id="titles">
                    <div id="title">Jogos</div>
                    <div id="title">Vitórias</div>
                    <div id="title">Empates</div>
                    <div id="title">Gols</div>
                    <div id="title">Assistencias</div>
                    <div id="title">Roubadas</div>
                </div>            
                <div id="bars">
    `
    for (let x = 1; x <= 6; x++) { column += `<div id=bar${x}></div>` }
    column += `</div></div></div>`
    return column;
}

export function percent(i) {
    let game = dataBase[i].score.game * 11.6;
    let wins = dataBase[i].score.wins * 11.6;
    let draw = dataBase[i].score.draw * 11.6;
    let goals = dataBase[i].score.goals * 11.6;
    let assistence = dataBase[i].score.assistence * 11.6;
    let stole = dataBase[i].score.stole * 11.6;


    $("#bar1").css("background", "red").animate({
        width: `${game}px`,
        transition: '2s'
    })

    $("#bar2").css("background", "green").animate({
        width: `${wins}px`,
        transition: '2s'
    })

    $("#bar3").css("background", "yellow").animate({
        width: `${draw}px`,
        transition: '2s'
    })

    $("#bar4").css("background", "blue").animate({
        width: `${goals}px`,
        transition: '2s'
    })

    $("#bar5").css("background", "purple").animate({
        width: `${assistence}px`,
        transition: '2s'
    })

    $("#bar6").css("background", "gray").animate({
        width: `${stole}px`,
        transition: '2s'
    })

}