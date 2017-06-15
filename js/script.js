var $mainHeader = $(".main-header");
$mainHeader.css('color', '#fff');
$(".main-header").css("color", "#fff");

$('#random-gif-btn').click(function(){
	$.get( "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=pg", function( data ) {
		var img = '<img src="' + data.data.image_url + ' ">';
		$('#random-gif-container').html(img);
	});
});

