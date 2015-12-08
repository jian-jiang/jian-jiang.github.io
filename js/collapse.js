(function(){
	$(document).ready(function(){

		var _toggleAllStatusCollapse = true;

		$('span.sectionHead').click(function(evt){
			var ol = $(this).parent().next("ol");
			ol.toggleClass("hide");
			$(this).find("img").toggleClass("hide");
		});

		$('#toggleAll').click(function(){
			var spans = $('span.sectionHead');
			console.log(spans);
			_t = _toggleAllStatusCollapse;
			_toggleAllStatusCollapse = !_toggleAllStatusCollapse;

			if(_t){
				$(this).find("span").text("展开所有");
			}else{
				$(this).find("span").text("折叠所有");
			}

			$(this).find("img").toggleClass("hide");

			for(var i = 0; i < spans.length; i++){
				span = spans[i];
				var ol = $(span).parent().next("ol");
				if(_t){
					ol.addClass("hide");
				}else{
					ol.removeClass("hide");
				}
				$(span).find("img").toggleClass("hide");
			}
		});
	});
})();