import dataBase from "./data.js";
import { header }  from "./Header.js";
import { column1, dataUlPlayer } from "./BasicDataPlayer.js";
import { column2, alterPos } from "./PositionIndicatorPlayer.js";
import { column3, percent } from "./StatisticDataPlayer.js"
import { column4 } from "./ListDataPlayer.js";

function element(id) {
    return document.getElementById(id)
}

function container() {
    return `
    ${header()}
    ${main()}
    `
}

function main() {
    return `
    <div id="main">
        ${column1()}
        ${column2()}
        ${column3()}
        ${column4()}        
    </div>`
}
function alterData() {
    let result = ""

    for (let i = 1; i <= Object.keys(dataBase).length; i++) {
        let before = i - 1
        let seconds = () => {
            if (before == 0) {
                return 1000
            } else {
                return 5000 * before
            }
        }

        setTimeout(() => {
            result += $(`#img${before}`).remove();
            $("#imgs").append(`<img id="img${i}" src="assets/${i}.jpg" />`)
            dataUlPlayer(i);
            alterPos(i);
            percent(i);

            setTimeout(() => {
                if (i == Object.keys(dataBase).length) {
                    location.reload();
                }
            }, 5000)

        }, seconds())
    }
    return result
}

$(document).ready(function () {
    alterData();
});

element("root").innerHTML = container()
