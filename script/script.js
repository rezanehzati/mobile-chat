$(function(){
  $('#send').click(function(){
   
//     $( "section" ).scrollTop(2000);
    var id = $(this).attr('data-t');
    var text = $('#' + id).val();
    var vaal = $('#me').val();
   // alert(vaal);
    if(vaal != "") {
    $('ul').append('<li class="talk-bubble tri-right btm-right">' + '<p class="firstpersonmsg">'+ text + '</p>' + '</li>');
    $('#' + id).val('');
//     $( "section" ).scrollTop(2000);
    $( "#me" ).focus();
    }
    else { 
    $( "#me" ).focus();}
  });
});



