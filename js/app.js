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
	$('#img').animate({
		'z-index' : '0'
	})
	$('.start').animate({
		'bottom' : '125px'
	})
	$('.mid').animate({
		'bottom' : '100px'
	})
	$('.full').animate({
		'bottom' : '50px'
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
	$('#img').animate({
		'z-index' : '0'
	})
	$('.start').animate({
		'bottom' : '125px'
	})
	$('.mid').animate({
		'bottom' : '100px'
	})
	$('.full').animate({
		'bottom' : '50px'
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
	$('#img').animate({
		'z-index' : '0'
	})
	$('.start').animate({
		'bottom' : '125px'
	})
	$('.mid').animate({
		'bottom' : '100px'
	})
	$('.full').animate({
		'bottom' : '50px'
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
	$('#img').animate({
		'z-index' : '0'
	})
	$('.start').animate({
		'bottom' : '125px'
	})
	$('.mid').animate({
		'bottom' : '100px'
	})
	$('.full').animate({
		'bottom' : '50px'
	})

});

$('.img').click(function(){

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
		'z-index' : '0'
	})
	$('#img').animate({
		'z-index' : '1'
	})
	$('.start').animate({
		'bottom' : '200px'
	},2000, "swing")
	$('.mid').animate({
		'bottom' : '210px'
	},2000, "swing")
	$('.full').animate({
		'bottom' : '220px'
	},2000, "swing")

});





















