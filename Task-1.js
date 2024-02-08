function Question(question,correctAnswer){
    this.question= question;
    this.correctAnswer = correctAnswer;

    this.checkAnswer=function (userInput){
    userInput=userInput.toLowerCase();
        const correctAnswer = this.correctAnswer.toLowerCase();
        return userInput === correctAnswer;
    };
}

function Quiz(name){
    this.name=name;
    this.score=0;

    this.takeQuiz=function(question,userAnswer){
        const isCorrect = question.checkAnswer(userAnswer);
        if (isCorrect){
            this.score++;
        }
        updateScore();
        alert(isCorrect ? "Correct Answer!" : "Incorrect Answer . Try again!");
    };
}

const quizInstance = new Quiz("Karthik");

const question1=new Question("what is  the capital of india?","Delhi");
const question2=new Question("who is  the CEO  of Tesla?","Elon Musk");
const question3= new Question("What is the highest Mountain in the world?","Mount Everest");

document.getElementById("question1").innerHTML = question1.question;
document.getElementById("question2").innerHTML = question2.question;
document.getElementById("question3").innerHTML = question3.question;

    
   
function checkAnswer(questionNumber){
        const userInput = document.getElementById("answerInput" + questionNumber).value;
        const currentQuestion = getQuestionByNumber(questionNumber);
        quizInstance.takeQuiz(currentQuestion,userInput);
}

function updateScore(){
    document.getElementById("score").innerText = "Current Score: " + quizInstance.score;

}

function getQuestionByNumber(questionNumber){
    switch(questionNumber){
        case 1: return question1;
        case 2: return question2;
        case 3: return question3;
        default: return null;
    }
}