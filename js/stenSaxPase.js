
let randomNumber = Math.ceil(Math.random() * 3);

const player = document.querySelector("#spelare");
const computer = document.querySelector("#dator");
const result = document.querySelector("#resultat");
const submit = document.querySelector("#playerName");

const sten = document.querySelector("#sten");
const sax = document.querySelector("#sax");
const påse = document.querySelector("#påse");

let spelare;
let datorsumma = 0;
let spelaresumma = 0;
let namn;

submit.addEventListener("click", nameInput);
function nameInput(event) {
    event.preventDefault();
    const h2Element = document.createElement("h2");
    document.body.appendChild(h2Element);
    const textinput = document.querySelector("#name-input");
    player.innerText = textinput.value;
    namn = textinput.value;
    textinput.value = " ";
}

container.addEventListener("click", game);
function game(event) {
    if (event.target.tagName == "BUTTON") {
        randomNumber = Math.ceil(Math.random() * 3);

        if (event.target.id == "sten") {
            spelare = event.target.innerText;
            const h2Element2 = document.createElement("h2");
            document.body.appendChild(h2Element2);
            player.innerText = (`${namn}` + ":" + spelare);

            if (randomNumber == 1) {
                computer.innerText = "Datorn: sten";
                result.innerText = "Resultat: lika!";

            } else if (randomNumber == 2) {
                computer.innerText = "Dator: påse";
                result.innerText = "Resultat: datorn vann denna rundan!";
                datorsumma++;

            } else if (randomNumber == 3) {
                computer.innerText = "Datorn: sax";
                result.innerText = "Resultat: du vann denna rundan!";
                spelaresumma++;
            }
        } else if (event.target.id == "påse") {
            spelare = event.target.innerText;
            const h2Element3 = document.createElement("h2");
            document.body.appendChild(h2Element3);
            player.innerText = (`${namn}` + ":" + spelare);

            if (randomNumber == 0) {
                computer.innerText = "Datorn: sten";
                result.innerText = "Resultat: du vann denna rundan!";
                spelaresumma++;

            } else if (randomNumber == 1) {
                computer.innerText = "Datorn: påse";
                result.innerText = "Resultat: lika!";

            } else if (randomNumber == 2) {
                computer.innerText = "Datorn: sax";
                result.innerText = "Resultat: datorn vann denna rundan";
                datorsumma++;
            }
        } else if (event.target.id == "sax") {
            spelare = event.target.innerText;
            const h2Element4 = document.createElement("h2");
            document.body.appendChild(h2Element4);
            player.innerText = (`${namn}` + ":" + spelare);

            if (randomNumber == 0) {
                computer.innerText = "Datorn: sten";
                result.innerText = "Resultat: datorn vann denna rundan!";
                datorsumma++;

            } else if (randomNumber == 1) {
                computer.innerText = "Datorn: påse";
                result.innerText = "Resultat: du vann denna rundan!";
                spelaresumma++;

            } else if (randomNumber == 2) {
                computer.innerText = "Datorn: sax";
                result.innerText = "Resultat: lika!";
            }
        }
        document.querySelectorAll("h3")[0].innerText = `Datorn :  ${datorsumma}`;
        document.querySelectorAll("h3")[1].innerText = `${namn} :  ${spelaresumma}`;

        setTimeout(function () {
            if (datorsumma == 3) {
                datorsumma = 0;
                alert('Datorn vann spelet!')

                location.reload(true);
            } else if (spelaresumma == 3) {
                spelaresumma = 0;
                alert(`Grattis ${namn}, du vann spelet!`)
                location.reload(true);
            }

        }, 20)

    }
}