/*
 * kvSmoothTransition, jQuery plugin
 *
 * @author: Kalle H. VÃ¤ravas <kalle.varavas@alta.ee>
 * @date: 16/11/2011
 *
 * Originally made for http://stackoverflow.com/questions/6800950
 */
(function ($) {
    $.fn.kvSmoothTransition = function (options) {
    	// These are the default options, that can be overwritten while triggering this function
        options = $.extend({
            showSpeed: 350,
            hideSpeed: 500,
            includeText: true
	}, options);
        // To make it work for every element with the same options, lets use return this.each
        return this.each(function (i, link) {
            var this_element = $(this);
            var this_position = this_element.position();
            var elms = {};
            this_element.append(elms[i] = $('<span />').filter(function (index) {
                if (options['includeText']) {
                    $(this).html(this_element.html());
                }
                if (this_element.attr('id')) {
                    $(this).attr('id', this_element.attr('id'));
                }
                return true;
            }).addClass(this_element.attr('class') + ' hover').css({
                'display': 'block',
                'opacity': 0,
                'position': 'absolute',
                'top': this_position.top,
                'left': this_position.left,
                'width': this_element.width(),
                'height': this_element.height()
            })).hover(function () {
                $(elms[i]).stop().animate({
                    'opacity': 1
                }, options['showSpeed']);
            }, function () {
                $(elms[i]).stop().animate({
                    'opacity': 0
                }, options['hideSpeed']);
            })
        
        });
    };
}) (jQuery);
