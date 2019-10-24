import $ from 'jquery';
import hljs from 'highlight.js';
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
    // 全局变量
    var global = {};
    $(window).scroll(function() {
      let top = document.scrollingElement.scrollTop;
      let navTop = $("#navbar").offset().top;
      let toc = $('#toc-div');
      if (toc.length > 0) {
        if (global['tocTop'] === undefined) {
          global['tocTop'] = toc.offset().top;
          console.log(global);
        }
        if (top > global.tocTop) {
          toc.css({
            'position':'fixed',
            'top': '10px',
            'width': toc.width()
          });
        } else {
          toc.css('position','static');
        }
      }

      if (top > navTop) {
        let arrow = $('.arrow');
        if (arrow.length<=0) {
          let i = $('<i class="arrow"></i>');
          i.click(scrollToTop);
          $('#container').after(i);
        }
        arrow.show();
      } else {
        let arrow = $('.arrow');
        if (arrow.length > 0) {
          arrow.hide();
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

