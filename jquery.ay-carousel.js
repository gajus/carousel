/**
 * jQuery carousel v0.0.1 (2012 NOV 8)
 * https://github.com/gajus/ay-carousel
 *
 * Licensed under the BSD.
 * https://github.com/gajus/ay-carousel/blob/master/LICENSE
 *
 * Author: Gajus Kuizinas <g.kuizinas@anuary.com>
 */
(function($){
	$.fn.ayCarousel	= function()
	{
		for(var i = 0, j = this.length; i < j; i++)
		{
			var carousel = $(this[i]),
				navigation = carousel.find('.button-left, .button-right'),
				body = carousel.find('.body'),
				wrapper = body.find('.wrapper')
				elements = wrapper.children(),
				wrapper_width = 0,
				margin_left = 0;
			
			for(var i = 0, j = elements.length; i < j; i++)
			{
				wrapper_width	+= $(elements[i]).outerWidth();
			}
			
			wrapper.css({width: wrapper_width});
			
			//console.log(  );
			
			var update_navigation	= function(){
				$(navigation[0])[margin_left === 0 ? 'addClass' : 'removeClass']('disabled');
				//$(navigation[0])[margin_left === 0 ? 'addClass' : 'removeClass']('disabled');
			};
			
			update_navigation();
			
			navigation.on('click', function(){
				var body_width	= body.width(),
					wrapper_width = wrapper.width(),
					wrapper_offset = parseInt(wrapper.css('margin-left'));
					request_direction = $(this).hasClass('button-left') ? 0 : 1,
					remaining_right = wrapper_width+wrapper_offset-body_width,
					remaining_left = wrapper_offset*-1;
				
				if(request_direction)
				{	
					margin_left = remaining_right > body_width ? wrapper_offset-body_width : wrapper_offset-remaining_right;
				}
				else
				{	
					margin_left = remaining_left > body_width ? wrapper_offset+body_width : 0;
				}
				
				update_navigation();
				
				wrapper.animate({marginLeft: margin_left}, 200);
			});
		}
	};
})($);