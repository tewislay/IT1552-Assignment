const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
} )

function startGame(){
    console.log('Started')
    startButton.classList.add('hide')
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
        startButton.innerText = 'Restart'
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
        question: 'Which team won the 2007 NBA Championship?',
        answers: [
            {text: 'Cleveland Cavaliers', correct: false},
            {text: 'Boston Celtics', correct: false},
            {text: 'San Antonio Spurs', correct: true},
            {text: 'Utah Jazz', correct: false}]


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
    }
]