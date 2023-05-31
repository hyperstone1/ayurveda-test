$(document).ready(function(){
	function calCheck() {
		if($('#arrival').val() != 0 && $('#departure').val() != 0) {
			$('.disabled-block').removeClass('disabled-block');
		}
	}
	$('#arrival').change(function(){
		calCheck();
	});
	$('#departure').on('change',function(){
		calCheck();
	});
});