//'Global Timer'
var timer = new Timer();
$(document).ready(function(){

//'Global Variables'
    var questions,
     	closeQuestionStats,
     	StartGame, 
     	onLoad, 
     	questionNum,
     	questionSubs, 
     	questionDefinition1, 
     	questionDefinition2, 
     	questionDefinition3, 
     	questionDefinition4,
     	winner1,
     	winner2,
     	winner3,
     	winnerTotal,
     	loser1,
     	loser2,
     	loser3,
     	totalLoser,
     	timeOut,
     	answerCount,
     	WrongAnswers,
     	NextQuestion;

//'Initial Global Variable Definitions'
 	questionSubs = 0;
    questionNum = 0;
    answerCount = 0;
    WrongAnswers = 0;
    questions = { 	"Question0":{	"query" : "Which brand is a crafbeer?",
									"Option1": "Lagunitas",
									"Option2": "Corona",
									"Option3": "Sierra Nevada",
									"Answer": "Sierra Nevada",
									"imgSrc": "assets/img/sierrabrand.jpg"
					},
					"Question1":{	"query" : "What is the oldest craft brewery in the USA?",
									"Option1": "Sierra Nevada",
									"Option2": "Anchor Steam",
									"Option3": "Heiniken",
									"Answer": "Anchor Steam",
									"imgSrc": "assets/img/anchorsteam.jpg"
					},
					"Question2":{	"query" : "Which is the only USA craft brewery in Germany?",
									"Option1": "Stone Brewery",
									"Option2": "Miller",
									"Option3": "Yuengling",
									"Answer": "Stone Brewery",
									"imgSrc": "assets/img/stonebeer.jpg"
					},
					"Question3":{	"query" : "Which is the most famuos Craft beer in the USA?",
									"Option1": "Samuel Adams",
									"Option2": "Sierra Nevada",
									"Option3": "Anchor Steam",
									"Answer": "Samuel Adams",
									"imgSrc": "assets/img/SamAdams.jpg"
					}
				};


//HTML MANIPULATION
	//QUESTIONS
	questionDefinition1 = function(){
		$('#question').html(questions.Question0.query);
		$('#choice1').html('<input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="Yamcha">'  + questions.Question0.Option1);
		$('#choice2').html('<input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="Vegeta">'  + questions.Question0.Option2);
		$('#choice3').html('<input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="Goku">'    + questions.Question0.Option3);
	}

	questionDefinition2 = function(){
		$('#question').html(questions.Question1.query);
		$('#choice1').html('<input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="Broly">'   + questions.Question1.Option1);
		$('#choice2').html('<input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="Beruus">'  + questions.Question1.Option2);
		$('#choice3').html('<input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="Freezer">' + questions.Question1.Option3);
	}

	questionDefinition3 = function(){
		$('#question').html(questions.Question2.query);
		$('#choice1').html('<input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="Buu">'   + questions.Question2.Option1);
		$('#choice2').html('<input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="Cell">'  + questions.Question2.Option2);
		$('#choice3').html('<input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="Jiren">' + questions.Question2.Option3);
	}

	questionDefinition4 = function(){
		$('#question').html(questions.Question3.query);
		$('#choice1').html('<input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="No17">'   + questions.Question3.Option1);
		$('#choice2').html('<input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="No16">'  + questions.Question3.Option2);
		$('#choice3').html('<input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="No18">' + questions.Question3.Option3);
	}
	//Winner Announcment
	winner1 = function(){
		$('#questionsLeft').html('Questions Left: ' + questionSubs);
		$('#TotalAnswers').html('Total Answers: ' + answerCount);
		$('#WrongAnswers').html('Wrong Answers: ' + WrongAnswers);
		$(".img-thumbnail").attr("src", questions.Question0.imgSrc);
		$('#timerleft').html('Time Ramaining: ' + timer.getTimeValues().toString());
		$('#AnswerDesc').html('Correct! Sierra Nevada is the Right Answer!')
		$('.modal').modal("show");
		questionDefinition2();
	}
	winner2 = function(){
		$('#questionsLeft').html('Questions Left: ' + questionSubs);
		$('#TotalAnswers').html('Total Answers: ' + answerCount);
		$('#WrongAnswers').html('Wrong Answers: ' + WrongAnswers);
		$(".img-thumbnail").attr("src", questions.Question1.imgSrc);
		$('#timerleft').html('Time Ramaining: ' + timer.getTimeValues().toString());
		$('#AnswerDesc').html('Correct! Anchor Steam is the Right Answer!')
		$('.modal').modal("show");
		questionDefinition3();
	}
	winner3 = function(){
		$('#questionsLeft').html('Questions Left: ' + questionSubs);
		$('#TotalAnswers').html('Total Answers: ' + answerCount);
		$('#WrongAnswers').html('Wrong Answers: ' + WrongAnswers);
		$(".img-thumbnail").attr("src", questions.Question2.imgSrc);
		$('#timerleft').html('Time Ramaining: ' + timer.getTimeValues().toString());
		$('#AnswerDesc').html('Correct! Stone Brewery is the Right Answer!')
		$('.modal').modal("show");
		questionDefinition4();
	}
	winnerTotal = function(){
		$('#questionsLeft').html('Questions Left: ' + questionSubs);
		$('#TotalAnswers').html('Total Answers: ' + answerCount);
		$('#WrongAnswers').html('Wrong Answers: ' + WrongAnswers);
		$(".img-thumbnail").attr("src", questions.Question3.imgSrc);
		$('#timerleft').html('Time Ramaining: ' + timer.getTimeValues().toString());
		$('#AnswerDesc').html('Correct! Samuel Adams is the Right Answer! Try Again')
		$('.modal').modal("show");
		onLoad();
	}
	//Loser Annoucement
	loser1 = function(){
		$('#questionsLeft').html('Questions Left: ' + questionSubs);
		$('#TotalAnswers').html('Total Answers: ' + answerCount);
		$('#WrongAnswers').html('Wrong Answers: ' + WrongAnswers);
		$(".img-thumbnail").attr("src", questions.Question0.imgSrc);
		$('#timerleft').html('Time Ramaining: ' + timer.getTimeValues().toString());
		$('#AnswerDesc').html('Incorrect Sierra Nevada is the Right Answer!')
		$('.modal').modal("show");
		questionDefinition2();
	}

	loser2 = function(){
		$('#questionsLeft').html('Questions Left: ' + questionSubs);
		$('#TotalAnswers').html('Total Answers: ' + answerCount);
		$('#WrongAnswers').html('Wrong Answers: ' + WrongAnswers);
		$(".img-thumbnail").attr("src", questions.Question1.imgSrc);
		$('#timerleft').html('Time Ramaining: ' + timer.getTimeValues().toString());
		$('#AnswerDesc').html('Incorrect Anchor Steam is the Right Answer!')
		$('.modal').modal("show");
		questionDefinition3();
	}

	loser3 = function(){
		$('#questionsLeft').html('Questions Left: ' + questionSubs);
		$('#TotalAnswers').html('Total Answers: ' + answerCount);
		$('#WrongAnswers').html('Wrong Answers: ' + WrongAnswers);
		$(".img-thumbnail").attr("src", questions.Question2.imgSrc);
		$('#timerleft').html('Time Ramaining: ' + timer.getTimeValues().toString());
		$('#AnswerDesc').html('Incorrect Stone Brewery is the Right Answer!')
		$('.modal').modal("show");
		questionDefinition4();
	}

	Totalloser = function(){
		$('#questionsLeft').html('Questions Left: ' + questionSubs);
		$('#TotalAnswers').html('Total Answers: ' + answerCount);
		$('#WrongAnswers').html('Wrong Answers: ' + WrongAnswers);
		$(".img-thumbnail").attr("src", questions.Question3.imgSrc);
		$('#timerleft').html('Time Ramaining: ' + timer.getTimeValues().toString());
		$('#AnswerDesc').html('Incorrect!, Samuel Adamas was the Right Answer! Try Again')
		$('.modal').modal("show");
		onLoad();
	}

	//'On Page Load, show the button hid the form'
	onLoad = function(){
				$('#startButton').show();
				$('.form-group').hide();
			 };
	onLoad();
	//'Start the game by clicking on the button'
	stratGame = $('#startButton').click(function(){
					$('#startButton').hide();
					questionDefinition1();
					$('.form-group').show();
					timer.start({countdown: true, startValues: {seconds: 30}});
					$('.clock').html(timer.getTimeValues().toString());
					timer.addEventListener('secondsUpdated', function (e) {
				    $('.clock').html(timer.getTimeValues().toString());
					});
					questionSubs = 0;
				    questionNum = 0;
				    answerCount = 0;
				    WrongAnswers = 0;
				});
	//'Once the user hits NEXT button, commence the Loser Winner evaluations'
	NextQuestion = $('#nextQuestion').on('click', $("input[name='optionsRadios']:checked").val(), function(){
							timer.pause();
							var userAnser = $("input[name='optionsRadios']:checked").val();
							if (userAnser != undefined && questionNum < 5){
								switch(userAnser){
									case "Goku":
										answerCount++;
										questionSubs = 3;
										winner1();
										break;
									case "Beruus":
										answerCount++;
										questionSubs = 2;
										winner2();
										break;
									case "Buu":
										answerCount++;
										questionSubs = 1;
										winner3();
										break;
									case "No17":
										answerCount++;
										questionSubs = 0;
										winnerTotal();
										break;

									default:
										WrongAnswers++;
										if(questionNum == 0){
											questionSubs = 3;
											loser1();
										}
										else if(questionNum == 1){
											questionSubs = 2;
											loser2();
										}
										else if(questionNum == 2){
											questionSubs = 1;
											loser3();
										}
										else if(questionNum ==3){
											questionSubs = 0;
											Totalloser();
										}
								}

							}
				   });
	//'Once the modal is closed'
	closeQuestionStats = $('#closeModal').click(function(){
								$('.modal').modal("hide");
								timer.reset();
								questionNum++
						  });
	//'Event Listener for the timer and depending Question Number, popup the corresponding loser message'
	timer.addEventListener('targetAchieved', function (e) {
					    if(questionNum == 0){
					    	questionSubs = 3;
					    	WrongAnswers++;
					    	loser1();
					    	
					    }
					    else if(questionNum == 1){
					    	questionSubs = 2;
					    	WrongAnswers++;
					    	loser2();
					    	
					    }
					    else if(questionNum == 2){
					    	questionSubs = 1;
					    	WrongAnswers++;
					    	loser3();
					    }
					    else if(questionNum == 3){
					    	questionSubs = 0;
					    	WrongAnswers++;
					    	Totalloser();
					    }

	});
});