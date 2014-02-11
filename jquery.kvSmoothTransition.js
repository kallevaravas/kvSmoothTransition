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
        options = $.extend({
            showSpeed: 350,
            hideSpeed: 500,
            includeText: true
		}, options);
        
        return this.each(function (i, link) {
            
            var $this = $(this);
            var this_position = $this.position();
            var elms = {};
        
            $this.append(elms[i] = $('<span />').filter(function (index) {
                if (options['includeText']) {
                    $(this).html($this.html());
                }
                if ($this.attr('id')) {
                    $(this).attr('id', $this.attr('id'));
                }
                return true;
            }).addClass($this.attr('class') + ' hover').css({
                'display': 'block',
                'opacity': 0,
                'position': 'absolute',
                'top': this_position.top,
                'left': this_position.left,
                'width': $this.width(),
                'height': $this.height()
            }))
            .hover(function () {
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
