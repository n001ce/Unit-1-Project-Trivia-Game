const harryP = document.getElementById("harryP")
const starW = document.getElementById("starW")
const lotr = document.getElementById("lotr")
const marvel = document.getElementById("marvel")
const changeBtn = document.getElementById("changeBtn")
const tickets = document.querySelector(".tickets")
let questionEl = document.querySelector(".question")
let scoreB = document.querySelector(".score")
let numCorrect = document.getElementById("numCorrect")
let numWrong = document.getElementById("numWrong")
let quesOp = document.querySelector(".quesOp")
let quesBox = document.querySelector(".quesBox")
let questionCounter, trivia
let remainingQ = document.querySelector("#remainingQ")
let response = document.querySelector(".response")
let bodyEl = document.querySelector("body")
let audio = document.createElement('audio')
let newAudio = document.createElement("audio")
let timerEl = document.getElementById("timer")

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
    newAudio.pause()
    audio.src = 'css/audience.mp3'
    audio.play()
    scoreB.style.display = "none"
    quesBox.style.display= "none"
    changeBtn.style.display = "none"
    tickets.style.display = "grid"
    document.querySelector(".description").style.display = "block"
    bodyEl.style.backgroundImage = "none"
}

let timeLeft = 60
function countDown(){
    setInterval(function(){
        if(timeLeft <= 0){
            clearInterval(timeLeft = 0)
            timerEl.innerText = `Times Up`
            endGame()
            return
        }
        timerEl.innerText = `Time left:` + `\n` + `${timeLeft}`
        timeLeft -=1
    }, 1000)
    }

function startGame(){
    timerEl.style.display = "block"
    countDown()
    changeBtn.style.display = "flex"
    document.querySelector(".description").style.display = "none"
    audio.pause()
    newAudio.src = trivia.previewSound
    newAudio.play()
    player = new Player
    questionCounter = 0
    scoreB.style.display = "flex"
    tickets.style.display="none"
    quesBox.style.display="block"
    numCorrect.innerText = player.numCorrects
    numWrong.innerText = player.numWrong
    render()
}

function clearState(){
    response.style.display = "none"
    audio.pause()
    quesBox.style.boxShadow="none"

}


function questionSelector(){
    if(questionCounter < trivia.questions.length){
    quesOp.style.display = "block"
    questionEl.innerText = trivia.questions[questionCounter].question
    document.querySelector("#a").innerText = trivia.questions[questionCounter].options.a
    document.querySelector("#b").innerText = trivia.questions[questionCounter].options.b
    document.querySelector("#c").innerText = trivia.questions[questionCounter].options.c
    document.querySelector("#d").innerText = trivia.questions[questionCounter].options.d
    }else{
        endGame()
    }
}

function winMessage(){
    if(player.score >= 90){
        return "Put The DVD Down Already"
    }else if(player.score > 60 && player.score <  90){
        return "It's been a while hasn't it?"
    }else{
        return "Have you even seen this movie?"
}
}

function checkAnswer(e){
    const selectedAnswer = e.target.id
    if(selectedAnswer === trivia.questions[questionCounter].answerId){
        response.style.display = "block"
        response.style.backgroundImage= trivia.correctImg
        quesBox.style.boxShadow="rgb(136, 230, 74) 10px 4px 20px 5px, rgb(136, 230, 74) -10px 4px 20px 5px, rgb(136, 230, 74) 10px -4px 20px 5px, rgb(136, 230, 74) -10px -4px 20px 5px"
        quesOp.style.display = "none"
        player.numCorrect += 1
        player.score += 10
    }else {
        quesOp.style.display = "none"
        quesBox.style.boxShadow = "red 10px 4px 20px 5px, red 10px 4px 20px 5px, red 10px -4px 20px 5px, red -10px -4px 20px 5px"
        response.style.display= "block"
        response.style.backgroundImage = trivia.wrongImg
        player.numWrong += 1
    } 
    questionCounter++
    setTimeout(render, 2000)

    
    
    
}

