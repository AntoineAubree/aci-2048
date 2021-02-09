var link00 = document.getElementById("tab00");
var link01 = document.getElementById("tab01");
var link02 = document.getElementById("tab02");
var link03 = document.getElementById("tab03");
var link10 = document.getElementById("tab10");
var link11 = document.getElementById("tab11");
var link12 = document.getElementById("tab12");
var link13 = document.getElementById("tab13");
var link20 = document.getElementById("tab20");
var link21 = document.getElementById("tab21");
var link22 = document.getElementById("tab22");
var link23 = document.getElementById("tab23");
var link30 = document.getElementById("tab30");
var link31 = document.getElementById("tab31");
var link32 = document.getElementById("tab32");
var link33 = document.getElementById("tab33");
var linkScore = document.getElementById("tabScore2");

var tabLabel = [
    [link00, link01, link02, link03],
    [link10, link11, link12, link13],
    [link20, link21, link22, link23],
    [link30, link31, link32, link33]
];

function colorUpdate() {
    for (var i = 0; i < tabLabel.length; i++) {
        for (var j = 0; j < tabLabel.length; j++) {
            if (tabLabel[i][j].innerHTML == 2) {
                tabLabel[i][j].style.color = "white";
                tabLabel[i][j].style.backgroundColor = "#8bc34a";
            }
            else if (tabLabel[i][j].innerHTML == 4) {
                tabLabel[i][j].style.color = "white";
                tabLabel[i][j].style.backgroundColor = "#4caf50";
            }
            else if (tabLabel[i][j].innerHTML == 8) {
                tabLabel[i][j].style.color = "white";
                tabLabel[i][j].style.backgroundColor = "#009688";
            }
            else if (tabLabel[i][j].innerHTML == 16) {
                tabLabel[i][j].style.color = "white";
                tabLabel[i][j].style.backgroundColor = "#00bcd4";
            }
            else if (tabLabel[i][j].innerHTML == 32) {
                tabLabel[i][j].style.color = "white";
                tabLabel[i][j].style.backgroundColor = "#03a9f4";
            }
            else if (tabLabel[i][j].innerHTML == 64) {
                tabLabel[i][j].style.color = "white";
                tabLabel[i][j].style.backgroundColor = "#2196f3";
            }
            else if (tabLabel[i][j].innerHTML == 128) {
                tabLabel[i][j].style.color = "white";
                tabLabel[i][j].style.backgroundColor = "#3f51b5";
            }
            else if (tabLabel[i][j].innerHTML == 256) {
                tabLabel[i][j].style.color = "white";
                tabLabel[i][j].style.backgroundColor = "#673ab7";
            }
            else if (tabLabel[i][j].innerHTML == 512) {
                tabLabel[i][j].style.color = "white";
                tabLabel[i][j].style.backgroundColor = "#9c27b0";
            }
            else if (tabLabel[i][j].innerHTML == 1024) {
                tabLabel[i][j].style.color = "white";
                tabLabel[i][j].style.backgroundColor = "#e91e63";
            }
            else if (tabLabel[i][j].innerHTML == 2048) {
                tabLabel[i][j].style.color = "#white";
                tabLabel[i][j].style.backgroundColor = "#f44336";
            }
            else {
                tabLabel[i][j].style.backgroundColor = "#cddc39";
            }
        }
    }
}

function box() {
    var random1 = Math.floor((Math.random() * 9) + 1);
    return random1;
}

function caseTableau() {
    var random2 = Math.floor((Math.random() * 16));
    return random2;
}

function init() {
    var compteur = 0;
    while (compteur < 3) {
        var caseTab = 0;
        var randomBox = box();
        if (randomBox > 6) {
            caseTab = 4;
        }
        else {
            caseTab = 2;
        }
        var randomCase = caseTableau();
        if (tabLabel[parseInt(randomCase / 4)][randomCase % 4].innerHTML == "") {
            tabLabel[parseInt(randomCase / 4)][randomCase % 4].innerHTML = caseTab;
            colorUpdate();
            compteur++;
        }
    }
}

function ajout() {
    var compteur = 0;
    while (compteur < 1) {
        var caseTab = 0;
        var randomBox = box();
        if (randomBox > 6) {
            caseTab = 4;
        }
        else {
            caseTab = 2;
        }
        var randomCase = caseTableau();
        if (tabLabel[parseInt(randomCase / 4)][randomCase % 4].innerHTML == "") {
            tabLabel[parseInt(randomCase / 4)][randomCase % 4].innerHTML = caseTab;
            colorUpdate();
            compteur++;
        }
    }
}

