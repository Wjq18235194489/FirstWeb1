{
  let flag = true;
  $(".course").click(function () {
      if (flag) {
          $(".course").css({height: 83, background: "#f50e3f"});
          $(".top-sec-nav").show();
          $(".top-sec-nav li").each(function (index) {
              $(this).css({
                  opacity: 0,
                  transform: "rotateX(90deg)",
                  animation: "slideDown .3s ease-in " + index * 0.3 + "s forwards"
              })
          })
      } else {
          $(".top-sec-nav li").each(function (index) {
              $(this).css({
                  opacity: 1,
                  transform: "rotate(0)",
                  animation: "slideUp .3s ease-in " + (0.6 - index * 0.3) + "s forwards"
              });
              setTimeout(function (){
                  $(".course").css({height: 78, background: ""});
                  $(".top-sec-nav").hide();
              }, 1000)
          })
      }
      flag = !flag;
  })
}

{
    $(".banner-prev").click(function (){
        $(".banner-box").css("rotateY", ("-=60"));
    });
    $(".banner-next").click(function (){
        $(".banner-box").css("rotateY", ("+=60"));
    })
}