;(function($) {
  var plugin = $.fn.gantt.prototype;
	

    

	// store copies of the original plugin functions before overwriting
//	var functions = {};
//	for (var i in plugin) {
//		if (typeof(plugin[i]) === 'function') {
//			functions[i] = plugin[i];
//		}
//	}
    
//    var core = plugin.core;
	
	// extend existing functionality of the jquery-gantt plugin
	$.extend(true, plugin, {
        
//            var core = {

		create: function(element) {
		    plugin.core.create.apply(this, arguments);
		    
		    alert('were in the extension now!');
		}
//	    };
        });
        
        
        
        
        
        
        
        
        

}(jQuery));