document.onkeyup = applyKey;
function applyKey(event) {
    var modif = "false";
    if (event.key == "ArrowUp") {
        modif = up();
    }
    else if (event.key == "ArrowDown") {
        modif = down();
    }
    else if (event.key == "ArrowLeft") {
        modif = left();
    }
    else if (event.key == "ArrowRight") {
        modif = right();
    }
    if (modif == "true") {
        get2048();
        ajout();
        isFull();
    }
}

function isFull() {
    var compteur = 0;
    for (var i = 1; i < 3; i++) {
        for (var j = 1; j < 3; j++) {
            if ((tabLabel[i][j].innerHTML != "") && (tabLabel[i - 1][j].innerHTML != tabLabel[i][j].innerHTML) && (tabLabel[i][j - 1].innerHTML != tabLabel[i][j].innerHTML) && (tabLabel[i + 1][j].innerHTML != tabLabel[i][j].innerHTML) && (tabLabel[i][j + 1].innerHTML != tabLabel[i][j].innerHTML)) {
                compteur++;
            }
        }
    }
    for (var i = 1; i < 3; i++) {
        if ((tabLabel[i][0].innerHTML != "") && (tabLabel[i - 1][0].innerHTML != tabLabel[i][0].innerHTML) && (tabLabel[i + 1][0].innerHTML != tabLabel[i][0].innerHTML) && (tabLabel[i][1].innerHTML != tabLabel[i][0].innerHTML)) {
            compteur++;
        }
    }
    for (var i = 1; i < 3; i++) {
        if ((tabLabel[i][3].innerHTML != "") && (tabLabel[i - 1][3].innerHTML != tabLabel[i][3].innerHTML) && (tabLabel[i + 1][3].innerHTML != tabLabel[i][3].innerHTML) && (tabLabel[i][2].innerHTML != tabLabel[i][3].innerHTML)) {
            compteur++;
        }
    }
    for (var j = 1; j < 3; j++) {
        if ((tabLabel[0][j].innerHTML != "") && (tabLabel[0][j - 1].innerHTML != tabLabel[0][j].innerHTML) && (tabLabel[0][j + 1].innerHTML != tabLabel[0][j].innerHTML) && (tabLabel[1][j].innerHTML != tabLabel[0][j].innerHTML)) {
            compteur++;
        }
    }
    for (var j = 1; j < 3; j++) {
        if ((tabLabel[3][j].innerHTML != "") && (tabLabel[3][j - 1].innerHTML != tabLabel[3][j].innerHTML) && (tabLabel[3][j + 1].innerHTML != tabLabel[3][j].innerHTML) && (tabLabel[2][j].innerHTML != tabLabel[3][j].innerHTML)) {
            compteur++;
        }
    }
    if ((tabLabel[0][0].innerHTML != "") && (tabLabel[0][1].innerHTML != tabLabel[0][0].innerHTML) && (tabLabel[1][0].innerHTML != tabLabel[0][0].innerHTML)) {
        compteur++;
    }
    if ((tabLabel[3][3].innerHTML != "") && (tabLabel[3][2].innerHTML != tabLabel[3][3].innerHTML) && (tabLabel[2][3].innerHTML != tabLabel[3][3].innerHTML)) {
        compteur++;
    }
    if ((tabLabel[0][3].innerHTML != "") && (tabLabel[0][2].innerHTML != tabLabel[0][3].innerHTML) && (tabLabel[1][3].innerHTML != tabLabel[0][3].innerHTML)) {
        compteur++;
    }
    if ((tabLabel[3][0].innerHTML != "") && (tabLabel[2][0].innerHTML != tabLabel[3][0].innerHTML) && (tabLabel[3][1].innerHTML != tabLabel[3][0].innerHTML)) {
        compteur++;
    }
    if (compteur == 16) {
        alert("Vous avez perdu");
    }
}

function get2048() {
    var compteur = 0;
    for (var i = 0; i < tabLabel.length; i++) {
        for (var j = 0; j < tabLabel.length; j++) {
            if (tabLabel[i][j].innerHTML == 2048) {
                compteur++;
            }
        }
    }
    if (compteur == 1) {
        alert("Vous avez gagné");
    }
}

