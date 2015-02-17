(function ($) {
    $.fn.slideBox = function(custom) {
        var stage = $(this);

        var options = {
            position : 'right',
            stages : '0'
        };

        if(typeof(custom) == 'object')
            options = $.extend(options, custom);

        var slideId = 'slideBox' + (new Date()).getMilliseconds();
        var sbDiv = $('<div>',{
            'id' : slideId,
            'class' : 'slideBox '+options.position
        }).html('<div class="slideBoxload"></div><div class="slideBoxLoader"><div class="sdWrap"> <div class="loader"> <img src="img/icon.png" alt="Guaxinim Wep App" title="Guaxinim Web App"> </div> </div> </div>');

        var sbContent = $('<div>',{
            'id' : slideId + 'content',
            'class' : 'slideBoxContent'
        });

        var sbWrap = $('<div>',{
            'id' : slideId + 'wrap',
            'class' : 'slideBoxWrapt'
        });

        stage.addClass('slideBoxStage');
        stage.wrapInner(sbContent);
        stage.append(sbDiv);
        stage.wrapInner(sbWrap);

        stage.on('slidebox',function(){
            $('.slideBoxContent',stage).animate({
                'left' : '-100%'
            });
            $('.slideBox',stage).animate({
                'left' : '0%'
            }).css('overflow', 'scroll').scrollTop(0);
        });

        stage.on('returnslidebox',function(){
            $('.slideBoxContent',stage).animate({
                'left' : '0%'
            });
            $('.slideBox',stage).animate({
                'left' : '100%'
            }).css('overflow', 'hidden');
        });


        stage.trigger('slideboxend');

    }
})(jQuery);