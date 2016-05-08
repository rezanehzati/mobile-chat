$(function(){
  $('#send').click(function(){
    sendMsg();
  });
  
  $('#me').keypress(function(e){
	 if ( e.keyCode == 13 ) {
		 sendMsg();
	 } 
  });
});


function sendMsg() {
 	var id = $('#send').attr('data-t');
    var text = $('#' + id).val();
    var vaal = $('#me').val();
    if(vaal != "") {
    $('ul').append('<li class="talk-bubble tri-right btm-right">' + '<p class="firstpersonmsg">'+ text + '</p>' + '</li>');
    $('#' + id).val('');
    $( "#me" ).focus();
    }
    else { 
    $( "#me" ).focus();
    }	
}