function up() {
    var modif = "true";
    var compteur = 0;
    while (modif == "true") {
        modif = "false";
        for (var i = 1; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                if (tabLabel[i][j].innerHTML != "" && tabLabel[i - 1][j].innerHTML == "") {
                    tabLabel[i - 1][j].innerHTML = tabLabel[i][j].innerHTML;
                    tabLabel[i][j].innerHTML = "";
                    modif = "true";
                    compteur++;
                }
                if (tabLabel[i][j].innerHTML != "" && tabLabel[i][j].innerHTML == tabLabel[i - 1][j].innerHTML) {
                    tabLabel[i - 1][j].innerHTML = (tabLabel[i][j].innerHTML * 2);
                    tabLabel[i][j].innerHTML = "";
                    linkScore.innerHTML = parseInt(tabLabel[i - 1][j].innerHTML, 10)+parseInt(linkScore.innerHTML, 10);
                    modif = "true";
                    compteur++;
                }
            }
        }
    }
    colorUpdate();
    if (compteur == 0) {
        modif = "false";
    }
    else {
        modif = "true";
    }
    return modif;
}

function down() {
    var modif = "true";
    var compteur = 0;
    while (modif == "true") {
        modif = "false";
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 4; j++) {
                if (tabLabel[i][j].innerHTML != "" && tabLabel[i + 1][j].innerHTML == "") {
                    tabLabel[i + 1][j].innerHTML = tabLabel[i][j].innerHTML;
                    tabLabel[i][j].innerHTML = "";
                    modif = "true";
                    compteur++;
                }
                if (tabLabel[i][j].innerHTML != "" && tabLabel[i][j].innerHTML == tabLabel[i + 1][j].innerHTML) {
                    tabLabel[i + 1][j].innerHTML = (tabLabel[i][j].innerHTML * 2);
                    tabLabel[i][j].innerHTML = "";
                    linkScore.innerHTML = parseInt(tabLabel[i + 1][j].innerHTML, 10)+parseInt(linkScore.innerHTML, 10);
                    modif = "true";
                    compteur++;
                }
            }
        }
    }
    colorUpdate();
    if (compteur == 0) {
        modif = "false";
    }
    else {
        modif = "true";
    }
    return modif;
}

function left() {
    var modif = "true";
    var compteur = 0;
    while (modif == "true") {
        modif = "false";
        for (var i = 0; i < 4; i++) {
            for (var j = 1; j < 4; j++) {
                if (tabLabel[i][j].innerHTML != "" && tabLabel[i][j - 1].innerHTML == "") {
                    tabLabel[i][j - 1].innerHTML = tabLabel[i][j].innerHTML;
                    tabLabel[i][j].innerHTML = "";
                    modif = "true";
                    compteur++;
                }
                if (tabLabel[i][j].innerHTML != "" && tabLabel[i][j].innerHTML == tabLabel[i][j - 1].innerHTML) {
                    tabLabel[i][j - 1].innerHTML = (tabLabel[i][j].innerHTML * 2);
                    tabLabel[i][j].innerHTML = "";
                    linkScore.innerHTML = parseInt(tabLabel[i][j-1].innerHTML, 10)+parseInt(linkScore.innerHTML, 10);
                    modif = "true";
                    compteur++;
                }
            }
        }
    }
    colorUpdate();
    if (compteur == 0) {
        modif = "false";
    }
    else {
        modif = "true";
    }
    return modif;
}

function right() {
    var modif = "true";
    var compteur = 0;
    while (modif == "true") {
        modif = "false";
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 3; j++) {
                if (tabLabel[i][j].innerHTML != "" && tabLabel[i][j + 1].innerHTML == "") {
                    tabLabel[i][j + 1].innerHTML = tabLabel[i][j].innerHTML;
                    tabLabel[i][j].innerHTML = "";
                    modif = "true";
                    compteur++;
                }
                if (tabLabel[i][j].innerHTML != "" && tabLabel[i][j].innerHTML == tabLabel[i][j + 1].innerHTML) {
                    tabLabel[i][j + 1].innerHTML = (tabLabel[i][j].innerHTML * 2);
                    tabLabel[i][j].innerHTML = "";
                    linkScore.innerHTML = parseInt(tabLabel[i][j+1].innerHTML, 10)+parseInt(linkScore.innerHTML, 10);
                    modif = "true";
                    compteur++;
                }
            }
        }
    }
    colorUpdate();
    if (compteur == 0) {
        modif = "false";
    }
    else {
        modif = "true";
    }
    return modif;
}








