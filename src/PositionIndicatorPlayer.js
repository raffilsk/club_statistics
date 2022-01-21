import dataBase from "./data.js";

export function column2() {
    return `
    <div id="positions">
        <img src="assets/estadio_001.png">
        <div id="position"></div>
    </div>
    `
}

export function alterPos(i) {

    if (dataBase[i].position == "GK") {
        $("#position")
            .css("background", "yellow")
            .css("top", "auto")
            .css("left", "auto")
            .animate({
                bottom: "2rem",
                right: "11.8rem",
            })
    } else if (dataBase[i].position == "LD") {
        $("#position").css("top", "auto").css("left", "auto").animate({
            bottom: "6rem",
            right: "7rem",

        })
    } else if (dataBase[i].position == "LE") {
        $("#position").css("top", "auto").css("right", "auto").animate({
            bottom: "6rem",
            left: "7rem",

        })
    } else if (dataBase[i].position == "ZD") {
        $("#position").css("top", "auto").css("left", "auto").animate({
            bottom: "5rem",
            right: "9rem",

        })
    } else if (dataBase[i].position == "ZE") {
        $("#position").css("top", "auto").css("right", "auto").animate({
            bottom: "5rem",
            left: "9rem",

        })
    }
    else if (dataBase[i].position == "VD") {
        $("#position").css("top", "auto").css("left", "auto").animate({
            bottom: "9rem",
            right: "9rem",
        })
    }
    else if (dataBase[i].position == "VE") {
        $("#position").css("top", "auto").css("left", "auto").animate({
            bottom: "9rem",
            left: "9rem",
        })
    }
    else if (dataBase[i].position == "MD") {
        $("#position").css("bottom", "auto").css("left", "auto").animate({
            top: "8rem",
            right: "9rem"
        })
    }
    else if (dataBase[i].position == "ME") {
        $("#position").css("bottom", "auto").css("right", "auto").animate({
            top: "8rem",
            left: "9rem"
        })
    }
    else if (dataBase[i].position == "AD") {
        $("#position").css("bottom", "auto").css("left", "auto").animate({
            top: "5rem",
            right: "9rem"
        })
    }
    else if (dataBase[i].position == "AE") {
        $("#position").css("bottom", "auto").css("right", "auto").animate({
            top: "5rem",
            left: "9rem"
        })
    }
}