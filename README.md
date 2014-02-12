kvSmoothTransition
==================

**kvSmoothTransition** plugin is a simple fix for people, who want have smooth hover transitions for their designs and layouts. This plugin works for most possible element types and all possible css types. Very easy to setup and uses only 3 options.

This project originally started from the need to smoothly switch between normal and hovered element. After endless of research, [SO question](http://stackoverflow.com/questions/6800950/smooth-transition-between-two-class-and-classhover) was started. It did get some results, but the codes were very minimal or oversized -- nothing dry or neat.

This code is sadly from 2011, and now there are more browser support for these types of things. But hopefully someone can benefit from this script yet.

Original code by Kalle Väravas (16/11/2011)

**Copyleft - Use it freely!**

**Usage**

This plugin does not use the :hover pseudo-class, but just the .hover class of the original element. So if your normal hover effect would be .test:hover {} then now you have to set it as .test.hover {} (or #test.hover {}):

    <style>
    	#test, .test {padding: 5px;}
    	#test.hover, .test.hover {border: 1px solid grey; -moz-border-radius: 3px; text-decoration: underline;}
    </style>
    <div id="test">id test</div>
    <div class="test">class test</div>
    <script>
    	$('#test, .test').kvSmoothTransition();
    </script>

If you still wish to have normal hover effect as fallback when JavaScript is not enabled, then add it to the noscript-stylesheet:

    <noscript>
    	<style>
    		#test:hover, .test:hover {border: 1px solid grey; -moz-border-radius: 3px; text-decoration: underline;}
    	</style>
    </noscript>


**[Check the example fiddle](http://jsfiddle.net/hobobne/e87q8/12/)**

This plugin has 3 options.

- **showSpeed:** [number] - easein animation speed
- **hideSpeed:** [number] - easeout animation speed
- **includeText:** [boolean] - determines if the html from the element will be used
