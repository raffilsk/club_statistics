import dataBase from "./data.js";

export function column1() {
    return `    
    <div id="data">
        <div id="imgs">
            <img id="img0" src="assets/0.jpg" />
        </div>
        ${description()}
    `
}

function description() {
    return `
    <div id="description">
    <div class="titles">
        <ul>
            <li>Nome:</li>
            <li>Idade:</li>
            <li>País:</li>
            <li>Altura:</li>
            <li>Posição:</li>
            <li>Número:</li>
            <li>Pé:</li>                
        </ul>
    </div>
    <div class="content">
        <ul id="dataUl0">                
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</div>
</div>
    `
}

export function dataUlPlayer(i) {
    $(function () {
        $(".content").append(`<ul id="dataUl${i}">
                
                <li>${dataBase[i].name}</li>
                <li>${dataBase[i].age} anos</li>
                <li>Brasil</li>
                <li>${dataBase[i].height}</li>
                <li> ${renamePositionPlayer(dataBase[i].position)}</li>
                <li>${dataBase[i].id}</li>
                <li>${foot(i)}</li>

                           
            </ul>`);
        $(`#dataUl${i - 1}`).remove();
    }
    )
}
const foot = (i) => dataBase[i].foot == "r" ? "Direito" : "Esquerdo";
function renamePositionPlayer(x) {
    if (x == "GK") {
        return "Goleiro"
    }
    else if (x == "ZD" || x == "ZE") {
        return "Zagueiro"
    }
    else if (x == "LD" || x == "LE") {
        return "Lateral"
    }
    else if (x == "VD" || x == "VE") {
        return "Volante"
    }
    else if (x == "MD" || x == "ME") {
        return "Meia"
    }
    else if (x == "AD" || x == "AE") {
        return "Atacante"
    }
}