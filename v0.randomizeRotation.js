var randomizeRotation = function(selector, r) {
  $(selector).each(function(){
    var rotation = Math.ceil(Math.random() * r);
    console.log(rotation);
    $(this).css('-webkit-transform', 'rotate(' + rotation + 'deg)');
  });
}
