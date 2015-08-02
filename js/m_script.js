// external js: masonry.pkgd.js, imagesloaded.pkgd.js

$(document).ready( function() {
  // init Masonry after all images have loaded
    for (var i = 1; i < 67; i++) {
        var html = '<div class="grid-item"><img src="/images/mGallery/' + i + '.jpg" /></div>';
        $('#maingrid').append(html);
    }   
    
    
  var $grid = $('.grid').imagesLoaded( function() {
   
    $grid.masonry({
      itemSelector: '.grid-item',
      percentPosition: true,
      columnWidth: '.grid-sizer',
      columnWidth: 120,
      gutter: 3
    }); 
  });

});
