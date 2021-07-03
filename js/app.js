

const helpBtn = document.querySelector(".help")
const nextBtn = document.querySelector(".next")
const restartBtn = document.querySelector(".restart")
const answerBtns = document.querySelectorAll(".answerQ")
const options = document.querySelectorAll(".options")
const scoreB = document.querySelectorAll(".scoreB")

const buttons = [helpBtn, nextBtn, restartBtn, answerBtns, options, scoreB]

let numWrong = document.querySelector(".numWrong")
let numCorrect = document.querySelector(".numCorrect")
let assistsUsed = document.querySelector(".helpUsed")
let remainingQ = document.querySelector("remainingQ")


function init(){
    
}
function startGame(){

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
    