/*

$( "#me" ).focus(function() {
 $( "section" ).css("height" , "180px"); 
 $( "section" ).scrollTop(9000);
});
*/



$(function(){
  $('#send').click(function(){
   
    var id = $(this).attr('data-t');
    var text = $('#' + id).val();
    var vaal = $('#me').val();
   // alert(vaal);
    if(vaal != "") {
    $('ul').append('<li class="talk-bubble tri-right btm-right">' + '<p class="firstpersonmsg">'+ text + '</p>' + '</li>');
    $('#' + id).val('');
    $( "#me" ).focus();
    }
    else { 
    $( "#me" ).focus();}
  });
});
/*

$( "section" ).click(function() {
 $( "section" ).css("height" , "77%"); 
 $( "section" ).scrollTop(9000);
});

$( "header" ).click(function() {
 $( "section" ).css("height" , "77%"); 
 $( "section" ).scrollTop(9000);
});
*/


 //$('textarea').keypress(
// function(e){
 //if(e.keyCode == 13) {
//$( "#send" ).click();
 //}
//});

/*
$( "#me" ).focus(function() {
  $( "section" ).scrollTop(2000);
});
if($("input,textarea").is(":focus")){
//input and text area has focus
 $( "section" ).css("height" , "180px"); 
 $( "section" ).scrollTop(9000);
}
else{
$( "section" ).css("height" , "77%"); 
 $( "section" ).scrollTop(9000);	
//no focus for input and textarea
}   


$(document).ready(function(e) {
    $( "section" ).scrollTop(5000);	
}); 
*/
/*!
 *
 */
// var html = $(".firstpersonmsg").html();
//html = html.substring(0, 34) + "<br>" + html.substring(34);
//$(".firstpersonmsg").html(html);


