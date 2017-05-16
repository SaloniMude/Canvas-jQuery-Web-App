//Problem: User interaction not happening 
//Solution: Make it user interactive. 
let color = $(".selected").css("background-color");

let $canvas = $("canvas");

let context = $canvas[0].getContext("2d");

let lastEvent;

let mouseDown= false;

//When clicking on control list items 
$(".controls").on("click", "li", function() {
  
   //deselect sibling elements 
    $(this).siblings().removeClass("selected");
  
  //select clicked this
  $(this).addClass("selected");
  
  
   //cache current color here 
   color = $(this).css("background-color");



});



//When new color is pressed 
$("#revealColorSelect").click(function() {
  
  //show or hide color select 
  changeColor();
  
  $("#colorSelect").toggle();

});

function changeColor() {
  let r = $("#red").val();
  let g = $("#green").val();
  let b = $("#blue").val();
  
  $("#newColor").css("background-color", "rgb(" + r +  " , " + g + " , " + b + ")");

};
    
  //when color sliders change
  $("input[type=range]").on("input", changeColor);
  

  //When add color is pressed 
  $("#addNewColor").click(function() {
    
    //append the color to the controlls ul 
    
    let $newColor = $("<li></li>");
    $newColor.css("background-color", $("#newColor").css("background-color"));
    $(".controls ul").append($newColor);
    
    //select the new color 
    $newColor.click();
  
  });
    


  //On mouse event on the canvas ,
  $canvas.mousedown(function(e) {
    lastEvent  = e;
  
    mouseDown = true;
  
  }).mousemove(function(e) {
  
    // draw lines 
    if(mouseDown) {
      context.beginPath();
      context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
      context.lineTo(e.offsetX, e.offsetY);
      context.strokeStyle = color;
      context.stroke();
      lastEvent = e;
    }
  
  }).mouseup(function() {
  
    mouseDown =false;
  }).mouseleave(function() {
  
    $canvas.mouseup();
  
  });


  



