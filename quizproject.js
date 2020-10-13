
function shade() {
	var d = new Date();
	if (d.getHours() >= 18 || d.getHours() < 8) {
		document.body.style.backgroundColor = "#24272D";
		document.getElementById("left").style.color = "white";
		document.getElementById("gridContainer").style.backgroundColor = "#24272D";
		document.getElementById("header").style.color = "white";
		document.getElementById("left").style.border = "thick solid #7DF9FF";
		document.getElementById("right").style.border = "thick solid #7DF9FF";
		document.getElementById("header").style.border = "thick solid #7DF9FF";
		document.getElementById("footer1").style.border = "thick solid #7DF9FF";
		document.getElementById("footer2").style.border = "thick solid #7DF9FF";
		document.getElementById("h1").style.color = "#7DF9FF";
		document.getElementById("para").style.color = "#7DF9FF";
		document.getElementById("p1").style.color = "#7DF9FF";
		document.getElementById("score").style.color = "#7DF9FF";
	} else {
		document.body.style.backgroundColor = "#FEF8EC";
		document.getElementById("left").style.color = "black";
		document.getElementById("gridContainer").style.backgroundColor = "#FEF8EC";
		document.getElementById("header").style.color = "black";
		document.getElementById("left").style.border = "thick solid #F4442E";
		document.getElementById("right").style.border = "thick solid #F4442E";
		document.getElementById("header").style.border = "thick solid #F4442E";
		document.getElementById("footer1").style.border = "thick solid #F4442E";
		document.getElementById("footer2").style.border = "thick solid #F4442E";
		document.getElementById("h1").style.color = "#F4442E";
		document.getElementById("para").style.color = "#F4442E";
		document.getElementById("p1").style.color = "#F4442E";
		document.getElementById("score").style.color = "#F4442E";
	}
	/*if (d.getHours() >= 18 || d.getHours() < 8) {
	
	} else {
		
	}*/
}





var currentQuestion = 0; // the question we are currently on

var score = 0; //  numbers of correct questions

// questions is an arruy of question objects
var questions = [
   {
	"question": "who was the protagonist in the campaign of Call Of Duty Black ops 1?",
	"a": "Alex Mason",
	"b": "Bruce Harris",
	"c": "Daniel Clarke",
	"d": "Dimitri Petrenko",
	"image":"quizimages/soldier.jpg",
	"answer": "a"
   },
   
   {
	"question": "what was the early development name of 'Super Smash Bros'?",
	"a": "punchman",
	"b": "video Game fighting arena",
	"c": "PepsiMan",
	"d": "N64 battles",
	"image":"quizimages/Smash.jpg",
	"answer": "c"
   },
   
    {
	"question": "When was 'Mario Kart' for the 'Wii' released?",
	"a": "2005",
	"b": "2007",
	"c": " 2009",
	"d": "2008",
	"image":"quizimages/Mario.jpg",
	"answer": "d"
   },
   
 {
	"question": "who is a starting character in LoL?",
	"a": "Ashe",
	"b": "Vel'Koz",
	"c": "Thresh",
	"d": "Fiddlesticks",
	"image":"quizimages/LoL.jpg",
	"answer": "a"
   },
   
    {
	"question": "who are the developers of 'OverWatch'?",
	"a": "Blizzard, Iron Galaxy",
	"b": "Ubisoft, sperasoft studio",
	"c": "Inifinty Ward, Activision",
	"d": "Psyonix, Panic button Games",
	"image":"quizimages/overwatch.jpg",
	"answer": "a"
   }, 
   
   {
	"question": "What video game took the world by storm in late 2017",
	"a": "Jetpack Joyride",
	"b": "Rocket League",
	"c": "Rainbow Six Siege",
	"d": "Fortnite",
	"image":"quizimages/xbox.jpg",
	"answer": "d"
   }, 
   
    {
	"question": "What video game took the world by storm in 2020",
	"a": "Madden 20",
	"b": "Fall Guys",
	"c": "NBA 2K20",
	"d": "Overwatch",
	"image":"quizimages/PS2.jpg",
	"answer": "b"
   }, 
   
    {
	"question": "What video game took the world by storm in September 2020",
	"a": "Dance Dance Revolution",
	"b": "Mario Kart",
	"c": "Apx Legends",
	"d": "Among Us",
	"image":"quizimages/mc.jpg",
	"answer": "d"
   }, 
   
   {
	"question": "Which character run's 30% faster when being shot at in 'Apex Legends'?",
	"a": "Mirage",
	"b": "Bangalore",
	"c": "Octane",
	"d": "Loba",
	"image":"quizimages/apex.jpg",
	"answer": "b"
   },

   {
	"question": "Who is the Antagonist of the 'Super Mario Bro's' franchise?",
	"a": "Princess Shroob",
	"b": "King Boo",
	"c": "Bowser",
	"d": "Cackletta",
	"image":"quizimages/SMB.jpg",
	"answer": "c"
   },
 ];
 
  
 if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}


 
 // run code when the body loads
function initialize() {
	 document.getElementById("lightbox").style.display="none";
	 shade();
	 loadQuestion();
	 
 }
 
 
 // load the current question on the page
 function loadQuestion() {
	 
	 // check for last question
	 let message= "";
	 if  (currentQuestion == questions.length) {
		 message = "congrats! you have finished. Your score is " + score + " / " + 
		 questions.length + ". Click to start again";
		 
		 // show the light box with feedback
		document.getElementById("lightbox").style.display="block";
		document.getElementById("message").innerHTML = message;
		currentQuestion = 0;
		score = 0;
		
	 }//if
	 
   //preload the image
   var img = document.getElementById("image");
   var preLoadImg = new Image();
   preLoadImg.src = questions[currentQuestion].image;
   
   preLoadImg.onLoad = function () {
	   img.width = this.width;
   };
   img.style.maxwidth = "500px";
   img.src =preLoadImg.src;
  
   
   //load the question
   document.getElementById("question").innerHTML = questions[currentQuestion].question;
   document.getElementById("a").innerHTML = "A. " + questions[currentQuestion].a;
   document.getElementById("b").innerHTML = "B. " + questions[currentQuestion].b;
   document.getElementById("c").innerHTML = "C. " + questions[currentQuestion].c;
   document.getElementById("d").innerHTML = "D. " + questions[currentQuestion].d;
   
 
 } // loadQuestion
 
 
 //mark the current question
 function markIt(ans) {
	let message = "";
	
	// if the answer is correct add to score and move to next question
	if(ans == questions[currentQuestion].answer) {
		//alert("Correct");// dont use this in real web design design..too 1995
		
		
		// add to score and move to next question
		score = score + 1;
		document.getElementById("score").innerHTML =  score + " / " + questions.length;
	
		
		
		message = "good job! your score is" + score + " / " + questions.length;
		
		
		
	}
	
	else{
		message = "incorrect answer! your score is" + score + " / " + questions.length;
	}

	// show the light box with feedback
	
	currentQuestion++; //add to currentQuestion
	loadQuestion();
	
	// otherwise notify user the answer is incorrect
	
 }  // markIt
 
// close the lightbox 
 function closeLightBox() {
	 document.getElementById("lightbox").style.display="none";
 }