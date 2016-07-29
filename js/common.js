$(document).ready(function() {
			$h = $(window).width();
			if($h<=360){
				$(".more").html("<a href='#'>back to top<i class='glyphicon glyphicon-menu-top'></i></a>");
				$(".more").click(function(){
						window.scrollTo(0,0);
				});
			}
				$("ul.nav-tabs li").mouseover(function(){
					
					$(this).addClass("active").attr("aria-expanded","true")
					.siblings().attr("aria-expanded","false");
						$h = $(this).find("a").attr("href");

								$("div.tab-pane").each(function(index,val){
        						
        						if($(this).attr("id")	== $h)	
							{

								$(this).addClass("in active");

							}else{

								$(this).removeClass("in active");
							}


      					});
							

				});
				

		   });