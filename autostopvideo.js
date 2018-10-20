var tag = document.createElement('script');
tag.src = "http://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var videoArray = [];
var pos = 0;
var id_stop = 0;

$("#carouselIndicators .carousel-control-next").on("click", function () {
var car_pos = parseInt($(".carousel-item.active").data("pos"));
if(pos === car_pos) {
if (pos === 2) {
pos = 0;
} else {
pos++;
}
}

console.log(id_stop);
videoArray[id_stop].stopVideo();
videoArray[pos].playVideo();
id_stop === 2 ? id_stop = 0 : id_stop++;
});

$("#carouselIndicators .carousel-control-prev").on("click", function () {
var car_pos = parseInt($(".carousel-item.active").data("pos"));
if(pos === car_pos) {
if (pos === 0) {
pos = 2;
} else {
pos--;
}
}

videoArray[id_stop].stopVideo();
videoArray[pos].playVideo();
id_stop === 0 ? id_stop = 2 : id_stop--;
});

window.onYouTubePlayerAPIReady = function () {
videoArray[0] = new YT.Player("player1", {
width: '600',
height: '400',
videoId: "2bgMRctEP7c"
});
videoArray[1] = new YT.Player("player2", {
width: '600',
height: '400',
videoId: "drUxWNPlB3c"
});
videoArray[2] = new YT.Player("player3", {
width: '600',
height: '400',
videoId: "omfqbMRw2gE"
});
}
