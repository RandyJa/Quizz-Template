function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function shoquestion(questions, quizContainer){
	}

	function showResults(questions, quizContainer, resultsContainer){
	}

	shoquestion(questions, quizContainer);

	submitButton.onclick = function(){

	showResults(questions, quizContainer, resultsContainer);

	}
}


var questioning = [
    {

    question: "What does CSS stand for?",

    answers: {

    a: "Computer Style Sheets",

    b: "Creative Style Sheets",

    c: "Colorful Style Sheets",

    d: "Cascading Style Sheets"
    },

    correctAnswer: "d"
    
    },


    {
    
    question: "If you pass a negative value to the rotate() method, what is the result?",
    
    answers: {
    
    a: "It rotates the element counter-clockwise",
    
    b: "It flips the element into the mirrored position",
    
    c: "It rotates the element clockwise",
    
    d: "It won't work"
    },
    
    correctAnswer: "a"
        
    },


    {
    
    question: "Which HTML tag is used to define an internal style sheet?",
        
    answers: {
        
    a: "<script>",
        
    b: "<style>",
        
    c: "<stylesheet>",
    
    d: "<css>"
    },
        
    correctAnswer: "b"
            
    },


    {
    
    question: "Which is the correct syntax to round the corners of an element?",
            
    answers: {
            
    a: "border-radius: 15°",
            
    b: "border-radius: 15px;",
            
    c: "border: radius15°;",
        
    d: "border-roundness: 15px;"
    },
            
    correctAnswer: "b"
                
    },


    {
    
    question: "Which of the following is important to understand when creating animations using JavaScript?",
                
    answers: {
                
    a: "Mathematics",
                
    b: "History",
                
    c: "English",
            
    d: "Art"
    },
                
    correctAnswer: "a"
                    
    },


    {
    
    question: "When using the <canvas> tag, which technique is used to draw the graphic to the page?",
                    
    answers: {
                    
    a: "None of these.",
                    
    b: "The canvas element has native support for geometric shapes, gradients, and fill colors; it does not require any other code to draw these.",
                    
    c: "Only server side code can be used to draw on the the canvas element.",
                
    d: "A scripting language (such as Javascript) is used."
    },
                    
    correctAnswer: "d"
                        
    },


    {
    
    question: "Which of the following functions is used to control timing in JavaScript Animations?",
                    
    answers: {
                    
    a: "keyframes()",
                    
    b: "timer()",
                    
    c: "setTimeout()",
                
    d: "None of these"
    },
                    
    correctAnswer: "c"
                        
    },


    {
    
    question: "How is an HTML5 touch-enabled application tested?",
                    
    answers: {
                    
    a: "In an Virtual Simulator",
                    
    b: "On both an Android and iPhone",
                    
    c: "On a PC with Firefox and Google Chrome",
                
    d: "On as many touch-enabled hardware devices as possible"
    },
                    
    correctAnswer: "d"
                        
    },


    {
    
    question: "You want to publish an application to the Microsoft store. What should you do first?",
                    
    answers: {
                    
    a: "Write your app's description and take screenshots",
                    
    b: "Submit your app to the Store",
                    
    c: "Review the app requirements and developer agreement",
                
    d: "Choose and reserve your app name"
    },
                    
    correctAnswer: "c"
                        
    },


    {
    
    question: "What does CSS stand for?",
                    
    answers: {
                    
    a: "App Development environments",
                    
    b: "JavaScript",
                    
    c: "This is a native feature of HTML5",
                
    d: "WWAHost.exe"
    },
                    
    correctAnswer: "a"
                        
    }
            
]

function shoquestion(questions, quizContainer){

    var output = [];

    var answers;

    for(var i=0; i<questions.length; i++){

    answers = [];

    for(letter in questions[i].answers){

    answers.push(

        '<label>'

            +'input type = "radio" name = "question'+i+'" value = "'+letter+'">'
            +letter + ': '
            +questions[i].answers[letter]
            +'</label>'
        );
    }

    output.push(
        '<div class = "question">' + questions[i].question + '</div>'
        + '<div class = "answers">' + answers.join('') + '</div>'
    );
    }

    quizContainer.innerHTML = output.join('');
}




function showResults(questions, quizContainer, resultsContainer){
	
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	var userAnswer = '';
	var numCorrect = 0;
	
	for(var i=0; i<questions.length; i++){

	userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
	if(userAnswer===questions[i].correctAnswer){

	numCorrect++;

	answerContainers[i].style.color = 'lightgreen';
	}
	else{

	answerContainers[i].style.color = 'red';
	}
	}

	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}

submitButton.onclick=function(){

	showResults(questions, quizContainer, resultsContainer);
}

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(questioning, quizContainer, resultsContainer, submitButton);