(function ($) {

  // masonry layout
  $(window).on('load', function () {
    (function () {
      $('.grid').masonry({
        columnWidth: '.grid-sizer',
        itemSelector: '.grid-item',
        percentPosition: true
      });
    })();
  });

  // Grand menu 
  //  Mobile menu
  (function () {
    function menu() {
      $('.nav-item__grand-menu-open a').on('click', function (e) {
        e.preventDefault();
        $('.wrapper').toggleClass('menu-open');
        $('.nav-item__grand-menu-open').toggleClass('nav-item_active');
        $('.grand-menu').toggleClass('grand-menu_open');
      })
      $('.grand-menu__close-icon a').on('click', function (e) {
        e.preventDefault();
        $('.wrapper').removeClass('menu-open');
        $('.nav-item__grand-menu-open').removeClass('nav-item_active');
        $('.grand-menu').removeClass('grand-menu_open');
      })
    }

    function hamburger() {
      var hamburgerIcon = $('.hamburger-icon');
      var drilldown = $('.drilldown');
      // var drilldownTrigger = $('.nav-item__grand-menu-open');
      // var drilldownBack = $('.drilldown .navigate-back');
      // var drilldownMain = $('.drilldown-main');
      // var drilldownSecond = $('.drilldown-second');

      // Hamburger Icon toggle
      $(hamburgerIcon).on('click', function () {
        $(this).toggleClass('open');
        $(drilldown).fadeToggle();
        $('.wrapper').toggleClass('hamburger-open');
      });

      // // Drilldown Menu
      // $(drilldownTrigger).on('click', function(){
      //   $(drilldownMain).addClass('drilldown-main_hide');
      //   $(drilldownSecond).removeClass('drilldown-second_hide');
      // });
      // $(drilldownBack).on('click', function(){
      //   $(drilldownMain).removeClass('drilldown-main_hide');
      //   $(drilldownSecond).addClass('drilldown-second_hide');
      // })
    }

    menu();
    if ($(window).outerWidth() > 991) {
      if ($('.parallax').length) {

        skrollr.init();
      }
      if ($('.wrapper').hasClass('hamburger-open')) {
        $('.wrapper').removeClass('hamburger-open');
        $('.drilldown').fadeOut();
        $('.hamburger-icon').removeClass('open');
      }
    } else {
      hamburger();
    }
    $(window).on('resize', function () {
      if ($(window).outerWidth() > 991) {
        if ($('.wrapper').hasClass('hamburger-open')) {
          $('.hamburger-icon').removeClass('open');
          $('.drilldown').fadeOut();
          $('.wrapper').removeClass('hamburger-open');
        }
      }
    })


  })();

  //lang menu
  (function () {
    $('.language__open-icon').on('click', function () {
      $('.language').fadeIn(150);
    });
    $('.language__close-icon').on('click', function () {
      $('.language').fadeOut(150);
    });
  })();

  // scroll top
  (function () {
    $('.navigate-top').on('click', function () {
      $("html, body").animate({
        scrollTop: 0
      }, "slow");
      return false;
    })
  })();

  // Categories show product sliders
  (function () {

    var arrow_left = '<img src="assets/img/icons/arrow-left.svg">';
    var arrow_right = '<img src="assets/img/icons/arrow-right.svg">';
    var arrow_black_left = '<img src="assets/img/icons/arrow-black-left.svg">';
    var arrow_black_right = '<img src="assets/img/icons/arrow-black-right.svg">';

    $('.product-show__gallery').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '.product-show__gallery-thumbs',
      adaptiveHeight: true,
      prevArrow: '<button type="button" class="slider-prev btn-style-none outline" alt="Go to previous slide">' + arrow_left + '</button>',
      nextArrow: '<button type="button" class="slider-next white btn-style-none outline" alt="Go to next slide">' + arrow_right + '</button>',
    });
    $('.product-show__gallery-thumbs').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.product-show__gallery',
      arrows: false,
      variableWidth: true,
      focusOnSelect: true,
    });

    $('.product-show__similar-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      prevArrow: '<button type="button" class="slider-prev btn-style-none outline" alt="Go to previous slide">' + arrow_black_left + '</button>',
      nextArrow: '<button type="button" class="slider-next white btn-style-none outline" alt="Go to next slide">' + arrow_black_right + '</button>',
      responsive: [{
        breakpoint: 575,
        settings: {
          centerMode: true,
          slidesToShow: 2,
        }
      }]
    });

  })();

  // Appends
  (function () {
    // Product show categories appends
    function appendCategoriesPhone() {
      var appendContainer = $('.product-show__append-wrapper');
      var appendToContainer = $('.product-show__append_phone');
      $(appendContainer).appendTo(appendToContainer);
    }

    function appendCategoriesDesktop() {
      var appendContainer = $('.product-show__append-wrapper');
      var appendToContainer = $('.product-show__append_desktop');
      $(appendContainer).appendTo(appendToContainer);
    }

    // Back to cart appends
    function appendBackPhone() {
      var appendContainer = $('.back-to-cart');
      var appendToContainer = $('.back-to-cart__phone-append');
      $(appendContainer).appendTo(appendToContainer);
    }

    function appendBackDesktop() {
      var appendContainer = $('.back-to-cart');
      var appendToContainer = $('.back-to-cart__desktop-append');
      $(appendContainer).appendTo(appendToContainer);
    }


    $(window).resize(function () {
      if ($(window).outerWidth() < 767) {
        appendCategoriesPhone();
        appendBackPhone();
      } else {
        appendCategoriesDesktop();
        appendBackDesktop();
      }
    })

    if ($(window).outerWidth() < 767) {
      appendCategoriesPhone();
      appendBackPhone();
    } else {
      appendCategoriesDesktop();
      appendBackDesktop();
    }
  })();


  // sticky element
  (function () {
    function sticky() {
      var $sticky = $('.sticky');
      var $stickyrStopper = $('.sticky-stopper');
      if ($sticky.length) { // make sure ".sticky" element exists
        var generalSidebarHeight = $sticky.innerHeight();
        var stickyTop = $sticky.offset().top;
        var stickOffset = 0;
        var stickyStopperPosition = $stickyrStopper.offset().top;
        var stopPoint = stickyStopperPosition - generalSidebarHeight - stickOffset;
        var diff = stopPoint + stickOffset;

        $(window).scroll(function () { // scroll event
          var windowTop = $(window).scrollTop(); // returns number

          if (stopPoint < windowTop) {
            $sticky.css({
              position: 'absolute',
              top: diff
            });
          } else if (stickyTop < windowTop + stickOffset) {
            $sticky.css({
              position: 'fixed',
              top: stickOffset
            });
          } else {
            $sticky.css({
              position: 'absolute',
              top: 'initial'
            });
          }
        });
      }
    }
    $(window).on('load', function () {
      sticky();
    });

    if ($(window).outerWidth() > 1200) {
      $('.cart__order-wrapper').addClass('sticky');
      $('.sticky-stopper_delete').addClass('sticky-stopper');
    } else {
      $('.cart__order-wrapper').removeClass('sticky');
      $('.sticky-stopper_delete').removeClass('sticky-stopper');
    }

    $(window).resize(function () {
      sticky();
      if ($(window).outerWidth() > 1200) {
        $('.cart__order-wrapper').addClass('sticky');
        $('.sticky-stopper_delete').addClass('sticky-stopper');
      } else {
        $('.cart__order-wrapper').removeClass('sticky');
        $('.sticky-stopper_delete').removeClass('sticky-stopper');
      }
    })

  })();

  // Input value clear
  (function () {
    var input = $('.cart__product-footer-field input');
    var button = $('.cart__product-footer-field button');
    $(button).on('click', function () {
      $(input).val('');
    })
  })();

  // Custom select
  (function () {
    var x, i, j, selElmnt, a, b, c;
    /*look for any elements with the class "custom-select":*/
    x = document.getElementsByClassName("custom-select-container");
    for (i = 0; i < x.length; i++) {
      selElmnt = x[i].getElementsByTagName("select")[0];
      /*for each element, create a new DIV that will act as the selected item:*/
      a = document.createElement("DIV");
      a.setAttribute("class", "select-selected");
      a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
      x[i].appendChild(a);
      /*for each element, create a new DIV that will contain the option list:*/
      b = document.createElement("DIV");
      b.setAttribute("class", "select-items select-hide");
      for (j = 1; j < selElmnt.length; j++) {
        /*for each option in the original select element,
        create a new DIV that will act as an option item:*/
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {
          /*when an item is clicked, update the original select box,
          and the selected item:*/
          var y, i, k, s, h;
          s = this.parentNode.parentNode.getElementsByTagName("select")[0];
          h = this.parentNode.previousSibling;
          for (i = 0; i < s.length; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
              s.selectedIndex = i;
              h.innerHTML = this.innerHTML;
              y = this.parentNode.getElementsByClassName("same-as-selected");
              for (k = 0; k < y.length; k++) {
                y[k].removeAttribute("class");
              }
              this.setAttribute("class", "same-as-selected");
              break;
            }
          }
          h.click();
        });
        b.appendChild(c);
      }
      x[i].appendChild(b);
      a.addEventListener("click", function (e) {
        /*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
      });
    }

    function closeAllSelect(elmnt) {
      /*a function that will close all select boxes in the document,
      except the current select box:*/
      var x, y, i, arrNo = [];
      x = document.getElementsByClassName("select-items");
      y = document.getElementsByClassName("select-selected");
      for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
          arrNo.push(i)
        } else {
          y[i].classList.remove("select-arrow-active");
        }
      }
      for (i = 0; i < x.length; i++) {
        x[i].classList.add("select-hide-list");
        if (arrNo.indexOf(i)) {
          x[i].classList.add("select-hide");
        }
      }
    }
    /*if the user clicks anywhere outside the select box,
    then close all select boxes:*/
    document.addEventListener("click", closeAllSelect);
  })();

  // Datepicker
  (function () {
    $('#date').datepicker({
      format: 'dd.mm.yyyy',
      startDate: '-3d',
      orientation: "bottom",
      autoclose: true
    });
    $('#date').datepicker("setDate", new Date())
  })();


  //Filter select Grand Menu
  (function () {
    var filterLink = $('.grand-menu__filter-body-item a'),
      filterImg = $('.grand-menu__filter-body-item-img'),
      filterColor = $('.grand-menu__filter-body-item-color');
    $(filterLink).on('click', function (e) {
      e.preventDefault();
      $(this).toggleClass('active');
    });
    $(filterImg).on('click', function (e) {
      e.preventDefault();
      $(this).addClass('grand-menu__filter-body-item-img_active')
        .siblings()
        .removeClass('grand-menu__filter-body-item-img_active');
    });
    $(filterColor).on('click', function (e) {
      e.preventDefault();
      $(this).addClass('grand-menu__filter-body-item-color_active')
        .siblings()
        .removeClass('grand-menu__filter-body-item-color_active');
    });
  })();

  //___________________/tabs/___________________//
  (function () {
    flag = true;
    $('.tabs__link').on('click', function (e) {
      e.preventDefault();

      var
        $this = $(this),
        item = $this.closest('.tabs__item'),
        container = $this.closest('.tabs'),
        content = container.find('.tabs__content-item')
      ndx = item.index(),
        reqItem = content.eq(ndx),
        activeItem = content.filter('.tabs__content-item_active'),
        duration = 600;

      if (flag) {
        flag = false
        item.addClass('nav-item_active')
          .siblings()
          .removeClass('nav-item_active');

        activeItem.fadeOut(duration, function () {
          reqItem.fadeIn(duration, function () {
            $(this).addClass('tabs__content-item_active')
              .siblings()
              .removeClass('tabs__content-item_active');
            flag = true;
          });
        });
      }
    });
  }());
})(jQuery);

