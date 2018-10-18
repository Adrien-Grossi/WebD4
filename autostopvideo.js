$('.carousel-control-prev').click(function() {
  $('#AdriensVideo').carousel('prev');
    $("video").each(function () { this.pause(); this.currentTime = 0;  });
});

$('.carousel-control-next').click(function() {
  $('#AdriensVideo').carousel('next');
  $("video").each(function () { this.pause(); this.currentTime = 0; });
});
