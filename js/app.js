

const helpBtn = document.querySelector("#help")
let nextBtn = document.querySelector("#nextBtn")
const answerBtns = document.querySelector(".answerQ")
let scoreB = document.querySelector(".score")

let quesBox = document.querySelector(".quesBox")
let tickets = document.querySelector(".tickets")
let harryP = document.getElementById("harryP")
let starW = document.getElementById("starW")
let lotr = document.getElementById("lotr")
let marvel = document.getElementById("marvel")
let questionCounter
let trivia

let numWrong = document.querySelector("#numWrong")
let numCorrect = document.querySelector("#numCorrect")
let assistsUsed = document.querySelector("#helpUsed")
let remainingQ = document.querySelector("#remainingQ")




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
    

// init()

// function init(){
//     answerBtns.style.display = "none"
//     scoreB.style.display = "none"
//     quesBox.style.display= "none"
// }


function startGame(){
    console.log(trivia)
    questionCounter = 0
    answerBtns.style.display = "flex"
    scoreB.style.display = "flex"
    tickets.style.display="none"
    quesBox.style.display="block"
    render()
}

function questionSelector(questionCounter){
    if(questionCounter < trivia.questions.length){
    document.querySelector(".question").innerText = trivia.questions[questionCounter].question
    document.querySelector("#option1").innerText = trivia.questions[questionCounter].options.a
    document.querySelector("#option2").innerText = trivia.questions[questionCounter].options.b
    document.querySelector("#option3").innerText = trivia.questions[questionCounter].options.c
    document.querySelector("#option4").innerText = trivia.questions[questionCounter].options.d
    questionCounter++
    return
    }else{
        document.querySelector(".question").innerText = "Game Over"
    }
}

function checkAnswer(event){
    if(event.target.id === trivia.questions[questionCounter].answerId){
        event.style.backgrounColor = "green"
    }else{
        event.style.backgroundColor="red"
    }
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
    {question : "According to Yoda, there are always how many Sith Lords…no more, no less?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}, ytLink :"https://www.youtube.com/watch?v=yQIFkMlDF4M"},
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
