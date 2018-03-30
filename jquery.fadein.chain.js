/* 
 *  # JQfadeInChain
 *  A jQuery function to make elements of a HTML page Fade In consecutively without write a lot of JS.
 */

$(document).ready(function() {
    
    function fadeChain(id = 1){
        if ($(".fadeIn"+id).length > 0){
            var duration = 400 * id;
            $(".fadeIn"+id).fadeIn(duration);
            var new_id = id+1;
            if ($(".fadeIn"+new_id).length > 0){
                fadeChain(new_id);
            }
        }
    }
    fadeChain();
    
});