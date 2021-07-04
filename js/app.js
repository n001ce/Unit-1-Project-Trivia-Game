

const helpBtn = document.querySelector("#help")
const nextBtn = document.querySelector("#next")
const answerBtns = document.querySelector(".answerQ")
const scoreB = document.querySelector(".score")
const playBtn = document.getElementById("play")

let quesBox = document.querySelector(".quesBox")
let tickets = document.querySelector(".tickets")
let harryP = document.getElementById("harryP")
let starW = document.getElementById("starW")
let lotr = document.getElementById("lotr")
let marvel = document.getElementById("marvel")

let trivia
let numWrong = document.querySelector("#numWrong")
let numCorrect = document.querySelector("#numCorrect")
let assistsUsed = document.querySelector("#helpUsed")
let remainingQ = document.querySelector("#remainingQ")

init()

function init(){
    answerBtns.style.display = "none"
    scoreB.style.display = "none"
    quesBox.style.display= "none"
}

harryP.addEventListener("click", function(e){
	trivia = harryP
    startGame(trivia)
	})

starW.addEventListener("click", function(e){
	trivia = starW
    startGame(trivia)
	})

lotr.addEventListener("click", function(e){
    trivia = lotr
    startGame(trivia)
    })

marvel.addEventListener("click", function(e){
    trivia = marvel
    startGame(trivia)
    })


function startGame(trivia){
    console.log(trivia)
    answerBtns.style.display = "flex"
    scoreB.style.display = "flex"
    tickets.style.display="none"
    quesBox.style.display="block"
}
function questionSelector(){}
function score(){}
function Game(){}
function render(){}


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

harryPotter = new Trivia()
harryPotter.questions.push(
    {question : "Where did Harry live in the Muggle world?", answerId : "a", xanswer: "", ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", xanswer: "", ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", xanswer:"", ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", xanswer:"", ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", xanswer:"", ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", xanswer:"", ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", xanswer:"", ytLink: "https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", xanswer: "", ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", xanswer:"", ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", xanswer:"", ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    )
starWars = new Trivia()
starWars.questions.push(
    {question : "Where did Harry live in the Muggle world?", answerId : "a", xanswer: "", ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", xanswer: "", ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", xanswer:"", ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", xanswer:"", ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", xanswer:"", ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", xanswer:"", ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", xanswer:"", ytLink: "https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", xanswer: "", ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", xanswer:"", ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", xanswer:"", ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
)

lotr = new Trivia()
lotr.questions.push(
    {question : "Where did Harry live in the Muggle world?", answerId : "a", xanswer: "", ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", xanswer: "", ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", xanswer:"", ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", xanswer:"", ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", xanswer:"", ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", xanswer:"", ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", xanswer:"", ytLink: "https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", xanswer: "", ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", xanswer:"", ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", xanswer:"", ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
)

marvel = new Trivia()
marvel.questions.push(
    {question : "Where did Harry live in the Muggle world?", answerId : "a", xanswer: "", ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", xanswer: "", ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", xanswer:"", ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", xanswer:"", ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", xanswer:"", ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", xanswer:"", ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", xanswer:"", ytLink: "https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", xanswer: "", ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", xanswer:"", ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
    {question : "Where did Harry live in the Muggle world?", answerId : "a", xanswer:"", ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
)


console.log(harryPotter)
    