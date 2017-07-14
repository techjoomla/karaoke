// change this if you want to change the default list of topics
var topics = {
	"FML": [
		"Updating Joomla broke my site",
		"The last book you read",
		"I broke Joomla",
		"I forgot my password",
    "Because of Joomla I have no life",
    "Lost in Translation",
    "I need it now!!",
    "I work from home"
    ],
   "Community": [
		"Joomla is my family",
    "Joomla User Groups",
    "My first Joomla event",
    "JoomlaDay UK",
    "Beer",
    "Team Work",
    "Leadership",
    "Online Communication"
   ] ,
	"Joomla": [
		"Automated Testing",
		"Backups",
    "I use Joomla because...",
    "Updating Joomla broke my site",
		"Living the 'Dream'",
    "My Favourite Extension",
		"Make money with Joomla",
		"Joomla 4 will be...",
    	]
};

var my_topics = [];

jQuery(function($){
	
  var dmiOptions = {
					random					: 	1,			// Randomize slide order (Ignores start slide)
		fit_always				:   1,
	
		// Functionality
		slide_interval          :   10000,		// Length between transitions
		transition              :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
		transition_speed		:	500,		// Speed of transition
												   
		// Components							
		slide_links				:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
slides: [],
	};


for (var i = 0; i<360; i++) {
  if (i<9) {
    var counter = '00' + i;
  }
  if (i>9 && i<99) {
    var counter = '0' + i;
  }
  if (i>99) {
    var counter =  i;
  }
  var xxx = {image: 'slides/' + counter + '-jduk.jpg'};
  dmiOptions.slides.push(xxx);
}
console.log(dmiOptions)
	$.supersized(dmiOptions);
});

function load_topics(topic) {
  if (topic == "Joomla") {
  	$( "#topics" ).val(topics.Joomla.join("\n"));
  } else if (topic == "Community") {
	$( "#topics" ).val(topics.Community.join("\n"));
  } else {
	$( "#topics" ).val(topics.FML.join("\n"));
    
  }

}

function pick_topic() {
  $("#intro")[0].style.display = "none";
  $("#play")[0].style.display = "block";
  $("#your_topic").text(my_topics[Math.floor(Math.random() * my_topics.length)]);
  $("#your_topic").quickfit({max:30});
}

function play_pk() {
  $("#count_down")[0].style.display = "block";
  $("#play")[0].style.display = "none";
  $("#count_down").text(3);
  setTimeout(function(){
	$("#count_down").text(2);
  }, 1000);
  setTimeout(function(){
	$("#count_down").text(1);
	api.nextSlide();
  }, 2000);
  setTimeout(function(){
	$("#count_down")[0].style.display = "none";
  }, 3000);
  setTimeout(function(){
	$("#count_down").text("Thank you!");
	$("#count_down")[0].style.display = "block";
  }, ($("#duration").val() * 1000)+3000);
  setTimeout(function(){
	$("#count_down").text();
	$("#count_down")[0].style.display = "none";
	  $("#intro")[0].style.display = "block";
  }, ($("#duration").val() * 1000)+8000);
};

$( document ).ready( function() {
  load_topics($( "#topic" ).val());
	$( "#topic" ).change(function() {
	  load_topics($( this ).val());
	});

	$( "#go" ).click(function() {
	  my_topics = $("#topics").val().split("\n");
	  pick_topic();
	});

	$( "#again" ).click(function() {
	  my_topics = $("#topics").val().split("\n");
	  pick_topic();
	});

	$( "#playbut" ).click(function() {
	  play_pk();
	});
});
