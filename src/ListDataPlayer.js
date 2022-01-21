import dataBase from "./data.js";

export function column4(){
    let row = "<ul><li>"
    for (let x = 1; x <= Object.keys(dataBase).length; x++){
        row += `<ul class="inline" hidden>
                <li>${dataBase[x].name}</li>
                <li>${dataBase[x].score.game}</li>
                <li>${dataBase[x].score.cards.y}</li>
                <li>${dataBase[x].score.cards.r}</li>
                </ul>`
    }
    row += "</li></ul>"
    return row;
}