function endGame(){
    quesOp.style.display = "none"
    questionEl.innerText = `GAME OVER` + `\n` + `Total Score :` + `\n` + `${player.score}` + `\n` + `${winMessage()}`
}


    
function backgroundImage(trivia){
    if(trivia === harryPotter){
        bodyEl.style.backgroundImage = harryPotter.backgroundImg
        questionEl.style.backgroundColor = harryPotter.questionBox
    }else if(trivia === starWars){
        bodyEl.style.backgroundImage = starWars.backgroundImg
        questionEl.style.backgroundColor = starWars.questionBox
    }else if(trivia === lordOfTheRings){
        bodyEl.style.backgroundImage = lordOfTheRings.backgroundImg
        questionEl.style.backgroundColor = lordOfTheRings.questionBox
    }else{
        bodyEl.style.backgroundImage = marvelU.backgroundImg
        questionEl.style.backgroundColor = marvelU.questionBox
    }
}

function render(){
    backgroundImage(trivia)
    questionSelector(questionCounter)
    numCorrect.innerText = player.numCorrect
    numWrong.innerText = player.numWrong
    remainingQ.innerText = trivia.questions.length - questionCounter
    clearState()
}


function Player(){
    this.score = 0
    this.numWrong = 0
    this.numCorrect = 0
}



function Trivia(){
    this.questions = []
    this.questionImage
    this.wrongImg
    this.correctImg
    this.scoreB
}

const harryPotter= new Trivia()
harryPotter.questions.push(
    {question : "Where did Harry live in the Muggle world?", answerId : "d", options: {a: "13 Privet Drive", b: "6 Privet Drive", c: "14 Privet Drive", d:"4 Privet Drive"}},
    {question : "Who was the first goblin Harry ever met?", answerId : "c", options: {a: "Grinnus", b: "Garluff", c: "Griphook", d:"Gurgit"}},
    {question : "What spell did Hermione use to free Harry and Ron from the Devil’s Snare?", answerId : "b", options: {a: "Aberto", b: "Lumos Solem", c: "Levicorpus", d:"Obliviate"}},
    {question : "What spell created by the Half Blood Prince did Harry use on Draco Malfoy?", answerId : "a", options: {a: "Sectumsempra", b: "Avada Kedavra", c: "Accio", d:"Expelliarmus"}},
    {question : "Who did Hermione impersonate with Polyjuice Potion at the Ministry in Deathly Hallows?", answerId : "a", options: {a: "Belatrix Lastrange", b: "Alecto Carrow", c: "Narcissa Malfoy", d:"Dolores Umbridge"}},
    {question : "Which of the following is not an ingredient in Polyjuice Potion?", answerId : "b", options: {a: "Lacewing flies", b: "Wormwood", c: "Knotgrass", d:"Fluxweed"}},
    {question : "Gilderoy Lockhart tried to use ‘Brackium Emendo’ to fix Harry’s broken bones. What did it actually do to him?", answerId : "b", options: {a: "Turned his leg wooden", b: "Removed his bones entirely", c: "Forced him to speak Parseltongue", d:"Gave him an exquisite singing voice"}},
    {question : "Cedric Diggory faced what breed of dragon in the Triwizard Tournament?", answerId : "a", options: {a: "Swedish Short-Snout", b: "Peruvian Vipertooth", c: "Common Welsh Green", d:"Norwegian Ridgeback"}},
    {question : "Who poses as Mad-Eye Moody, Harry’s 4th year Defense Against the Dark Arts professor?", answerId : "c", options: {a: "Voldemort", b: "Peter Pettigrew", c: "Barty Crouch Jr.", d:"Sirius Black"}},
    {question : "Who saved a centaur from being strangled by Professor Umbridge in the Forbidden Forest?", answerId : "a", options: {a: "Grawp", b: "Buckbeak", c: "Hagrid", d:"Luna"}},
    )

harryPotter.previewSound = 'css/harryP_theme.mp3'
harryPotter.wrongImg = "url('css/rememberall1.png')"
harryPotter.correctImg = "url('css/remberall_right.png')"
harryPotter.questionBox = "rgba(245, 181, 45, 0.726)"
harryPotter.backgroundImg = "url('css/harrypotter_back.jpg')"

