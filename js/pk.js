// change this if you want to change the default list of topics
var topics = {
	"FML": [
		"Hopes and Fears",
		"The last book you read",
		"This presentation",
		"Too much feedback",
  	"Your boss",
		"Your company",
		"Your dream job",
		"Your favorite pet",
		"Your favourite movie",
		"Your ideal relaxing day",
		"Your last holiday",
		"Your weekend",
    ],
   "Community": [
    "hello world",
   ] ,
	"Joomla": [
		"Automated Testing",
		"Build quality in",
		"Don't try this at home",
		"Empowerment",
		"Failure",
		"If you were born 100 years ago",
		"Leadership",
		"Living the 'Dream'",
		"Project Managers",
		"Spending time with your family",
		"Star Trek",
		"Star Wars",
		"Success",
		"Teams",
		"Technology",
		"Test-Driven Development",
		"Testing",
		"The calm before the storm",
		"Training",
		"Road Trip",
	]
};

var my_topics = [];

jQuery(function($){
	
	$.supersized({
		random                  :   1,			// Start slide (0 is random)
		fit_always				:   1,
	
		// Functionality
		slide_interval          :   10000,		// Length between transitions
		transition              :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
		transition_speed		:	500,		// Speed of transition
												   
		// Components							
		slide_links				:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
		slides 					:  	[			// Slideshow Images
          {image : 'slides/116-slide.jpg'},
          {image : 'slides/048-slide.jpg'},
          {image : 'slides/034-slide.jpg'},
          {image : 'slides/033-slide.jpg'},
          {image : 'slides/049-slide.jpg'},
          {image : 'slides/103-slide.jpg'},
          {image : 'slides/050-slide.jpg'},
          {image : 'slides/109-slide.jpg'},
          {image : 'slides/051-slide.jpg'},
          {image : 'slides/044-slide.jpg'},
          {image : 'slides/055-slide.jpg'},
          {image : 'slides/045-slide.jpg'},
          {image : 'slides/031-slide.jpg'},
          {image : 'slides/046-slide.jpg'},
          {image : 'slides/047-slide.jpg'},
          {image : 'slides/181-slide.jpg'},
          {image : 'slides/025-slide.jpg'},
          {image : 'slides/001-slide.jpg'},
          {image : 'slides/002-slide.jpg'},
          {image : 'slides/130-slide.png'},
          {image : 'slides/005-slide.jpg'},
          {image : 'slides/004-slide.jpg'},
          {image : 'slides/003-slide.jpg'},
          {image : 'slides/147-slide.jpg'},
          {image : 'slides/146-slide.jpg'},
          {image : 'slides/145-slide.jpg'},
          {image : 'slides/144-slide.jpg'},
          {image : 'slides/143-slide.jpg'},
          {image : 'slides/142-slide.jpg'},
          {image : 'slides/141-slide.jpg'},
          {image : 'slides/150-slide.jpg'},
          {image : 'slides/149-slide.jpg'},
          {image : 'slides/148-slide.jpg'},
          {image : 'slides/009-slide.jpg'},
          {image : 'slides/007-slide.jpg'},
          {image : 'slides/006-slide.jpg'},
          {image : 'slides/043-slide.jpg'},
          {image : 'slides/038-slide.jpg'},
          {image : 'slides/014-slide.jpg'},
          {image : 'slides/086-slide.jpg'},
          {image : 'slides/122-slide.jpg'},
          {image : 'slides/123-slide.jpg'},
          {image : 'slides/124-slide.jpg'},
          {image : 'slides/125-slide.jpg'},
          {image : 'slides/126-slide.jpg'},
          {image : 'slides/182-slide.jpg'},
          {image : 'slides/183-slide.jpg'},
          {image : 'slides/184-slide.jpg'},
          {image : 'slides/185-slide.jpg'},
          {image : 'slides/187-slide.jpg'},
          {image : 'slides/186-slide.jpg'},
          {image : 'slides/190-slide.jpg'},
          {image : 'slides/189-slide.jpg'},
          {image : 'slides/188-slide.jpg'},
          {image : 'slides/207-slide.jpg'},
          {image : 'slides/191-slide.jpg'},
          {image : 'slides/134-slide.jpg'},
          {image : 'slides/118-slide.png'},
          {image : 'slides/135-slide.jpg'},
          {image : 'slides/136-slide.jpg'},
          {image : 'slides/140-slide.jpg'},
          {image : 'slides/139-slide.jpg'},
          {image : 'slides/138-slide.jpg'},
          {image : 'slides/137-slide.jpg'},
          {image : 'slides/152-slide.jpg'},
          {image : 'slides/151-slide.jpg'},
          {image : 'slides/156-slide.jpg'},
          {image : 'slides/155-slide.jpg'},
          {image : 'slides/154-slide.jpg'},
          {image : 'slides/153-slide.jpg'},
          {image : 'slides/192-slide.jpg'},
          {image : 'slides/008-slide.png'},
          {image : 'slides/010-slide.jpg'},
          {image : 'slides/011-slide.jpg'},
          {image : 'slides/019-slide.jpg'},
          {image : 'slides/018-slide.jpg'},
          {image : 'slides/017-slide.png'},
          {image : 'slides/016-slide.png'},
          {image : 'slides/015-slide.jpg'},
          {image : 'slides/013-slide.jpg'},
          {image : 'slides/012-slide.jpg'},
          {image : 'slides/023-slide.png'},
          {image : 'slides/022-slide.jpg'},
          {image : 'slides/021-slide.jpg'},
          {image : 'slides/020-slide.jpg'},
          {image : 'slides/024-slide.jpg'},
          {image : 'slides/028-slide.png'},
          {image : 'slides/027-slide.png'},
          {image : 'slides/026-slide.png'},
          {image : 'slides/039-slide.png'},
          {image : 'slides/037-slide.jpg'},
          {image : 'slides/036-slide.jpg'},
          {image : 'slides/035-slide.jpg'},
          {image : 'slides/032-slide.jpg'},
          {image : 'slides/030-slide.png'},
          {image : 'slides/029-slide.jpg'},
          {image : 'slides/052-slide.png'},
          {image : 'slides/042-slide.jpg'},
          {image : 'slides/041-slide.jpg'},
          {image : 'slides/040-slide.png'},
          {image : 'slides/054-slide.jpg'},
          {image : 'slides/053-slide.jpg'},
          {image : 'slides/061-slide.jpg'},
          {image : 'slides/060-slide.jpg'},
          {image : 'slides/059-slide.jpg'},
          {image : 'slides/058-slide.jpg'},
          {image : 'slides/057-slide.jpg'},
          {image : 'slides/056-slide.png'},
          {image : 'slides/064-slide.png'},
          {image : 'slides/063-slide.jpg'},
          {image : 'slides/062-slide.png'},
          {image : 'slides/068-slide.jpg'},
          {image : 'slides/067-slide.jpg'},
          {image : 'slides/066-slide.png'},
          {image : 'slides/065-slide.png'},
          {image : 'slides/069-slide.png'},
          {image : 'slides/070-slide.png'},
          {image : 'slides/072-slide.jpg'},
          {image : 'slides/071-slide.png'},
          {image : 'slides/076-slide.jpg'},
          {image : 'slides/075-slide.jpg'},
          {image : 'slides/074-slide.jpg'},
          {image : 'slides/073-slide.png'},
          {image : 'slides/078-slide.jpg'},
          {image : 'slides/077-slide.jpg'},
          {image : 'slides/079-slide.png'},
          {image : 'slides/084-slide.jpg'},
          {image : 'slides/083-slide.jpg'},
          {image : 'slides/082-slide.png'},
          {image : 'slides/081-slide.png'},
          {image : 'slides/080-slide.jpg'},
          {image : 'slides/088-slide.png'},
          {image : 'slides/087-slide.png'},
          {image : 'slides/085-slide.png'},
          {image : 'slides/091-slide.jpg'},
          {image : 'slides/090-slide.png'},
          {image : 'slides/089-slide.png'},
          {image : 'slides/096-slide.jpg'},
          {image : 'slides/095-slide.jpg'},
          {image : 'slides/094-slide.jpg'},
          {image : 'slides/093-slide.jpg'},
          {image : 'slides/092-slide.jpg'},
          {image : 'slides/102-slide.jpg'},
          {image : 'slides/101-slide.jpg'},
          {image : 'slides/100-slide.jpg'},
          {image : 'slides/099-slide.jpg'},
          {image : 'slides/098-slide.png'},
          {image : 'slides/097-slide.jpg'},
          {image : 'slides/107-slide.png'},
          {image : 'slides/106-slide.png'},
          {image : 'slides/105-slide.jpg'},
          {image : 'slides/104-slide.png'},
          {image : 'slides/108-slide.png'},
          {image : 'slides/113-slide.jpg'},
          {image : 'slides/112-slide.jpg'},
          {image : 'slides/111-slide.png'},
          {image : 'slides/110-slide.jpg'},
          {image : 'slides/119-slide.jpg'},
          {image : 'slides/117-slide.png'},
          {image : 'slides/115-slide.png'},
          {image : 'slides/114-slide.jpg'},
          {image : 'slides/120-slide.jpg'},
          {image : 'slides/121-slide.jpg'},
          {image : 'slides/127-slide.png'},
          {image : 'slides/128-slide.jpg'},
          {image : 'slides/129-slide.jpg'},
          {image : 'slides/131-slide.png'},
          {image : 'slides/132-slide.jpg'},
          {image : 'slides/133-slide.jpg'},
          {image : 'slides/157-slide.png'},
          {image : 'slides/158-slide.jpg'},
          {image : 'slides/159-slide.png'},
          {image : 'slides/160-slide.jpg'},
          {image : 'slides/161-slide.jpg'},
          {image : 'slides/162-slide.jpg'},
          {image : 'slides/163-slide.jpg'},
          {image : 'slides/164-slide.png'},
          {image : 'slides/165-slide.jpg'},
          {image : 'slides/166-slide.png'},
          {image : 'slides/167-slide.jpg'},
          {image : 'slides/168-slide.jpg'},
          {image : 'slides/169-slide.jpg'},
          {image : 'slides/170-slide.jpg'},
          {image : 'slides/171-slide.jpg'},
          {image : 'slides/172-slide.jpg'},
          {image : 'slides/173-slide.png'},
          {image : 'slides/174-slide.jpg'},
          {image : 'slides/175-slide.jpg'},
          {image : 'slides/176-slide.jpg'},
          {image : 'slides/178-slide.jpg'},
          {image : 'slides/177-slide.jpg'},
          {image : 'slides/179-slide.jpg'},
          {image : 'slides/180-slide.jpg'},
          {image : 'slides/193-slide.png'},
          {image : 'slides/194-slide.png'},
          {image : 'slides/195-slide.png'},
          {image : 'slides/196-slide.jpg'},
          {image : 'slides/197-slide.png'},
          {image : 'slides/198-slide.png'},
          {image : 'slides/199-slide.png'},
          {image : 'slides/200-slide.jpg'},
          {image : 'slides/201-slide.jpg'},
          {image : 'slides/202-slide.jpg'},
          {image : 'slides/203-slide.jpg'},
          {image : 'slides/204-slide.jpg'},
          {image : 'slides/206-slide.jpg'},
          {image : 'slides/205-slide.jpg'},
		   ]
		
	});
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
	pick_topic();
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
