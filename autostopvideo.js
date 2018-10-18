$('.carousel-control-prev').click(function() {
  $('#AdriensVideo').carousel('prev');
    $("Video").each(function () { this.pause(); this.currentTime = 0;  });
});

$('.carousel-control-next').click(function() {
  $('#AdriensVideo').carousel('next');
  $("Video").each(function () { this.pause(); this.currentTime = 0; });
});
