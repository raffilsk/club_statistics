import dataBase from "./data.js";



const foot = (i) => dataBase[i].foot == "r" ? "Direito" : "Esquerdo";

function element(id) {
    return document.getElementById(id)
}

function container() {
    return `
    ${header()}
    ${main()}
    `
}

function header() {
    return `<header>
                <img src="./assets/bandeira.jpg" />
                <h2>International Super Star Soccer Delux</h2>                
            </header>`
}

function main() {
    return `
    <div id="main">
        ${column1()}
        ${position()}
        ${statistic()}
    </div>
    `
}

function column1() {
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

function dataUlPlayer(i) {
    $(function () {
        $(".content").append(`<ul id="dataUl${i}">
                
                <li>${dataBase[i].name}</li>
                <li>${dataBase[i].age} anos</li>
                <li>Brasil</li>
                <li>${dataBase[i].height}</li>
                <li>${dataBase[i].position}</li>
                <li>${dataBase[i].id}</li>
                <li>${foot(i)}</li>
                           
            </ul>`);
        $(`#dataUl${i - 1}`).remove();
    }
    )
}

function position() {
    return `
    <div id="positions">
        <img src="assets/estadio_001.png">
        <div id="position"></div>
    </div>
    `
}

function alterPos(i) {

    if (dataBase[i].position == "GK") {
        $("#position")
            .css("background", "yellow")
            .css("top", "auto")
            .css("left", "auto")
            .animate({
                bottom: "2rem",
                right: "10.2rem",
            })
    } else if (dataBase[i].position == "LD") {
        $("#position").css("top", "auto").css("left", "auto").animate({
            bottom: "6rem",
            right: "5rem",

        })
    } else if (dataBase[i].position == "LE") {
        $("#position").css("top", "auto").css("right", "auto").animate({
            bottom: "6rem",
            left: "5rem",

        })
    } else if (dataBase[i].position == "ZD") {
        $("#position").css("top", "auto").css("left", "auto").animate({
            bottom: "5rem",
            right: "8rem",

        })
    } else if (dataBase[i].position == "ZE") {
        $("#position").css("top", "auto").css("right", "auto").animate({
            bottom: "5rem",
            left: "8rem",

        })
    }
    else if (dataBase[i].position == "VD") {
        $("#position").css("top", "auto").css("left", "auto").animate({
            bottom: "9rem",
            right: "8rem",
        })
    }
    else if (dataBase[i].position == "VE") {
        $("#position").css("top", "auto").css("left", "auto").animate({
            bottom: "9rem",
            left: "8rem",
        })
    }
    else if (dataBase[i].position == "MD") {
        $("#position").css("bottom", "auto").css("left", "auto").animate({
            top: "8rem",
            right: "8rem"
        })
    }
    else if (dataBase[i].position == "ME") {
        $("#position").css("bottom", "auto").css("right", "auto").animate({
            top: "8rem",
            left: "8rem"
        })
    }
    else if (dataBase[i].position == "AD") {
        $("#position").css("bottom", "auto").css("left", "auto").animate({
            top: "5rem",
            right: "8rem"
        })
    }
    else if (dataBase[i].position == "AE") {
        $("#position").css("bottom", "auto").css("right", "auto").animate({
            top: "5rem",
            left: "8rem"
        })
    }
}

function alterData() {
    let result = ""

    for (let i = 1; i <= Object.keys(dataBase).length; i++) {
        let before = i - 1
        let seconds = ()=>{
            if (before == 0){
                return 1000
            }else{
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
function percent(i) {
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

function statistic() {
    return `
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
                <div id="bar1"></div>
                <div id="bar2"></div>
                <div id="bar3"></div>
                <div id="bar4"></div>
                <div id="bar5"></div>
                <div id="bar6"></div>
            </div>
        </div>
    </div>
    `
}



$(document).ready(function () {
    alterData();
});

element("root").innerHTML = container()
