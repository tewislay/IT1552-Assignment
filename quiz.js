
// navigation bar//
let btnHam = document.querySelector('.ham-btn');
let btnTimes = document.querySelector('.times-btn');
let navibar = document.getElementById('nav-bar');

btnHam.addEventListener
('click', function(){
    if(btnHam.className !== ""){
        btnHam.style.display = "none";
        btnTimes.style.display = "block";
        navibar.classList.add
        ("show-nav");
    }
})

btnTimes.addEventListener
('click', function(){
    if(btnHam.className !== ""){
        this.style.display = "none";
        btnHam.style.display = "block";
        navibar.classList.remove
        ("show-nav");
    }
})


// quiz //


const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const title = document.getElementById('title')
const questionContainerElement = document.getElementById('question-container')

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex
let score = 0


startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
} )

function startGame(){
    console.log('Started')
    startButton.classList.add('hide')
    title.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct) {
            button.dataset.correct = answer.correct
            score += 1
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)

    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button =>{
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
    }
    else{
        startButton.innerText = 'Your score is ' + score + '/10.' + '\n' + 'Click to try again.'
        startButton.classList.remove('hide')
    }
    
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    }
    else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'How many NBA championships did the Lakers win during the 1960s?',
        answers: [
            {text: '2', correct: false},
            {text: '6', correct: false},
            {text: '4', correct: false},
            {text: '0', correct: true}]
    },
    {
        question: 'Who won the 2005 NBA Finals MVP Award?',
        answers: [
            {text: 'Tim Duncan', correct: true},
            {text: 'Steve Nash', correct: false},
            {text: 'Chauncey Billups', correct: false},
            {text: 'Tony Parker', correct: false}]
    },
    {
        question: 'How many championships does the Lakers Franchise have?',
        answers: [
            {text: '18', correct: false},
            {text: '19', correct: false},
            {text: '15', correct: false},
            {text: '17', correct: true}]
    },
    {
        question: 'Which team drafted Kobe Bryant?',
        answers: [
            {text: 'Charlotte Hornets', correct: true},
            {text: 'Los Angelos Lakers', correct: false},
            {text: 'Chicago Bulls', correct: false},
            {text: 'Boston Celtics', correct: false}]
    },
    {
        question: 'Who was the first player in NBA history to be elected league MVP by a unanimous vote?',
        answers: [
            {text: 'Lebron James', correct: false},
            {text: 'Micheal Jordan', correct: false},
            {text: 'Magic Johnson', correct: false},
            {text: 'Stephen Curry', correct: true}]
    },
    {
        question: 'Who scored the first three-point basket on NBA history?',
        answers: [
        {text: 'Gene Stump', correct: false},
        {text: 'Larry Bird', correct: false},
        {text: 'Wes Unseld', correct: false},
        {text: 'Chris Ford', correct: true}]
    },
    {
        question: "Who is the all-time leading scorer in men's college basketball?",
        answers: [
            {text: 'Larry Bird', correct: false},
            {text: 'Pete Maravich', correct: true},
            {text: 'Freeman Williams', correct: false},
            {text: 'Stephen Curry', correct: false}]
    },
    {
        question: 'Who was the first WNBA player to dunk in a playoff game?',
        answers: [
            {text: 'Tamika Cathcings', correct: false},
            {text: 'Lisa Leslie', correct: false},
            {text: 'Britney Griner', correct: true},
            {text: 'Michelle Snow', correct: false}]
    },
    {
        question: 'What NBA player was nicknamed "Plastic Man"?',
        answers: [
            {text: 'Biily Cunningham', correct: false},
            {text: 'Stacey Augmon', correct: true},
            {text: 'Majic Johnson', correct: false},
            {text: 'Dikebe Mutombo', correct: false}]
    },
    {
        question: 'Which player made the most three-pointers in his NBA debut?',
        answers: [
            {text: 'James Harden', correct: false},
            {text: 'Damian Lillard', correct: false},
            {text: 'Kemba Walker', correct: false},
            {text: 'P.J. Washington', correct: true}]
    }
    
]