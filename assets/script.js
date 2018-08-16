$(".search,input").click(function(){
  $(".search").toggleClass("s-active");
  $(".s-input").focus();
});
$(document).ready(function(){
        $("body").keydown(function(e){
          if (e.which == 27) {$(".search").removeClass("s-active");};
        });
        $("body").keypress(function(e){
          if (e.which == 115){$(".search").addClass("s-active");};
        });
    });


