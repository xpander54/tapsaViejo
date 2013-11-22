var delay = 3000;
var active;
var end_frame;
var current;
var lis;

function start_slideshow(el,start_frame, end_frame, delay, lis) {
	window.setTimeout(fadeInOut(el,start_frame,0,end_frame, delay, lis), delay);
}

function fadeInOut(el,frame, start_frame, end_frame, delay, lis) {
	return (function() {
		lis = $(el).getElementsByTagName('li');
		Effect.Fade(lis[frame]);
		if (frame == end_frame) { frame = start_frame; } else { frame++; }
		lisAppear = lis[frame];
		window.setTimeout("Effect.Appear(lisAppear);", 0);
		current =frame;
		te = window.setTimeout(function(){if($('PictureName'))$('PictureName').innerHTML=lis[frame].getElementsByTagName('img')[0].getAttribute('alt');},500);
		active = window.setTimeout(fadeInOut(el,frame, start_frame, end_frame, delay), delay + 1850);
	})
}

function pauseSlideShow(el){
	if(active) {
		window.clearTimeout(active);	
	}
	return false;
}
function startSlideShow(el){
	lis = $(el).getElementsByTagName('li');
	start_slideshow(el,current, end_frame, delay, lis);
	return false;
}

function goToPicture(el,frame){
	pauseSlideShow(el);
	Effect.Fade(lis[current]);
	lisAppear = lis[frame];
te = window.setTimeout(function(){if($('PictureName'))$('PictureName').innerHTML=lis[frame].getElementsByTagName('img')[0].getAttribute('alt');},500);
current=frame;
	window.setTimeout("Effect.Appear(lisAppear);", 0);
	startSlideShow(el);
	return false;
}

Event.observe(window, 'load',
      function() {
			var start_frame = 0;
			var el = 'ImageFade';
			lis = $(el).getElementsByTagName('li');
			if($('PictureName'))$('PictureName').innerHTML=lis[0].getElementsByTagName('img')[0].getAttribute('alt');
			if(lis.length>1){
				end_frame = lis.length -1;
				start_slideshow(el,start_frame, end_frame, delay, lis);
			}
			return false;  
			
      }
);