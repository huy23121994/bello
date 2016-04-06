$.cssSlider = function(options) {

    var slider = $(this);

    var settings = $.extend({
        thumbWidth : '',
        thumbHeight : '',
        thumbsPerPage : '',
        startingPage : 1,
        thumbsElement : slider.find('li.product'),
        prev : '',
        next : '',
    }, options);

    var transitioning = false;

    slider.css('width', settings.thumbWidth * settings.thumbsElement.length);
    slider.css('left', settings.thumbWidth * settings.thumbsPerPage * (settings.startingPage-1) * -1);

    $(settings.prev).on('click', function(){ moveSlider('prev') });
    $(settings.next).on('click', function(){ moveSlider('next') });

    var init = function() {
        setNavigation(parseInt(slider.css('left')));
    }

    var moveSlider = function(direction){
        var pageWidth = settings.thumbWidth * settings.thumbsPerPage;
        if (direction == 'next') pageWidth *= -1;

        if (transitioning != true) {
            var newPosition = parseInt(slider.css('left')) + pageWidth;
            slider.css('left', newPosition + 'px');
            transitioning = true;

            setNavigation(newPosition);

        }
    }

    var setNavigation = function(position) {
        position >= 0 ? $(settings.prev).hide() : $(settings.prev).show();
        position <= (settings.thumbWidth * settings.thumbsElement.length - Math.abs(settings.thumbWidth * settings.thumbsPerPage))*-1 ? $(settings.next).hide() : $(settings.next).show();
    }

    $(this).on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
        transitioning = false;
    });
    console.log('a');
    init();
    return this;
}
