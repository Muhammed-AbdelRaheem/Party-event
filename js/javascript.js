/* Start Section Home */

$("#open").on("click", function () {
  $("#menu").removeClass("d-none");
  $("#menu").animate({ width: "250px" }, 1000);
  $("#open").animate({ "margin-left": "250" }, 1000);
  $(".home-content").animate({ "padding-left": "250" }, 1000);

});

$(".closebtn").on("click", function () {
  $("#menu").animate({ width: "0" }, 1000, function () {
    $("#menu").addClass("d-none");
  });
  $("#open").animate({ "margin-left": "0" }, 1000);
  $(".home-content").animate({ "padding-left": "0" }, 1000);

});


$("#menu a").on("click",function  ( ) {
    let sectionId=$(this).attr("href")
    let currentSection = $(sectionId).offset().top
    $("body,html").animate({scrollTop:currentSection},1000)

})
$("body,html").scrollTop(0)


$(window).scroll(function  ( ) {
  let scrollposition =$(window).scrollTop()
  let homePosition=$("#Home").offset().top;
  if (scrollposition>=homePosition) {
    $("#backTop").fadeIn(1000)
  }
 }
)

$("#backTop").on("click",function  ( ) {
  $("body,html").animate({scrollTop:0},1000)
})

/* End Section Home */

/* Start Section Accordion */

$("#inner1").slideDown()

$("#one").on("click", function () {
  $("#inner1").slideToggle();
  $("#inner2").slideUp();
  $("#inner3").slideUp();
  $("#inner4").slideUp();
});

$("#two").on("click", function () {
  $("#inner2").slideToggle();
  $("#inner1").slideUp();
  $("#inner3").slideUp();
  $("#inner4").slideUp();
});
$("#three").on("click", function () {
  $("#inner3").slideToggle();
  $("#inner2").slideUp();
  $("#inner1").slideUp();
  $("#inner4").slideUp();
});
$("#four").on("click", function () {
  $("#inner4").slideToggle();
  $("#inner2").slideUp();
  $("#inner3").slideUp();
  $("#inner1").slideUp();
});

/* end Section Accordion */

/* Start Section Counter */
// 25/10/2023

let countDownDate = new Date("oct 25 2024 23:59:59 ").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = (countDownDate - dateNow) / 1000;
  let days = Math.floor(dateDiff / (60 * 60 * 24));
  let hours = Math.floor((dateDiff % (60 * 60 * 24)) / (60 * 60));
  let minutes = Math.floor((dateDiff % (60 * 60)) / 60);
  let secounds = Math.floor(dateDiff % 60);

  if (days < 10) {
    days = `0${days}`;
  }
  if (secounds < 10) {
    secounds = `0${secounds}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }

  $(".day").html(`${days} D`);
  $(".hour").html(`${hours} H`);
  $(".min").html(`${minutes} M`);
  $(".sec").html(`${secounds} S`);

  if (dateDiff <= 0) {
    clearInterval(counter);
    $("#party").removeClass("d-none");
  }
}, 100);

/* end Section Counter */

/* Start Section Contact us */

$("#textarea").keyup(function () {
  let maxlength = 100;
  let length = $("#textarea").val().length;
  let diffLenght = maxlength - length;
  $("#chars").html(diffLenght);
  if (diffLenght <= 0) {
    $("#chars").text("your available character finished");
  }
});

/* End Section Contact us */
