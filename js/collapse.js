(function(){
	$(document).ready(function(){

		var _toggleAllStatusCollapse = true;

		$('span.sectionHead').click(function(evt){
			var ol = $(this).parent().next("ol");
			ol.toggleClass("hide");
			if(ol.hasClass("hide")){
				$(this).find("img").attr("src","/images/expand_all.gif");
			}else{
				$(this).find("img").attr("src","/images/collapse_all.gif");
			}
		});

		$('#toggleAll').click(function(){
			var spans = $('span.sectionHead');
			console.log(spans);
			_t = _toggleAllStatusCollapse;
			_toggleAllStatusCollapse = !_toggleAllStatusCollapse;

			if(_t){
				$(this).find("span").text("展开所有");
				$(this).find("img").attr("src","/images/expand_all.gif");
			}else{
				$(this).find("span").text("折叠所有");
				$(this).find("img").attr("src","/images/collapse_all.gif");
			}

			for(var i = 0; i < spans.length; i++){
				span = spans[i];
				var ol = $(span).parent().next("ol");
				if(_t){
					ol.addClass("hide");
					$(span).find("img").attr("src","/images/expand_all.gif");
				}else{
					ol.removeClass("hide");
					$(span).find("img").attr("src","/images/collapse_all.gif");
				}
			}
		});
	});
})();