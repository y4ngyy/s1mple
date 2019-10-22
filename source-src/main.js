import $ from 'jquery';
import hljs from 'highlight.js'
import './scss/main.scss';

hljs.initHighlightingOnLoad();

function setBanner() {
  let height = $(window).height();
  let about = $('#about');
  let top = height/2-about.height()/2;
  $('#banner #about').css({
    "top": top
  }).css("display","block");
}

function moveAbout(scrollTop) {
  let relativeHeight = $('#banner').height()/2+$('#about').height()/2;
  let about = $('#about');
  const right = 200;
  if (right-scrollTop/relativeHeight*(right+about.width()) <= 0) {
    about.fadeOut();
    return;
  } else {
    about.fadeIn();
  }
  about.css({
    "right": right - scrollTop / relativeHeight * (right + about.width()),
    transition: "right 0.5s"
  });

}

function scrollToTop() {
  let top = $('#navbar').position().top;
  window.scrollTo(0,top);
  $('.arrow').hide();
}

$(function () {
    setBanner();
    $("pre code").each(function(){
        $(this).html("<ol><li>" + $(this).html().replace(/\n/g,"\n</li><li>") +"\n</li></ol>");
      });

    $(window).scroll(function() {
      let top = document.scrollingElement.scrollTop;
      // let bannerHeight = $('#banner').height();
      moveAbout(top);
      let navTop = $('#navbar').position().top;
      if (top > navTop) {
        if ($('.arrow').length<=0) {
          console.log("insert");
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
      // if(top >= $('#navbar').offset().top) {
      //   $('#navbar').css({
      //     "position": "fixed",
      //     "top": 0,
      //     "transition": "position 0.5s"
      //   });
      // } else {
      //   $('#navbar').removeAttr('style');
      // }
    });

    $('.arrow-show').click(function () {
      let community = $('.community');
      if (community.is(':hidden')) {
        community.fadeIn();
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

