let section4TextBlocks = document.getElementsByClassName("section-4-segment-text__container")

function Section4SlideTextOn(N) {
    section4TextBlocks[N].classList.add("section-4-slide-text-on")
}

function Section4SlideTextOff(N) {
    section4TextBlocks[N].classList.remove("section-4-slide-text-on")
}


let section6KnowMoreBlocks = document.getElementsByClassName("section-6-aiogram-know-more__container")

let block0 = section6KnowMoreBlocks[0]

let block1 = document.getElementById("section-6-aiogram-know-more__container--1")
let block2 = document.getElementById("section-6-aiogram-know-more__container--2") 

function Section6SlideKnowMoreOn(N) {
    if (N == 0) {
        block1.style.right = "0px"
    }
    else {
        block2.style.left = "0px"
    }
}

function Section6SlideKnowMoreOff(N) {
    if (N == 0) {
        block1.style.right = "325px"
    }
    else {
        block2.style.left = "325px"
    }
}



let section7MessageTypes = document.getElementsByClassName("section-7-message-one-type__text")

function Section7SlideTypeOn(N) {
    if (N < 2) {
        section7MessageTypes[N].style.marginLeft = "0px"
    }
    else {
        section7MessageTypes[N].style.marginRight = "0px"
    }
    section7MessageTypes[N].style.opacity = "1"
}

function Section7SlideTypeOff(N) {
    if (N < 2) {
        section7MessageTypes[N].style.marginLeft = "-192px"
    }
    else {
        section7MessageTypes[N].style.marginRight = "-192px"
    }
    section7MessageTypes[N].style.opacity = "0"
}


let section9TextBlocks = document.getElementsByClassName("section-9-code__text")
let section9VisionButtons = document.getElementsByClassName("section-9-code-vision__button")
let section9Block = document.getElementsByClassName("section-9__container")[0]

function Section9VisionTextClick(N) {
    if (!section9TextBlocks[N].classList.contains("section-9-click-but"))
    {
        section9TextBlocks[N].style.display = "flex"
        section9TextBlocks[N].style.flexDirection = "row"
        section9TextBlocks[N].style.justufyContent = "center"
        section9TextBlocks[N].style.alignItems = "center"
        section9TextBlocks[N].classList.add("section-9-click-but")
        section9VisionButtons[N].textContent = "Скрыть код"
        }
    else {
        section9TextBlocks[N].style.display = "none"
        section9TextBlocks[N].classList.remove("section-9-click-but")
        section9VisionButtons[N].textContent = "Показать код"
    }
}


let section9CopyButtons = document.getElementsByClassName("section-9-code-copy__button")

function Section9CopyCodeClick(N) {
    navigator.clipboard.writeText(section9TextBlocks[N].textContent)
        .then(
            (clipText) =>
            (
                section9CopyButtons[N].style.backgroundColor = "#42F557"
            )
        )
        .catch(
            (clipText) =>
            (
                section9CopyButtons[N].style.backgroundColor = "#D93223"
            )
        )
}