const starWars = new Trivia()
starWars.questions.push(
    {question : "According to Yoda, there are always how many Sith Lords…no more, no less?", answerId : "a", options: {a: "2", b: "1", c: "3", d:"4"}},
    {question : "What is the path to the dark side according to Yoda?", answerId : "c", options: {a: "Strength", b: "Love", c: "Fear", d:"Emotions"}},
    {question : "C-3PO is fluent in over how many forms of communication?", answerId : "b", options: {a: "Over 1 million", b: "Over 6 million", c: "Over 5 million", d:"Over 9 million"}},
    {question : "What is the name of Anakin's stepbrother?", answerId : "d", options: {a: "Kyle Lars", b: "Mik Lars", c: "Skid Lars", d:"Owen Lars"}},
    {question : "What is the name of the female member of the Jedi High Council who is of the same species of as Yoda?", answerId : "a", options: {a: "Yaddle", b: "Yodel", c: "Yeet", d:"Yankle"}},
    {question : "Lightsabers are powered by what type of crystal?", answerId : "b", options: {a: "Nova Crystal", b: "Kyber Crystal", c: "Quarzite Crystal", d:"Galzez Crystal"}},
    {question : "Who said, I know what I have to do, but I don't know that I have the strength to do it?", answerId : "a", options: {a: "Kylo Ren", b: "Ben Kenobi", c: "Luke Skywalker", d:"Rey Skywalker"}},
    {question : "Palpatine gave the command to execute what Order in Revenge of the Sith?", answerId : "c", options: {a: "Order 56", b: "Order 46", c: "Order 66", d:"Order 76"}},
    {question : "Legend describes what as the hidden world of the sith?", answerId : "d", options: {a: "Degoba", b: "Tattoine", c: "Kashyyk", d:"Exegol"}},
    {question : "What odds does C-3P0 give Han for successfully navigating the asteroid field?", answerId : "a", options: {a: "3720 to 1", b: "5430 to 1", c: "2670 to 1", d:"3500 to 1"}},
)

starWars.previewSound = 'css/starw_theme.mp3'
starWars.wrongImg = "url('css/wrong-saber.png')"
starWars.correctImg = "url('css/right-saber.png')"
starWars.questionBox = "rgba(57, 149, 255, 0.767)"
starWars.backgroundImg = "url('css/starback.jpg')"

const lordOfTheRings = new Trivia()
lordOfTheRings.questions.push(
    {question : "How many rings of power were made?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}},
    {question : "Who took the ring after The Dark Lord had been defeated?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}},
    {question : "In which Inn does Gandalf ask Frodo and Sam to meet him?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}},
    {question : "Where is the fellowship of the ring formed?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}},
    {question : "How many arrows are shot at Boromir?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}},
    {question : "Who is controlling King Theoden’s mind through Grima Wormtongue?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}},
    {question : "Who do Aragorn and company encounter when they enter the Fangorn Forest?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}},
    {question : "In which direction does Gandalf ask Aragorn to look on the first light on the fifth day?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}},
    {question : "Aragorn is the descendent of which race (now believed to have passed into legend)?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}},
    {question : "Which six characters from the original fellowship reunite in Isengard?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}},
    )

lordOfTheRings.previewSound = 'css/lotr_theme.mp3'
lordOfTheRings.wrongImg = "url('css/bilbo_wrong.png')"
lordOfTheRings.correctImg = "url('css/bilbo_right.png')"
lordOfTheRings.questionBox = "rgba(136, 194, 98, 0.808)"
lordOfTheRings.backgroundImg = "url('css/lotr_back.jpg')"

const marvelU = new Trivia()
marvelU.questions.push(
    {question : "What does shield stand for?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}},
    {question : "How many possibilities did Doctor Strange see for the outcome of the Infinity War?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}},
    {question : "Which Infinity Stone does Thanos get first?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}},
    {question : "Who does not disappear from “The Snap?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}},
    {question : "What AI replaces JARVIS?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}},
    {question : "What is the first song we see Peter Quill dancing to in Guardians of the Galaxy?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}},
    {question : "What was the first Iron Man suit called?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}},
    {question : "The tesseract houses the _____ stone.", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}},
    {question : "Who does Steve Rogers give his shield to at the end of Avengers: Endgame?", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}},
    {question : "Complete the quote from Tony Stark’s daughter: I love you ____", answerId : "a", options: {a: "this is a", b: "this is b", c: "this is c", d:"this is d"}},
)

marvelU.previewSound = 'css/marvel_theme.mp3'
marvelU.wrongImg = "url('css/marvel_wrong.png')"
marvelU.correctImg = "url('css/marvel_right.png')"
marvelU.questionBox= "rgba(255, 0, 0, 0.466)"
marvelU.backgroundImg = "url('css/marvel_back.jpg')"
