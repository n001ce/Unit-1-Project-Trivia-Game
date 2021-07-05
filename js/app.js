

const helpBtn = document.querySelector("#help")
let nextBtn = document.querySelector("#nextBtn")
const answerBtns = document.querySelector(".answerQ")
let scoreB = document.querySelector(".score")
let numCorrect = document.getElementById("numCorrect")
let numWrong = document.getElementById("numWrong")

let quesBox = document.querySelector(".quesBox")
let tickets = document.querySelector(".tickets")
let harryP = document.getElementById("harryP")
let starW = document.getElementById("starW")
let lotr = document.getElementById("lotr")
let marvel = document.getElementById("marvel")
let changeBtn = document.getElementById("changeBtn")
let questionCounter
let trivia
let assistsUsed = document.querySelector("#helpUsed")
let remainingQ = document.querySelector("#remainingQ")


document.getElementById("a").addEventListener("click", checkAnswer)
document.getElementById("b").addEventListener("click", checkAnswer)
document.getElementById("c").addEventListener("click", checkAnswer)
document.getElementById("d").addEventListener("click", checkAnswer)

harryP.addEventListener("click", function(e){
	trivia = harryPotter
    startGame()
    return trivia
	})

starW.addEventListener("click", function(e){
	trivia = starWars
    startGame()
    return trivia
	})

lotr.addEventListener("click", function(e){
    trivia = lordOfTheRings
    startGame()
    return trivia
    })

marvel.addEventListener("click", function(e){
    trivia = marvelU
    startGame()
    return trivia
    })
    

init()

function init(){
    answerBtns.style.display = "none"
    scoreB.style.display = "none"
    quesBox.style.display= "none"
}

let rightUser = 0, wrongUser = 0

function startGame(){
    player = new Player
    console.log(trivia)
    questionCounter = 0
    changeBtn.style.display = "none"
    answerBtns.style.display = "flex"
    scoreB.style.display = "flex"
    tickets.style.display="none"
    quesBox.style.display="block"
    numCorrect.innerText = rightUser
    numWrong.innerText = wrongUser
    render()
}

function questionSelector(){
    if(questionCounter < trivia.questions.length){
    document.querySelector(".question").innerText = trivia.questions[questionCounter].question
    document.querySelector("#a").innerText = trivia.questions[questionCounter].options.a
    document.querySelector("#b").innerText = trivia.questions[questionCounter].options.b
    document.querySelector("#c").innerText = trivia.questions[questionCounter].options.c
    document.querySelector("#d").innerText = trivia.questions[questionCounter].options.d
    }else{
        document.querySelector(".question").innerText = `GAME OVER` + `\n` + `${player.score}`
        document.querySelector(".quesOp").style.display = "none"
        changeBtn.style.display = "flex"
    }
}

function assist(){
    let iframe = document.createElement('iframe')
    iframe.src = trivia.questions[questionCounter].ytLink.innerText
    document.body.appendChild(iframe)
}

function checkAnswer(e){
    const selectedAnswer = e.target.id
    if(selectedAnswer === trivia.questions[questionCounter].answerId){
        e.target.style.backgroundColor = "green"
        rightUser += 1
        player.score += 10
        questionCounter ++
    }else{
        e.target.style.backgroundColor = "red"
        wrongUser += 1
        questionCounter++
    }
    render()
}
    
function backgroundImage(trivia){
    if(trivia === harryPotter){
        document.querySelector(".quesBox").style.backgroundImage = `url('css/harryP_question.png')`
    }else if(trivia === starWars){
        document.querySelector(".quesBox").style.backgroundImage = "url('css/starW_question.png')"
    }else if(trivia === lordOfTheRings){
        document.querySelector(".quesBox").style.backgroundImage = "url('css/lotr_question.png')"
    }else{
        document.querySelector(".quesBox").style.backgroundImage = "url('css/marvel_question.png')"
    }
}

function render(){
    backgroundImage(trivia)
    questionSelector(questionCounter)
    numCorrect.innerText = rightUser
    numWrong.innerText = wrongUser
}


function Player(name){
    this.name = name
    this.score = 0
    this.numWrong = 0
    this.numCorrect = 0
    this.assists = 0
    this.help= function(){
        
    }
}




function Trivia(){
    this.questions = []
}

const harryPotter= new Trivia()
harryPotter.questions.push(
    {question : "Where did Harry live in the Muggle world?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"} ,ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Who was the first goblin Harry ever met?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}, ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "What spell did Hermione use to free Harry and Ron from the Devil’s Snare?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}, ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "What spell created by the Half Blood Prince did Harry use on Draco Malfoy?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}, ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Who did Hermione impersonate with Polyjuice Potion at the Ministry in Deathly Hallows?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}, ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Which of the following is not an ingredient in Polyjuice Potion?: A) Wormwood B) Lacewing flies C) Knotgrass D) Fluxweed", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}, ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}, ytLink: "https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}, ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}, ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}, ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    )
const starWars = new Trivia()
starWars.questions.push(
    {question : "According to Yoda, there are always how many Sith Lords…no more, no less?", answerId : "a", options: {a: "2", b: "1", c: "3", d:"4"}, ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "What is the path to the dark side according to Yoda?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}, ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "C-3PO is fluent in over how many forms of communication?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}, ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "What is the name of Anakin's stepbrother?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}, ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "What is the name of the female member of the Jedi High Council who is of the same species of as Yoda?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}, ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Lightsabers are powered by what type of crystal?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}, ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Who said, I know what I have to do, but I don't know that I have the strength to do it?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}, ytLink: "https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Palpatine gave the command to execute what Order in Revenge of the Sith?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}, ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}, ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}, ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
)

const lordOfTheRings = new Trivia()
lordOfTheRings.questions.push(
    {question : "Where did Harry live in the Muggle world?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}, ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}, ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}, ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}, ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}, ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}, ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}, ytLink: "https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}, ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}, ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}, ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    )

const marvelU = new Trivia()
marvelU.questions.push(
    {question : "Where did Harry live in the Muggle world?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}, ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}, ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}, ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}, ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}, ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}, ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}, ytLink: "https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}, ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}, ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}, ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
)
