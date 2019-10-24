import $ from 'jquery';
import hljs from 'highlight.js'
import './scss/main.scss';

hljs.initHighlightingOnLoad();

function scrollToTop() {
  let top = $('#navbar').position().top;
  window.scrollTo(0,top);
  $('.arrow').hide();
}

$(function () {
    $("pre code").each(function(){
        $(this).html("<ol><li>" + $(this).html().replace(/\n/g,"\n</li><li>") +"\n</li></ol>");
      });

    $(window).scroll(function() {
      let top = document.scrollingElement.scrollTop;
      let navTop = $('#navbar').position().top;
      if (top > navTop) {
        if ($('.arrow').length<=0) {
          let i = $('<i class="arrow"></i>');
          i.click(scrollToTop);
          $('#container').after(i);
        }
        $('.arrow').show();
      } else {
        if ($('.arrow').length > 0) {
          $('.arrow').hide();
        }
      }
    });

    $('.arrow-show').click(function () {
      let community = $('.community');
      if (community.is(':hidden')) {
        community.fadeIn();
        community.css('display','inline-block');
        $('.arrow-show').css({
          "transform":"rotate(-90deg)",
          "transition":"transform 0.5s"
        });
      } else {
        community.fadeOut();
        $('.arrow-show').css({
          "transform":"rotate(90deg)",
          "transition":"transform 0.5s"
        });
      }
    })
});

