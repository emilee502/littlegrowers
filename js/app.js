$(window).load(function(){
	$('.start').animate({
		'bottom' : '230px'
	},2000, "swing")
	$('.mid').animate({
		'bottom' : '240px'
	},2000, "swing")
	$('.full').animate({
		'bottom' : '245px'
	},2000, "swing")
})

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
		'bottom' : '155px'
	})
	$('.mid').animate({
		'bottom' : '130px'
	})
	$('.full').animate({
		'bottom' : '72px'
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
		'bottom' : '155px'
	})
	$('.mid').animate({
		'bottom' : '130px'
	})
	$('.full').animate({
		'bottom' : '72px'
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
		'bottom' : '155px'
	})
	$('.mid').animate({
		'bottom' : '130px'
	})
	$('.full').animate({
		'bottom' : '72px'
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
		'bottom' : '155px'
	})
	$('.mid').animate({
		'bottom' : '130px'
	})
	$('.full').animate({
		'bottom' : '72px'
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
		'bottom' : '230px'
	},2000, "swing")
	$('.mid').animate({
		'bottom' : '240px'
	},2000, "swing")
	$('.full').animate({
		'bottom' : '245px'
	},2000, "swing")

});





