mapboxgl.accessToken = 'pk.eyJ1IjoibW9udGVzcSIsImEiOiJjanhqaDdpazMwNXhnM29vN3hjbjNmN2dnIn0.QNzx7xy4-KNOeTeyoznoNw';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v10',
  center: [27.702352186520898, 62],
  zoom: 5.2,
});
map.scrollZoom.disable();
var geojson = {
  type: 'FeatureCollection',
  features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [24.10371227120379, 62.55478658261214]
      },
      properties: {
        title: 'ÄHTÄRI',
        description: 'K-Rauta Ähtäri' + '<br>' + 'Mäkelän Rauta Oy',
        address: '<span>Jokenkuja 4 </span>' + '<br>' + '<span>63700 ÄHTÄRI</span>'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [25.70233072883184, 62.60146453141701]
      },
      properties: {
        title: 'ÄÄNEKOSKI',
        description: 'K-Rauta Äänekoski' + '<br>' + 'Rautakumppani Oy',
        address: '<span>Rahastajantie 1</span>' + '<br>' + '<span>44100 ÄÄNEKOSKI</span>'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [30.12182072881967, 62.10213149000643]
      },
      properties: {
        title: 'KITEE',
        description: 'K-Rauta K-Maatalous Kitee' + '<br>' + 'Hurri Ky',
        address: '<span>Puhoksentie 3 </span>' + '<br>' + '<span>82500 KITEE</span>'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [24.9528299999547, 60.19006766678888]
      },
      properties: {
        title: 'HELSINKI',
        description: 'Alppi-Rauta Oy',
        address: '<span>Fleminginkatu 30</span>' + '<br>' + '<span>00510 HELSINKI</span>'
      }
    }
  ]
};


