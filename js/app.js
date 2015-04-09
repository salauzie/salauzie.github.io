// jQuery(document).ready(function($) {
//     $('.replacement .top-img').on('mouseenter', function () {
//         $(this).fadeOut(500);
//     });
// });

// $(function(){
//  $("video").hover(function(){
//    $(this).css("opacity","1");
//    this.play();
//    },function(){
//    $(this).css("opacity",".3");
//   this.pause()
//  });
// });

// $('#imgDetail li img').not(".video").hover(function(){
//         $('#imgDetail video').hide(); //Hide the video if it's showing;
//         $('#bigImg').show(); //Show the image if it's hidden       
//         $('#bigImg').attr('src',$(this).attr('src')); //Update the image source
// });

// $('#imgDetail li img.video').hover(function(){
//         $('#bigImg').hide();//Hide the image if its showing
//         $('#imgDetail video').show(); //Show The video
//         //$('#imgDetail video').get(0).play(); //Optional, Play The video

// });
$(document).ready(function(){
	console.log("Made it");
	$('#imgDetail').mouseover(function(){
		$('#top-img').hide();
		$('#skatingvideo').show();
		$('#skatingvideo').get(0).play();	
	});
	$('#imgDetail').mouseout(function(){
		$('#skatingvideo').hide();
		$('#skatingvideo').get(0).pause();
		$('#top-img').show();
	});
});
