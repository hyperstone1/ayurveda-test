/*$(document).ready(function(){
	$(window).on('scroll',function(){
		var topOff = $('#go-down').offset().top + $('#go-down').height() + 44;
		if(topOff > $('#header-block').outerHeight()){
			$('#go-down').css({
				position: 'absolute',
				top: $('#header-block').outerHeight() - 84
			});
		}
		if($(window).scrollTop() <= $('#go-down').offset().top - $(window).height() + 90) {
			$('#go-down').css({
				position: 'fixed',
				top: 'auto',
				bottom: '40px'
			});
		}
	});
	$(window).resize(function(){
		$('#go-down').css({
			position: 'absolute',
			top: $('#header-block').outerHeight() - 40
		});
	});
});*/