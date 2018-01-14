jQuery(document).ready(function($) {

            $('.fecharModal').click(function(event) {
                console.log('asas');
            });
            PNotify.prototype.options.styling = "bootstrap3";
            PNotify.prototype.options.width = "350px";
            $.fn.select2.defaults.formatSelection;
               $( ".select2" ).select2({
                       "language": "pt-BR",
                       "theme":"bootstrap",
                        width: '100%'
               });
         });