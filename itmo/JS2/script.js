function cc(x, y) {
    let newtable = document.createElement("table")

    for (let i = 0; i < x; i++) {
        let newstroka = document.createElement("tr")
        for (let j = 0; j < y; j++) {
            let newstolbec = document.createElement("td")
            newstroka.appendChild(newstolbec)

            let forma = document.createElement("form") // 3 задание; создаю форму для поля ввода и кнопки
            newstolbec.appendChild(forma)

            let text = document.createElement("textarea") // создаю поле ввода
            text.rows = 5
            text.cols = 8
            forma.appendChild(text)

            let soxran = document.createElement("input")  // создаю кнопку подтверждения
            soxran.type = "submit"
            soxran.value = "Сохранить"
            forma.appendChild(soxran)

            forma.onsubmit = function (event) { // что происходит при отправке формы
                event.target.parentNode.innerText = event.target.elements[0].value
                return false
            }

        }
        newtable.appendChild(newstroka)
    }

    document.body.appendChild(newtable)
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

let newform = document.createElement("form") // создаю форму
newform.classList.add("newform")
document.body.appendChild(newform)

let newparagraph = document.createElement("p") // создаю параграф внутри формы
newform.appendChild(newparagraph)
newparagraph.innerText = "Введите количество строк и столбцов"

let newinput1 = document.createElement("input") // создаю поля ввода
newform.appendChild(newinput1)
newinput1.type = "number"

let newinput2 = document.createElement("input")
newform.appendChild(newinput2)
newinput2.type = "number"

let newbutton = document.createElement("input") // создаю кнопку ввода
newform.appendChild(newbutton)
newbutton.type = "submit"
newbutton.value = "Сохранить"
newform.onsubmit = function (event) {
    cc(event.target.elements[0].value, event.target.elements[1].value)
    newform.classList.add("no_show")
    newform.reset()
    functions.classList.remove("no_show")
    return false
}

let functions = document.createElement("div")
functions.classList.add("functions")
functions.classList.add("no_show")  //скрытый изначально
document.body.appendChild(functions)

let h2 = document.createElement("h2") // создаю заголовок
document.body.appendChild(h2)

let div1 = document.createElement("div") // создаю первую кнопку
functions.appendChild(div1)

let paragraph1 = document.createElement("p")
paragraph1.innerHTML = "Изменить границы таблицы"
div1.appendChild(paragraph1)

let shir = document.createElement("input") // создаю поле ввода для ширины
shir.type = "text"
shir.oninput = function () {
    shir.parentNode.querySelector("button").innerHTML = "Применить " + shir.value + " px и рамка " + shir.parentNode.querySelector("select").value
}
shir.maxLength = 3
div1.appendChild(shir)

let ramki = document.createElement("select") // создаю поле ввода для рамок
ramki.onchange = function () {
    ramki.parentNode.querySelector("button").innerHTML = "Применить " + ramki.parentNode.querySelector("input").value + " px и рамка " + ramki.value
}
div1.appendChild(ramki)

let ramki_1 = document.createElement("option")
ramki_1.innerHTML = "dotted"
ramki.appendChild(ramki_1)

let ramki_2 = document.createElement("option")
ramki_2.innerHTML = "dashed"
ramki.appendChild(ramki_2)

let ramki_3 = document.createElement("option")
ramki_3.innerHTML = "solid"
ramki.appendChild(ramki_3)

let ramki_4 = document.createElement("option")
ramki_4.innerHTML = "double"
ramki.appendChild(ramki_4)

let newbutt = document.createElement("button") // создаю кнопку
newbutt.innerHTML = "Применить"
newbutt.onclick = function () {
    document.querySelector("table").style.width = newbutt.parentNode.querySelector("input").value + "px"
    document.querySelector("table").style.borderStyle = newbutt.parentNode.querySelector("select").value
}
div1.appendChild(newbutt)

let div2 = document.createElement("div") // создаю вторую кнопку
functions.appendChild(div2)

let paragraph2 = document.createElement("p")
paragraph2.innerHTML = "Добавление заголовка"
div2.appendChild(paragraph2)

let pole_vvoda = document.createElement("input")
pole_vvoda.type = "text"
div2.appendChild(pole_vvoda)

let knopka = document.createElement("button")
knopka.innerHTML = "Добавить"
knopka.onclick = function () {
    document.querySelector("h2").innerText = knopka.parentNode.querySelector("input").value
}
div2.appendChild(knopka)

let div3 = document.createElement("div") // создаю третью кнопку
functions.appendChild(div3)

let paragraph3 = document.createElement("p")
paragraph3.innerHTML = "Выберите номер строки для удаления"
div3.appendChild(paragraph3)

let pole_vvoda2 = document.createElement("input")
pole_vvoda2.type = "number"
div3.appendChild(pole_vvoda2)

let knopka2 = document.createElement("button")
knopka2.innerHTML = "Удалить"
knopka2.onclick = function () {
    if ((knopka2.parentNode.querySelector("input").value <= document.getElementsByTagName("tr").length) && (knopka2.parentNode.querySelector("input").value > 0)) {
        document.getElementsByTagName("tr")[knopka2.parentNode.querySelector("input").value - 1].remove()
    } else {
        alert("Некорректные данные!")
    }
}
div3.appendChild(knopka2)

let div4 = document.createElement("div") // создаю четвертую кнопку
functions.appendChild(div4)

let paragraph4 = document.createElement("p")
paragraph4.innerHTML = "Случайное изменение"
div4.appendChild(paragraph4)

let knopka3 = document.createElement("button")
knopka3.innerHTML = "Magic"
knopka3.onclick = function () {
    let magic = document.getElementsByTagName("tr")[getRandomInt(document.getElementsByTagName("tr").length )].getElementsByTagName("td")[getRandomInt(document.getElementsByTagName("tr")[0].getElementsByTagName("td").length)]
    magic.style.backgroundColor = "rgb(" + getRandomInt(255) + "," + getRandomInt(255) + "," + getRandomInt(255) + ")"
    magic.style.color = "rgb(" + getRandomInt(255) + "," + getRandomInt(255) + "," + getRandomInt(255) + ")"
    magic.style.fontSize = randomInteger(15, 25) + "pt"
    if (getRandomInt(100) > 50) {
        magic.innerText = ""
        let forma = document.createElement("form")
        magic.appendChild(forma)

        let text = document.createElement("textarea")
        text.rows = 5
        text.cols = 8
        forma.appendChild(text)

        let soxran = document.createElement("input") 
        soxran.type = "submit"
        soxran.value = "Сохранить"
        forma.appendChild(soxran)

        forma.onsubmit = function (event) { 
            event.target.parentNode.innerText = event.target.elements[0].value
            return false
        }

    }
}
div4.appendChild(knopka3)

let div5 = document.createElement("div") // создаю пятую кнопку
functions.appendChild(div5)

let paragraph5 = document.createElement("p")
paragraph5.innerHTML = "Удаление таблицы"
div5.appendChild(paragraph5)

let knopka4 = document.createElement("button")
knopka4.innerHTML = "Удалить таблицу"
functions.appendChild(knopka4)
knopka4.onclick = function(){

    newform.classList.remove("no_show")
    document.querySelector("table").remove()
    let inputs = functions.getElementsByTagName("input")
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = ""
    };
    newbutt.innerText = "Применить"
    h2.innerText = ""
    functions.classList.add("no_show")
}
div5.appendChild(knopka4)
