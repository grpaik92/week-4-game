var targetNumber = 0;
var totalScore = 0; 
var gameStatus = true
var wins = 0;
var losses = 0; 
var jewel = {			//jewel var holds all jewels 
	jewelOne: {
		begValue : 0,							//give initial value of jewelOne to 0 
		jewelImg : "assets/images/jewel1.jpg", //links image
	},
	jewelTwo: {
		begValue : 0,
		jewelImg : "assets/images/jewel2.png",
	},
	jewelThree: {
		begValue : 0, 
		jewelImg : "assets/images/jewel3.jpg",
	},
	jewelFour: {
		begValue : 0, 
		jewelImg : "assets/images/jewel4.jpg",
	},
};

var min_w = 300;
var vid_w_orig;
var vid_h_orig;


$(document).ready(function(){


	$(function() {

	    vid_w_orig = parseInt($('video').attr('width'));
	    vid_h_orig = parseInt($('video').attr('height'));

	    $(window).resize(function () { fitVideo(); });
	    $(window).trigger('resize');

	});

	function fitVideo() {

	    $('#video-viewport').width($('.fullsize-video-bg').width());
	    $('#video-viewport').height($('.fullsize-video-bg').height());

	    var scale_h = $('.fullsize-video-bg').width() / vid_w_orig;
	    var scale_v = $('.fullsize-video-bg').height() / vid_h_orig;
	    var scale = scale_h > scale_v ? scale_h : scale_v;

	    if (scale * vid_w_orig < min_w) {scale = min_w / vid_w_orig;};

	    $('video').width(scale * vid_w_orig);
	    $('video').height(scale * vid_h_orig);

	    $('#video-viewport').scrollLeft(($('video').width() - $('.fullsize-video-bg').width()) / 2);
	    $('#video-viewport').scrollTop(($('video').height() - $('.fullsize-video-bg').height()) / 2);

	};

	$('#jewelOne').append('<img src=' + jewel.jewelOne.jewelImg + ' width = "100px" height = "100px">'); 		//insert image
	$('#jewelOne').click(function(){											//click image function
		if (gameStatus == true){												
		totalScore = totalScore + jewel.jewelOne.begValue
		updateScore();
		$('#h').html(totalScore)
		};
	})

	$('#jewelTwo').append('<img src=' + jewel.jewelTwo.jewelImg + ' width = "100px" height = "100px">');		//insert image
	$('#jewelTwo').click(function(){										//click image function
		if (gameStatus == true){
		totalScore = totalScore + jewel.jewelTwo.begValue
		updateScore();
		$('#h').html(totalScore)
		};
	})

	$('#jewelThree').append('<img src=' + jewel.jewelThree.jewelImg + ' width = "100px" height = "100px">');	//insert image
	$('#jewelThree').click(function(){										//click image function
		if (gameStatus == true){
		totalScore = totalScore + jewel.jewelThree.begValue
		updateScore();
		$('#h').html(totalScore)
		};
	})

	$('#jewelFour').append('<img src=' + jewel.jewelFour.jewelImg + ' width = "100px" height = "100px">');		//insert image
	$('#jewelFour').click(function(){
		if (gameStatus == true){
		totalScore = totalScore + jewel.jewelFour.begValue
		updateScore();
		$('#h').html(totalScore)
		};
	})


	function startgame(){
		gameStatus = true
		totalScore = 0
		targetNumber = Math.round(Math.random() * (75 - 20) + 20)	//c is the id to TargetScore between 20 and 75
		jewel.jewelOne.begValue = Math.round(Math.random() * 8) + 1;
		jewel.jewelTwo.begValue = Math.round(Math.random() * 8) + 1;
		jewel.jewelThree.begValue = Math.round(Math.random() * 8) + 1;
		jewel.jewelFour.begValue = Math.round(Math.random() * 8) + 1;

		$('#h').html(totalScore); 
		$('#c').html(targetNumber);
		$('#d').html("Wins: " + wins);
		$('#e').html("Losses: " + losses);
	}

	function updateScore(){
		if (totalScore == targetNumber) {
			gameStatus = false;
			wins++;
			$('#d').html("Wins: " + wins);
		}
		else if (totalScore > targetNumber) {
			gameStatus = false;
			losses++;
			$('#e').html("Losses: " + losses);
		}
		if (gameStatus === false) {
			setTimeout(startgame, 2000);
		}
	}

	//reset game without affecting wins/losses counter to original settings 

startgame(); 

});

