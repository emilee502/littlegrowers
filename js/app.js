$('.ab').click(function(){

	$('#ab').animate({
		'z-index' : '1'
	})
	$('#gram').animate({
		'z-index' : '0'
	})
	$('#duct').animate({
		'z-index' : '0'
	})
	$('#con').animate({
		'z-index' : '0'
	})

});

$('.gram').click(function(){

	$('#ab').animate({
		'z-index' : '0'
	})
	$('#gram').animate({
		'z-index' : '1'
	})
	$('#duct').animate({
		'z-index' : '0'
	})
	$('#con').animate({
		'z-index' : '0'
	})

});

$('.duct').click(function(){

	$('#ab').animate({
		'z-index' : '0'
	})
	$('#gram').animate({
		'z-index' : '0'
	})
	$('#duct').animate({
		'z-index' : '1'
	})
	$('#con').animate({
		'z-index' : '0'
	})

});

$('.con').click(function(){

	$('#ab').animate({
		'z-index' : '0'
	})
	$('#gram').animate({
		'z-index' : '0'
	})
	$('#duct').animate({
		'z-index' : '0'
	})
	$('#con').animate({
		'z-index' : '1'
	})

});