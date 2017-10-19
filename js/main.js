$(function () {
    var $window = $(window);
    var $header = $('#header-bar');
    var className = 'header-bar__display';
    var breakpoint = 640;

    $window.scroll(_.debounce(function () {
        if ($window.scrollTop() > breakpoint) {
            $header.addClass(className);
        } else {
            $header.removeClass(className);
        }
    }, 20));
});
