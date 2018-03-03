var startScreen;
var gameHTML;
var counter = 30;
var questionArray = ["What is beer?", 
                     "How is beer best consumed?", 
                     "Who invented beer?", 
                     "What is Zyntology?", 
                     "How old is the oldest beer advertising", 
                     "How many types of beer are there?", 
                     "What country has largest beer production in the world?", 
                     "What is the Best Beer In The World?"];


var answerArray = [["an alcoholic drink made from yeast-fermented malt flavored with hops", 
                    "the most popular drink in the world", 
                    "natural or artificially carbonated drink", 
                    "all of the above"],

                   ["Warm",
                    "Cold",
                    "Natural",
                    "Hot"],

                   ["The Germans", 
                    "The Romans",
                    "The Sumerian", 
                    "The Greeks"], 

                   ["The study of Hoops",
                    "The study or Yeast",
                    "The study of Beer",
                    "The study of Fermentation"], 

                   ["100 years old", "500 years old", "1000 BC years old", "4000 BC years old"], 

                   ["400 types","4009 types","20 types","589 types"], 

                   ["Spain", "United Kingdom", "Venezuela", "USA"], 

                   ["Sapporo","Sierra Nevada","Corona","Westvleteren 12"]];



var imageArray = ["<img class='center-block img-right' src='img/beer1.png'>", 
                  "<img class='center-block img-right' src='img/beer2.png'>", 
                  "<img class='center-block img-right' src='img/beer3.png'>", 
                  "<img class='center-block img-right' src='img/beer4.png'>", 
                  "<img class='center-block img-right' src='img/beer5.png'>", 
                  "<img class='center-block img-right' src='img/beer6.png'>", 
                  "<img class='center-block img-right' src='img/beer7.png'>", 
                  "<img class='center-block img-right' src='img/beer8.png'>"];


var correctAnswers = ["D. all of the above", 
                      "B. Cold", 
                      "C. The Sumerian", 
                      "C. The study of beer", 
                      "D. 4000 BC years old", 
                      "A. 400 types", 
                      "B. United Kingdom", 
                      "D. Westvleteren 12"];
var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctCount = 0;
var incorrectCount = 0;
var unansweredCount = 0;
var clickSound = new Audio("sound/button-click.mp3");