// add markers to map
geojson.features.forEach(function (marker) {
  var el = document.createElement('div');
  el.className = 'marker';

  new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({
        offset: 25
      })
      .setHTML('<h3>' + marker.properties.title + '</h3><h4>' + marker.properties.description + '</h4><p>' + marker.properties.address + '</p>'))
    .addTo(map);
});
$('.map__zoom-in').on('click', function () {
  map.zoomIn();
});
$('.map__zoom-out').on('click', function () {
  map.zoomOut();
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgkKSB7XHJcblxyXG4gIC8vIG1hc29ucnkgbGF5b3V0XHJcbiAgJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgKGZ1bmN0aW9uICgpIHtcclxuICAgICAgJCgnLmdyaWQnKS5tYXNvbnJ5KHtcclxuICAgICAgICBjb2x1bW5XaWR0aDogJy5ncmlkLXNpemVyJyxcclxuICAgICAgICBpdGVtU2VsZWN0b3I6ICcuZ3JpZC1pdGVtJyxcclxuICAgICAgICBwZXJjZW50UG9zaXRpb246IHRydWVcclxuICAgICAgfSk7XHJcbiAgICB9KSgpO1xyXG4gIH0pO1xyXG5cclxuICAvLyBHcmFuZCBtZW51IFxyXG4gIC8vICBNb2JpbGUgbWVudVxyXG4gIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBtZW51KCkge1xyXG4gICAgICAkKCcubmF2LWl0ZW1fX2dyYW5kLW1lbnUtb3BlbiBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCgnLndyYXBwZXInKS50b2dnbGVDbGFzcygnbWVudS1vcGVuJyk7XHJcbiAgICAgICAgJCgnLm5hdi1pdGVtX19ncmFuZC1tZW51LW9wZW4nKS50b2dnbGVDbGFzcygnbmF2LWl0ZW1fYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLmdyYW5kLW1lbnUnKS50b2dnbGVDbGFzcygnZ3JhbmQtbWVudV9vcGVuJyk7XHJcbiAgICAgIH0pXHJcbiAgICAgICQoJy5ncmFuZC1tZW51X19jbG9zZS1pY29uIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKCcud3JhcHBlcicpLnJlbW92ZUNsYXNzKCdtZW51LW9wZW4nKTtcclxuICAgICAgICAkKCcubmF2LWl0ZW1fX2dyYW5kLW1lbnUtb3BlbicpLnJlbW92ZUNsYXNzKCduYXYtaXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAkKCcuZ3JhbmQtbWVudScpLnJlbW92ZUNsYXNzKCdncmFuZC1tZW51X29wZW4nKTtcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW1idXJnZXIoKSB7XHJcbiAgICAgIHZhciBoYW1idXJnZXJJY29uID0gJCgnLmhhbWJ1cmdlci1pY29uJyk7XHJcbiAgICAgIHZhciBkcmlsbGRvd24gPSAkKCcuZHJpbGxkb3duJyk7XHJcbiAgICAgIC8vIHZhciBkcmlsbGRvd25UcmlnZ2VyID0gJCgnLm5hdi1pdGVtX19ncmFuZC1tZW51LW9wZW4nKTtcclxuICAgICAgLy8gdmFyIGRyaWxsZG93bkJhY2sgPSAkKCcuZHJpbGxkb3duIC5uYXZpZ2F0ZS1iYWNrJyk7XHJcbiAgICAgIC8vIHZhciBkcmlsbGRvd25NYWluID0gJCgnLmRyaWxsZG93bi1tYWluJyk7XHJcbiAgICAgIC8vIHZhciBkcmlsbGRvd25TZWNvbmQgPSAkKCcuZHJpbGxkb3duLXNlY29uZCcpO1xyXG5cclxuICAgICAgLy8gSGFtYnVyZ2VyIEljb24gdG9nZ2xlXHJcbiAgICAgICQoaGFtYnVyZ2VySWNvbikub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICAkKGRyaWxsZG93bikuZmFkZVRvZ2dsZSgpO1xyXG4gICAgICAgICQoJy53cmFwcGVyJykudG9nZ2xlQ2xhc3MoJ2hhbWJ1cmdlci1vcGVuJyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gLy8gRHJpbGxkb3duIE1lbnVcclxuICAgICAgLy8gJChkcmlsbGRvd25UcmlnZ2VyKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAvLyAgICQoZHJpbGxkb3duTWFpbikuYWRkQ2xhc3MoJ2RyaWxsZG93bi1tYWluX2hpZGUnKTtcclxuICAgICAgLy8gICAkKGRyaWxsZG93blNlY29uZCkucmVtb3ZlQ2xhc3MoJ2RyaWxsZG93bi1zZWNvbmRfaGlkZScpO1xyXG4gICAgICAvLyB9KTtcclxuICAgICAgLy8gJChkcmlsbGRvd25CYWNrKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAvLyAgICQoZHJpbGxkb3duTWFpbikucmVtb3ZlQ2xhc3MoJ2RyaWxsZG93bi1tYWluX2hpZGUnKTtcclxuICAgICAgLy8gICAkKGRyaWxsZG93blNlY29uZCkuYWRkQ2xhc3MoJ2RyaWxsZG93bi1zZWNvbmRfaGlkZScpO1xyXG4gICAgICAvLyB9KVxyXG4gICAgfVxyXG5cclxuICAgIG1lbnUoKTtcclxuICAgIGlmICgkKHdpbmRvdykub3V0ZXJXaWR0aCgpID4gOTkxKSB7XHJcbiAgICAgIGlmICgkKCcucGFyYWxsYXgnKS5sZW5ndGgpIHtcclxuXHJcbiAgICAgICAgc2tyb2xsci5pbml0KCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCQoJy53cmFwcGVyJykuaGFzQ2xhc3MoJ2hhbWJ1cmdlci1vcGVuJykpIHtcclxuICAgICAgICAkKCcud3JhcHBlcicpLnJlbW92ZUNsYXNzKCdoYW1idXJnZXItb3BlbicpO1xyXG4gICAgICAgICQoJy5kcmlsbGRvd24nKS5mYWRlT3V0KCk7XHJcbiAgICAgICAgJCgnLmhhbWJ1cmdlci1pY29uJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaGFtYnVyZ2VyKCk7XHJcbiAgICB9XHJcbiAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKCQod2luZG93KS5vdXRlcldpZHRoKCkgPiA5OTEpIHtcclxuICAgICAgICBpZiAoJCgnLndyYXBwZXInKS5oYXNDbGFzcygnaGFtYnVyZ2VyLW9wZW4nKSkge1xyXG4gICAgICAgICAgJCgnLmhhbWJ1cmdlci1pY29uJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICAgICQoJy5kcmlsbGRvd24nKS5mYWRlT3V0KCk7XHJcbiAgICAgICAgICAkKCcud3JhcHBlcicpLnJlbW92ZUNsYXNzKCdoYW1idXJnZXItb3BlbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcblxyXG4gIH0pKCk7XHJcblxyXG4gIC8vbGFuZyBtZW51XHJcbiAgKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJy5sYW5ndWFnZV9fb3Blbi1pY29uJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKCcubGFuZ3VhZ2UnKS5mYWRlSW4oMTUwKTtcclxuICAgIH0pO1xyXG4gICAgJCgnLmxhbmd1YWdlX19jbG9zZS1pY29uJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKCcubGFuZ3VhZ2UnKS5mYWRlT3V0KDE1MCk7XHJcbiAgICB9KTtcclxuICB9KSgpO1xyXG5cclxuICAvLyBzY3JvbGwgdG9wXHJcbiAgKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJy5uYXZpZ2F0ZS10b3AnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe1xyXG4gICAgICAgIHNjcm9sbFRvcDogMFxyXG4gICAgICB9LCBcInNsb3dcIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pXHJcbiAgfSkoKTtcclxuXHJcbiAgLy8gQ2F0ZWdvcmllcyBzaG93IHByb2R1Y3Qgc2xpZGVyc1xyXG4gIChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIGFycm93X2xlZnQgPSAnPGltZyBzcmM9XCJhc3NldHMvaW1nL2ljb25zL2Fycm93LWxlZnQuc3ZnXCI+JztcclxuICAgIHZhciBhcnJvd19yaWdodCA9ICc8aW1nIHNyYz1cImFzc2V0cy9pbWcvaWNvbnMvYXJyb3ctcmlnaHQuc3ZnXCI+JztcclxuICAgIHZhciBhcnJvd19ibGFja19sZWZ0ID0gJzxpbWcgc3JjPVwiYXNzZXRzL2ltZy9pY29ucy9hcnJvdy1ibGFjay1sZWZ0LnN2Z1wiPic7XHJcbiAgICB2YXIgYXJyb3dfYmxhY2tfcmlnaHQgPSAnPGltZyBzcmM9XCJhc3NldHMvaW1nL2ljb25zL2Fycm93LWJsYWNrLXJpZ2h0LnN2Z1wiPic7XHJcblxyXG4gICAgJCgnLnByb2R1Y3Qtc2hvd19fZ2FsbGVyeScpLnNsaWNrKHtcclxuICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICBmYWRlOiB0cnVlLFxyXG4gICAgICBhc05hdkZvcjogJy5wcm9kdWN0LXNob3dfX2dhbGxlcnktdGh1bWJzJyxcclxuICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXHJcbiAgICAgIHByZXZBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpZGVyLXByZXYgYnRuLXN0eWxlLW5vbmUgb3V0bGluZVwiIGFsdD1cIkdvIHRvIHByZXZpb3VzIHNsaWRlXCI+JyArIGFycm93X2xlZnQgKyAnPC9idXR0b24+JyxcclxuICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGlkZXItbmV4dCB3aGl0ZSBidG4tc3R5bGUtbm9uZSBvdXRsaW5lXCIgYWx0PVwiR28gdG8gbmV4dCBzbGlkZVwiPicgKyBhcnJvd19yaWdodCArICc8L2J1dHRvbj4nLFxyXG4gICAgfSk7XHJcbiAgICAkKCcucHJvZHVjdC1zaG93X19nYWxsZXJ5LXRodW1icycpLnNsaWNrKHtcclxuICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgYXNOYXZGb3I6ICcucHJvZHVjdC1zaG93X19nYWxsZXJ5JyxcclxuICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcclxuICAgICAgZm9jdXNPblNlbGVjdDogdHJ1ZSxcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5wcm9kdWN0LXNob3dfX3NpbWlsYXItc2xpZGVyJykuc2xpY2soe1xyXG4gICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWRlci1wcmV2IGJ0bi1zdHlsZS1ub25lIG91dGxpbmVcIiBhbHQ9XCJHbyB0byBwcmV2aW91cyBzbGlkZVwiPicgKyBhcnJvd19ibGFja19sZWZ0ICsgJzwvYnV0dG9uPicsXHJcbiAgICAgIG5leHRBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpZGVyLW5leHQgd2hpdGUgYnRuLXN0eWxlLW5vbmUgb3V0bGluZVwiIGFsdD1cIkdvIHRvIG5leHQgc2xpZGVcIj4nICsgYXJyb3dfYmxhY2tfcmlnaHQgKyAnPC9idXR0b24+JyxcclxuICAgICAgcmVzcG9uc2l2ZTogW3tcclxuICAgICAgICBicmVha3BvaW50OiA1NzUsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XVxyXG4gICAgfSk7XHJcblxyXG4gIH0pKCk7XHJcblxyXG4gIC8vIEFwcGVuZHNcclxuICAoZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gUHJvZHVjdCBzaG93IGNhdGVnb3JpZXMgYXBwZW5kc1xyXG4gICAgZnVuY3Rpb24gYXBwZW5kQ2F0ZWdvcmllc1Bob25lKCkge1xyXG4gICAgICB2YXIgYXBwZW5kQ29udGFpbmVyID0gJCgnLnByb2R1Y3Qtc2hvd19fYXBwZW5kLXdyYXBwZXInKTtcclxuICAgICAgdmFyIGFwcGVuZFRvQ29udGFpbmVyID0gJCgnLnByb2R1Y3Qtc2hvd19fYXBwZW5kX3Bob25lJyk7XHJcbiAgICAgICQoYXBwZW5kQ29udGFpbmVyKS5hcHBlbmRUbyhhcHBlbmRUb0NvbnRhaW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYXBwZW5kQ2F0ZWdvcmllc0Rlc2t0b3AoKSB7XHJcbiAgICAgIHZhciBhcHBlbmRDb250YWluZXIgPSAkKCcucHJvZHVjdC1zaG93X19hcHBlbmQtd3JhcHBlcicpO1xyXG4gICAgICB2YXIgYXBwZW5kVG9Db250YWluZXIgPSAkKCcucHJvZHVjdC1zaG93X19hcHBlbmRfZGVza3RvcCcpO1xyXG4gICAgICAkKGFwcGVuZENvbnRhaW5lcikuYXBwZW5kVG8oYXBwZW5kVG9Db250YWluZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEJhY2sgdG8gY2FydCBhcHBlbmRzXHJcbiAgICBmdW5jdGlvbiBhcHBlbmRCYWNrUGhvbmUoKSB7XHJcbiAgICAgIHZhciBhcHBlbmRDb250YWluZXIgPSAkKCcuYmFjay10by1jYXJ0Jyk7XHJcbiAgICAgIHZhciBhcHBlbmRUb0NvbnRhaW5lciA9ICQoJy5iYWNrLXRvLWNhcnRfX3Bob25lLWFwcGVuZCcpO1xyXG4gICAgICAkKGFwcGVuZENvbnRhaW5lcikuYXBwZW5kVG8oYXBwZW5kVG9Db250YWluZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFwcGVuZEJhY2tEZXNrdG9wKCkge1xyXG4gICAgICB2YXIgYXBwZW5kQ29udGFpbmVyID0gJCgnLmJhY2stdG8tY2FydCcpO1xyXG4gICAgICB2YXIgYXBwZW5kVG9Db250YWluZXIgPSAkKCcuYmFjay10by1jYXJ0X19kZXNrdG9wLWFwcGVuZCcpO1xyXG4gICAgICAkKGFwcGVuZENvbnRhaW5lcikuYXBwZW5kVG8oYXBwZW5kVG9Db250YWluZXIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKCQod2luZG93KS5vdXRlcldpZHRoKCkgPCA3NjcpIHtcclxuICAgICAgICBhcHBlbmRDYXRlZ29yaWVzUGhvbmUoKTtcclxuICAgICAgICBhcHBlbmRCYWNrUGhvbmUoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhcHBlbmRDYXRlZ29yaWVzRGVza3RvcCgpO1xyXG4gICAgICAgIGFwcGVuZEJhY2tEZXNrdG9wKCk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgaWYgKCQod2luZG93KS5vdXRlcldpZHRoKCkgPCA3NjcpIHtcclxuICAgICAgYXBwZW5kQ2F0ZWdvcmllc1Bob25lKCk7XHJcbiAgICAgIGFwcGVuZEJhY2tQaG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXBwZW5kQ2F0ZWdvcmllc0Rlc2t0b3AoKTtcclxuICAgICAgYXBwZW5kQmFja0Rlc2t0b3AoKTtcclxuICAgIH1cclxuICB9KSgpO1xyXG5cclxuXHJcbiAgLy8gc3RpY2t5IGVsZW1lbnRcclxuICAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gc3RpY2t5KCkge1xyXG4gICAgICB2YXIgJHN0aWNreSA9ICQoJy5zdGlja3knKTtcclxuICAgICAgdmFyICRzdGlja3lyU3RvcHBlciA9ICQoJy5zdGlja3ktc3RvcHBlcicpO1xyXG4gICAgICBpZiAoJHN0aWNreS5sZW5ndGgpIHsgLy8gbWFrZSBzdXJlIFwiLnN0aWNreVwiIGVsZW1lbnQgZXhpc3RzXHJcbiAgICAgICAgdmFyIGdlbmVyYWxTaWRlYmFySGVpZ2h0ID0gJHN0aWNreS5pbm5lckhlaWdodCgpO1xyXG4gICAgICAgIHZhciBzdGlja3lUb3AgPSAkc3RpY2t5Lm9mZnNldCgpLnRvcDtcclxuICAgICAgICB2YXIgc3RpY2tPZmZzZXQgPSAwO1xyXG4gICAgICAgIHZhciBzdGlja3lTdG9wcGVyUG9zaXRpb24gPSAkc3RpY2t5clN0b3BwZXIub2Zmc2V0KCkudG9wO1xyXG4gICAgICAgIHZhciBzdG9wUG9pbnQgPSBzdGlja3lTdG9wcGVyUG9zaXRpb24gLSBnZW5lcmFsU2lkZWJhckhlaWdodCAtIHN0aWNrT2Zmc2V0O1xyXG4gICAgICAgIHZhciBkaWZmID0gc3RvcFBvaW50ICsgc3RpY2tPZmZzZXQ7XHJcblxyXG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkgeyAvLyBzY3JvbGwgZXZlbnRcclxuICAgICAgICAgIHZhciB3aW5kb3dUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7IC8vIHJldHVybnMgbnVtYmVyXHJcblxyXG4gICAgICAgICAgaWYgKHN0b3BQb2ludCA8IHdpbmRvd1RvcCkge1xyXG4gICAgICAgICAgICAkc3RpY2t5LmNzcyh7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgICAgdG9wOiBkaWZmXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChzdGlja3lUb3AgPCB3aW5kb3dUb3AgKyBzdGlja09mZnNldCkge1xyXG4gICAgICAgICAgICAkc3RpY2t5LmNzcyh7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgICAgICAgICAgdG9wOiBzdGlja09mZnNldFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRzdGlja3kuY3NzKHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICB0b3A6ICdpbml0aWFsJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBzdGlja3koKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICgkKHdpbmRvdykub3V0ZXJXaWR0aCgpID4gMTIwMCkge1xyXG4gICAgICAkKCcuY2FydF9fb3JkZXItd3JhcHBlcicpLmFkZENsYXNzKCdzdGlja3knKTtcclxuICAgICAgJCgnLnN0aWNreS1zdG9wcGVyX2RlbGV0ZScpLmFkZENsYXNzKCdzdGlja3ktc3RvcHBlcicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnLmNhcnRfX29yZGVyLXdyYXBwZXInKS5yZW1vdmVDbGFzcygnc3RpY2t5Jyk7XHJcbiAgICAgICQoJy5zdGlja3ktc3RvcHBlcl9kZWxldGUnKS5yZW1vdmVDbGFzcygnc3RpY2t5LXN0b3BwZXInKTtcclxuICAgIH1cclxuXHJcbiAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uICgpIHtcclxuICAgICAgc3RpY2t5KCk7XHJcbiAgICAgIGlmICgkKHdpbmRvdykub3V0ZXJXaWR0aCgpID4gMTIwMCkge1xyXG4gICAgICAgICQoJy5jYXJ0X19vcmRlci13cmFwcGVyJykuYWRkQ2xhc3MoJ3N0aWNreScpO1xyXG4gICAgICAgICQoJy5zdGlja3ktc3RvcHBlcl9kZWxldGUnKS5hZGRDbGFzcygnc3RpY2t5LXN0b3BwZXInKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcuY2FydF9fb3JkZXItd3JhcHBlcicpLnJlbW92ZUNsYXNzKCdzdGlja3knKTtcclxuICAgICAgICAkKCcuc3RpY2t5LXN0b3BwZXJfZGVsZXRlJykucmVtb3ZlQ2xhc3MoJ3N0aWNreS1zdG9wcGVyJyk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gIH0pKCk7XHJcblxyXG4gIC8vIElucHV0IHZhbHVlIGNsZWFyXHJcbiAgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBpbnB1dCA9ICQoJy5jYXJ0X19wcm9kdWN0LWZvb3Rlci1maWVsZCBpbnB1dCcpO1xyXG4gICAgdmFyIGJ1dHRvbiA9ICQoJy5jYXJ0X19wcm9kdWN0LWZvb3Rlci1maWVsZCBidXR0b24nKTtcclxuICAgICQoYnV0dG9uKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoaW5wdXQpLnZhbCgnJyk7XHJcbiAgICB9KVxyXG4gIH0pKCk7XHJcblxyXG4gIC8vIEN1c3RvbSBzZWxlY3RcclxuICAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHgsIGksIGosIHNlbEVsbW50LCBhLCBiLCBjO1xyXG4gICAgLypsb29rIGZvciBhbnkgZWxlbWVudHMgd2l0aCB0aGUgY2xhc3MgXCJjdXN0b20tc2VsZWN0XCI6Ki9cclxuICAgIHggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY3VzdG9tLXNlbGVjdC1jb250YWluZXJcIik7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBzZWxFbG1udCA9IHhbaV0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzZWxlY3RcIilbMF07XHJcbiAgICAgIC8qZm9yIGVhY2ggZWxlbWVudCwgY3JlYXRlIGEgbmV3IERJViB0aGF0IHdpbGwgYWN0IGFzIHRoZSBzZWxlY3RlZCBpdGVtOiovXHJcbiAgICAgIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpO1xyXG4gICAgICBhLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2VsZWN0LXNlbGVjdGVkXCIpO1xyXG4gICAgICBhLmlubmVySFRNTCA9IHNlbEVsbW50Lm9wdGlvbnNbc2VsRWxtbnQuc2VsZWN0ZWRJbmRleF0uaW5uZXJIVE1MO1xyXG4gICAgICB4W2ldLmFwcGVuZENoaWxkKGEpO1xyXG4gICAgICAvKmZvciBlYWNoIGVsZW1lbnQsIGNyZWF0ZSBhIG5ldyBESVYgdGhhdCB3aWxsIGNvbnRhaW4gdGhlIG9wdGlvbiBsaXN0OiovXHJcbiAgICAgIGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpO1xyXG4gICAgICBiLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2VsZWN0LWl0ZW1zIHNlbGVjdC1oaWRlXCIpO1xyXG4gICAgICBmb3IgKGogPSAxOyBqIDwgc2VsRWxtbnQubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAvKmZvciBlYWNoIG9wdGlvbiBpbiB0aGUgb3JpZ2luYWwgc2VsZWN0IGVsZW1lbnQsXHJcbiAgICAgICAgY3JlYXRlIGEgbmV3IERJViB0aGF0IHdpbGwgYWN0IGFzIGFuIG9wdGlvbiBpdGVtOiovXHJcbiAgICAgICAgYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7XHJcbiAgICAgICAgYy5pbm5lckhUTUwgPSBzZWxFbG1udC5vcHRpb25zW2pdLmlubmVySFRNTDtcclxuICAgICAgICBjLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgLyp3aGVuIGFuIGl0ZW0gaXMgY2xpY2tlZCwgdXBkYXRlIHRoZSBvcmlnaW5hbCBzZWxlY3QgYm94LFxyXG4gICAgICAgICAgYW5kIHRoZSBzZWxlY3RlZCBpdGVtOiovXHJcbiAgICAgICAgICB2YXIgeSwgaSwgaywgcywgaDtcclxuICAgICAgICAgIHMgPSB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNlbGVjdFwiKVswXTtcclxuICAgICAgICAgIGggPSB0aGlzLnBhcmVudE5vZGUucHJldmlvdXNTaWJsaW5nO1xyXG4gICAgICAgICAgZm9yIChpID0gMDsgaSA8IHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHMub3B0aW9uc1tpXS5pbm5lckhUTUwgPT0gdGhpcy5pbm5lckhUTUwpIHtcclxuICAgICAgICAgICAgICBzLnNlbGVjdGVkSW5kZXggPSBpO1xyXG4gICAgICAgICAgICAgIGguaW5uZXJIVE1MID0gdGhpcy5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgICAgeSA9IHRoaXMucGFyZW50Tm9kZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2FtZS1hcy1zZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgeS5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgeVtrXS5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNhbWUtYXMtc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGguY2xpY2soKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBiLmFwcGVuZENoaWxkKGMpO1xyXG4gICAgICB9XHJcbiAgICAgIHhbaV0uYXBwZW5kQ2hpbGQoYik7XHJcbiAgICAgIGEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgLyp3aGVuIHRoZSBzZWxlY3QgYm94IGlzIGNsaWNrZWQsIGNsb3NlIGFueSBvdGhlciBzZWxlY3QgYm94ZXMsXHJcbiAgICAgICAgYW5kIG9wZW4vY2xvc2UgdGhlIGN1cnJlbnQgc2VsZWN0IGJveDoqL1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgY2xvc2VBbGxTZWxlY3QodGhpcyk7XHJcbiAgICAgICAgdGhpcy5uZXh0U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKFwic2VsZWN0LWhpZGVcIik7XHJcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKFwic2VsZWN0LWFycm93LWFjdGl2ZVwiKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xvc2VBbGxTZWxlY3QoZWxtbnQpIHtcclxuICAgICAgLyphIGZ1bmN0aW9uIHRoYXQgd2lsbCBjbG9zZSBhbGwgc2VsZWN0IGJveGVzIGluIHRoZSBkb2N1bWVudCxcclxuICAgICAgZXhjZXB0IHRoZSBjdXJyZW50IHNlbGVjdCBib3g6Ki9cclxuICAgICAgdmFyIHgsIHksIGksIGFyck5vID0gW107XHJcbiAgICAgIHggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2VsZWN0LWl0ZW1zXCIpO1xyXG4gICAgICB5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNlbGVjdC1zZWxlY3RlZFwiKTtcclxuICAgICAgZm9yIChpID0gMDsgaSA8IHkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoZWxtbnQgPT0geVtpXSkge1xyXG4gICAgICAgICAgYXJyTm8ucHVzaChpKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB5W2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3QtYXJyb3ctYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHhbaV0uY2xhc3NMaXN0LmFkZChcInNlbGVjdC1oaWRlLWxpc3RcIik7XHJcbiAgICAgICAgaWYgKGFyck5vLmluZGV4T2YoaSkpIHtcclxuICAgICAgICAgIHhbaV0uY2xhc3NMaXN0LmFkZChcInNlbGVjdC1oaWRlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyppZiB0aGUgdXNlciBjbGlja3MgYW55d2hlcmUgb3V0c2lkZSB0aGUgc2VsZWN0IGJveCxcclxuICAgIHRoZW4gY2xvc2UgYWxsIHNlbGVjdCBib3hlczoqL1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlQWxsU2VsZWN0KTtcclxuICB9KSgpO1xyXG5cclxuICAvLyBEYXRlcGlja2VyXHJcbiAgKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJyNkYXRlJykuZGF0ZXBpY2tlcih7XHJcbiAgICAgIGZvcm1hdDogJ2RkLm1tLnl5eXknLFxyXG4gICAgICBzdGFydERhdGU6ICctM2QnLFxyXG4gICAgICBvcmllbnRhdGlvbjogXCJib3R0b21cIixcclxuICAgICAgYXV0b2Nsb3NlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgICQoJyNkYXRlJykuZGF0ZXBpY2tlcihcInNldERhdGVcIiwgbmV3IERhdGUoKSlcclxuICB9KSgpO1xyXG5cclxuXHJcbiAgLy9GaWx0ZXIgc2VsZWN0IEdyYW5kIE1lbnVcclxuICAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGZpbHRlckxpbmsgPSAkKCcuZ3JhbmQtbWVudV9fZmlsdGVyLWJvZHktaXRlbSBhJyksXHJcbiAgICAgIGZpbHRlckltZyA9ICQoJy5ncmFuZC1tZW51X19maWx0ZXItYm9keS1pdGVtLWltZycpLFxyXG4gICAgICBmaWx0ZXJDb2xvciA9ICQoJy5ncmFuZC1tZW51X19maWx0ZXItYm9keS1pdGVtLWNvbG9yJyk7XHJcbiAgICAkKGZpbHRlckxpbmspLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICAgICQoZmlsdGVySW1nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2dyYW5kLW1lbnVfX2ZpbHRlci1ib2R5LWl0ZW0taW1nX2FjdGl2ZScpXHJcbiAgICAgICAgLnNpYmxpbmdzKClcclxuICAgICAgICAucmVtb3ZlQ2xhc3MoJ2dyYW5kLW1lbnVfX2ZpbHRlci1ib2R5LWl0ZW0taW1nX2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcbiAgICAkKGZpbHRlckNvbG9yKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2dyYW5kLW1lbnVfX2ZpbHRlci1ib2R5LWl0ZW0tY29sb3JfYWN0aXZlJylcclxuICAgICAgICAuc2libGluZ3MoKVxyXG4gICAgICAgIC5yZW1vdmVDbGFzcygnZ3JhbmQtbWVudV9fZmlsdGVyLWJvZHktaXRlbS1jb2xvcl9hY3RpdmUnKTtcclxuICAgIH0pO1xyXG4gIH0pKCk7XHJcblxyXG4gIC8vX19fX19fX19fX19fX19fX19fXy90YWJzL19fX19fX19fX19fX19fX19fX18vL1xyXG4gIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmbGFnID0gdHJ1ZTtcclxuICAgICQoJy50YWJzX19saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgdmFyXHJcbiAgICAgICAgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgIGl0ZW0gPSAkdGhpcy5jbG9zZXN0KCcudGFic19faXRlbScpLFxyXG4gICAgICAgIGNvbnRhaW5lciA9ICR0aGlzLmNsb3Nlc3QoJy50YWJzJyksXHJcbiAgICAgICAgY29udGVudCA9IGNvbnRhaW5lci5maW5kKCcudGFic19fY29udGVudC1pdGVtJylcclxuICAgICAgbmR4ID0gaXRlbS5pbmRleCgpLFxyXG4gICAgICAgIHJlcUl0ZW0gPSBjb250ZW50LmVxKG5keCksXHJcbiAgICAgICAgYWN0aXZlSXRlbSA9IGNvbnRlbnQuZmlsdGVyKCcudGFic19fY29udGVudC1pdGVtX2FjdGl2ZScpLFxyXG4gICAgICAgIGR1cmF0aW9uID0gNjAwO1xyXG5cclxuICAgICAgaWYgKGZsYWcpIHtcclxuICAgICAgICBmbGFnID0gZmFsc2VcclxuICAgICAgICBpdGVtLmFkZENsYXNzKCduYXYtaXRlbV9hY3RpdmUnKVxyXG4gICAgICAgICAgLnNpYmxpbmdzKClcclxuICAgICAgICAgIC5yZW1vdmVDbGFzcygnbmF2LWl0ZW1fYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIGFjdGl2ZUl0ZW0uZmFkZU91dChkdXJhdGlvbiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgcmVxSXRlbS5mYWRlSW4oZHVyYXRpb24sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygndGFic19fY29udGVudC1pdGVtX2FjdGl2ZScpXHJcbiAgICAgICAgICAgICAgLnNpYmxpbmdzKClcclxuICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3RhYnNfX2NvbnRlbnQtaXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSgpKTtcclxufSkoalF1ZXJ5KTtcclxuXHJcbm1hcGJveGdsLmFjY2Vzc1Rva2VuID0gJ3BrLmV5SjFJam9pYlc5dWRHVnpjU0lzSW1FaU9pSmphbmhxYURkcGF6TXdOWGhuTTI5dk4zaGpiak5tTjJkbkluMC5RTnp4N3h5NC1LTk9lVGV5b3pub053JztcclxudmFyIG1hcCA9IG5ldyBtYXBib3hnbC5NYXAoe1xyXG4gIGNvbnRhaW5lcjogJ21hcCcsXHJcbiAgc3R5bGU6ICdtYXBib3g6Ly9zdHlsZXMvbWFwYm94L2RhcmstdjEwJyxcclxuICBjZW50ZXI6IFsyNy43MDIzNTIxODY1MjA4OTgsIDYyXSxcclxuICB6b29tOiA1LjIsXHJcbn0pO1xyXG5tYXAuc2Nyb2xsWm9vbS5kaXNhYmxlKCk7XHJcbnZhciBnZW9qc29uID0ge1xyXG4gIHR5cGU6ICdGZWF0dXJlQ29sbGVjdGlvbicsXHJcbiAgZmVhdHVyZXM6IFt7XHJcbiAgICAgIHR5cGU6ICdGZWF0dXJlJyxcclxuICAgICAgZ2VvbWV0cnk6IHtcclxuICAgICAgICB0eXBlOiAnUG9pbnQnLFxyXG4gICAgICAgIGNvb3JkaW5hdGVzOiBbMjQuMTAzNzEyMjcxMjAzNzksIDYyLjU1NDc4NjU4MjYxMjE0XVxyXG4gICAgICB9LFxyXG4gICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgdGl0bGU6ICfDhEhUw4RSSScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdLLVJhdXRhIMOEaHTDpHJpJyArICc8YnI+JyArICdNw6RrZWzDpG4gUmF1dGEgT3knLFxyXG4gICAgICAgIGFkZHJlc3M6ICc8c3Bhbj5Kb2tlbmt1amEgNCA8L3NwYW4+JyArICc8YnI+JyArICc8c3Bhbj42MzcwMCDDhEhUw4RSSTwvc3Bhbj4nXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHR5cGU6ICdGZWF0dXJlJyxcclxuICAgICAgZ2VvbWV0cnk6IHtcclxuICAgICAgICB0eXBlOiAnUG9pbnQnLFxyXG4gICAgICAgIGNvb3JkaW5hdGVzOiBbMjUuNzAyMzMwNzI4ODMxODQsIDYyLjYwMTQ2NDUzMTQxNzAxXVxyXG4gICAgICB9LFxyXG4gICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgdGl0bGU6ICfDhMOETkVLT1NLSScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdLLVJhdXRhIMOEw6RuZWtvc2tpJyArICc8YnI+JyArICdSYXV0YWt1bXBwYW5pIE95JyxcclxuICAgICAgICBhZGRyZXNzOiAnPHNwYW4+UmFoYXN0YWphbnRpZSAxPC9zcGFuPicgKyAnPGJyPicgKyAnPHNwYW4+NDQxMDAgw4TDhE5FS09TS0k8L3NwYW4+J1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0eXBlOiAnRmVhdHVyZScsXHJcbiAgICAgIGdlb21ldHJ5OiB7XHJcbiAgICAgICAgdHlwZTogJ1BvaW50JyxcclxuICAgICAgICBjb29yZGluYXRlczogWzMwLjEyMTgyMDcyODgxOTY3LCA2Mi4xMDIxMzE0OTAwMDY0M11cclxuICAgICAgfSxcclxuICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHRpdGxlOiAnS0lURUUnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnSy1SYXV0YSBLLU1hYXRhbG91cyBLaXRlZScgKyAnPGJyPicgKyAnSHVycmkgS3knLFxyXG4gICAgICAgIGFkZHJlc3M6ICc8c3Bhbj5QdWhva3NlbnRpZSAzIDwvc3Bhbj4nICsgJzxicj4nICsgJzxzcGFuPjgyNTAwIEtJVEVFPC9zcGFuPidcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdHlwZTogJ0ZlYXR1cmUnLFxyXG4gICAgICBnZW9tZXRyeToge1xyXG4gICAgICAgIHR5cGU6ICdQb2ludCcsXHJcbiAgICAgICAgY29vcmRpbmF0ZXM6IFsyNC45NTI4Mjk5OTk5NTQ3LCA2MC4xOTAwNjc2NjY3ODg4OF1cclxuICAgICAgfSxcclxuICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHRpdGxlOiAnSEVMU0lOS0knLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQWxwcGktUmF1dGEgT3knLFxyXG4gICAgICAgIGFkZHJlc3M6ICc8c3Bhbj5GbGVtaW5naW5rYXR1IDMwPC9zcGFuPicgKyAnPGJyPicgKyAnPHNwYW4+MDA1MTAgSEVMU0lOS0k8L3NwYW4+J1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXVxyXG59O1xyXG5cclxuXHJcbi8vIGFkZCBtYXJrZXJzIHRvIG1hcFxyXG5nZW9qc29uLmZlYXR1cmVzLmZvckVhY2goZnVuY3Rpb24gKG1hcmtlcikge1xyXG4gIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGVsLmNsYXNzTmFtZSA9ICdtYXJrZXInO1xyXG5cclxuICBuZXcgbWFwYm94Z2wuTWFya2VyKGVsKVxyXG4gICAgLnNldExuZ0xhdChtYXJrZXIuZ2VvbWV0cnkuY29vcmRpbmF0ZXMpXHJcbiAgICAuc2V0UG9wdXAobmV3IG1hcGJveGdsLlBvcHVwKHtcclxuICAgICAgICBvZmZzZXQ6IDI1XHJcbiAgICAgIH0pXHJcbiAgICAgIC5zZXRIVE1MKCc8aDM+JyArIG1hcmtlci5wcm9wZXJ0aWVzLnRpdGxlICsgJzwvaDM+PGg0PicgKyBtYXJrZXIucHJvcGVydGllcy5kZXNjcmlwdGlvbiArICc8L2g0PjxwPicgKyBtYXJrZXIucHJvcGVydGllcy5hZGRyZXNzICsgJzwvcD4nKSlcclxuICAgIC5hZGRUbyhtYXApO1xyXG59KTtcclxuJCgnLm1hcF9fem9vbS1pbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICBtYXAuem9vbUluKCk7XHJcbn0pO1xyXG4kKCcubWFwX196b29tLW91dCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICBtYXAuem9vbU91dCgpO1xyXG59KTsiXX0=
