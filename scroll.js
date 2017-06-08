 $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length ? $target : $('[name=' + this.hash.slice(1) +']');

      if ($target.length) {
        var baseMinScrollTime = 300,
            baseMaxScrollTime = 800;

        var docHeight = $(document).height(),
            triggerTop = $(this).offset().top,
            targetTop = $target.offset().top - 50;

        var scrollProportion = (targetTop - triggerTop) / docHeight,
            relativeTime = ((baseMaxScrollTime - baseMinScrollTime) * scrollProportion) + baseMinScrollTime,
            scrollTime = -1 * (1 - relativeTime);

        $('html, body').animate({
          scrollTop: targetTop - 10
        }, scrollTime);
        return false;
      }
    }
  });

[].forEach.call(document.querySelectorAll('div[data-src]'),    function(div) {
  div.setAttribute('style', div.getAttribute('data-src'));
  div.onload = function() {
    div.removeAttribute('data-src');
  };
});