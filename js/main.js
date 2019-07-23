
var navAnchor = document.getElementById('nav-anchor'),
    nav = document.getElementById('nav-container');

navAnchor.addEventListener('click', function(e) {
    nav.className = nav.className? '' : 'show-nav';
    e.preventDefault();
});

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top - 72
  }, 500);
});

$('#control-right').on('click', function (event) {
  $('.home-highlights-wrapper').addClass('right');
});

$('#control-left').on('click', function (event) {
  $('.home-highlights-wrapper').removeClass('right');
});

var fixmeTop = $('.nav-main').offset().top;
$(window).scroll(function() {
  var currentScroll = $(window).scrollTop();
  if (currentScroll >= fixmeTop + 64) {
    $('#nav-container').addClass( 'fixed-nav' );
    $('.nav-logo').addClass( 'fixed-nav' );
    $('.nav-logo-text').addClass( 'fixed-nav' );
    $('.nav-main').addClass( 'fixed-nav' );
  } else {
    $('#nav-container').removeClass( 'fixed-nav' );
    $('.nav-logo').removeClass( 'fixed-nav' );
    $('.nav-logo-text').removeClass( 'fixed-nav' );
    $('.nav-main').removeClass( 'fixed-nav' );
  }
});

$(".search-link").on("click",function () {
  $("#search-overlay").addClass('search-show');
  $( "#search-input" ).focus();
  $('body').addClass('search-on');
});

$(".search-close").on("click", function() {
  $("#search-overlay").removeClass('search-show');
  $('body').removeClass('search-on');
});

//esc key
$('body').on('keyup', function(e) {
  if ($('body').hasClass('search-on') && e.keyCode == 27) {
          $(".search-overlay").hide();
          $('body').removeClass('search-on');
        }
});

// util functions for frontpage stats
function formatedData(x){
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


const triggers = Array.from(document.querySelectorAll('[data-toggle="collapse"]'));

window.addEventListener('click', (ev) => {
  const elm = ev.target;
  if (triggers.includes(elm)) {
    const selector = elm.getAttribute('data-target');
    collapse(selector, 'toggle');
  }
}, false);


const fnmap = {
  'toggle': 'toggle',
  'show': 'add',
  'hide': 'remove'
};
const collapse = (selector, cmd) => {
  const targets = Array.from(document.querySelectorAll(selector));
  targets.forEach(target => {
    target.classList[fnmap[cmd]]('show');
  });
}

// Program day switching

var selectInput = document.querySelectorAll('.choose'),
    panels = document.querySelectorAll('.program-content'),
    currentSelect = 'sept-19',
    i;

function clearShow() {
  for ( i = 0; i < panels.length; i++ ) {
    panels[i].classList.remove('show');
  }
}

function addShow(showThis) {
  var el = document.getElementsByClassName(showThis);
  for ( i = 0; i < el.length; i++ ) {
     el[i].classList.add('show');
   }
}

function vUpdate(selection) {
  currentSelect = selection.id;

  clearShow();
  addShow(currentSelect);
}

selectInput.forEach(function(selection) {
  selection.addEventListener('click', function() {
    vUpdate(selection);
  });
});

addShow(currentSelect);
