"use strict";

(function(jQuery){
    
    jQuery(document).ready(function(){

        /* ////////header menu mobile */
        jQuery(".headerCard .c-hamburger").on('click', function() {
            jQuery(".innerHeader__navPrincipal").toggleClass("active").fadeOut(400, 0.5);
        });
  
        (function() {
            var toggles = document.querySelectorAll(".c-hamburger");
                for (var i = toggles.length - 1; i >= 0; i--) {
                    var toggle = toggles[i];
                    toggleHandler(toggle);
                };
    
            function toggleHandler(toggle) {
                toggle.addEventListener( "click", function(e) {
                    e.preventDefault();
                    (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
                });
            }
        })();

    });//nav

    /* //////////// collapse-btn */
    jQuery(document).ready(function(){
            jQuery('.collapse-btn').on('click',function(){
            jQuery(this).toggleClass('open').toggleClass('rotate-icon');
        });     
    });

}(jQuery));

