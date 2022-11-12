$(document).ready(function() {
    // MODAL
    var modalText = {
      discover: {
        title: 'LunarCinox Tech',
        tag: 'HOME FOR GADGETS.',
        detail:
          'This is just a random web project to make up my portfolio,do not worry it is being setup,it is a pure work in progress.',
        link: 'https://www.Lunarcinox.fullstackwebclass.com.ng/'
      },
      ordering: {
        title: 'LunarCinox Services',
        tag: 'RENDER SERVICES.',
        detail:
          'This is just a random web project to make up my portfolio,do not worry it is being setup,it is a pure work in progress.',
        link: 'https://www.Lunarcinox.fullstackwebclass.com.ng/'
      },
      newrelic: {
        title: 'Pimallmetro.com',
        tag: 'AN ONLINE E-COMMERCE.',
        detail:
          'Here we sell goods and render services,but the most special thing about us is that we are exceptional and accept digital currencies like pi.',
        link: 'http://www.pimallmetro.com'
      },
      roambi: {
        title: 'IQ',
        tag: 'TESTING YOUR IQ.',
        detail:
          'This is just a write up to using to test my project.A simple website that was on wordpress written in PHP.',
        link: 'http://www.bighost.fullstackwebclass.com.ng/'
      },
      walker: {
        title: 'Metro Logistics',
        tag: 'FAST TRANSPORTATION.',
        detail:
          'Metro Logistics offers goal management, reliable services, and team competitions to companies for internal use. A React and Javascript companion site for the logistics App. Features visual metrics and gamified progression system.'
      },
      powur: {
        title: 'LunarCinox',
        tag: 'CONSUMER POWERED MARKETING.',
        detail:
          'LUNAR is a marketing platform for lead generation, recruitment, and team building. Built with DJANGO on Rails and PHP and REACTJS. Makes use of REACT-material for front-end visuals. Features complex user tree heiarchy and commission system.',
        link: 'http://www.lunarcinox.fullstackwebclass.com.ng/'
      },
      mystand: {
        title: 'Intelectual',
        tag: 'HELPING IMPROVE KNOWLEDGE.',
        detail:
          'Intelectual is a general platform, media sharing website, that has you donating actions instead of money out of your pocket. Single page App built with Node.js on Sails and ReactJS. Features social media sharing and large scale data.'
      },
      never: {
        title: 'Open Up',
        tag: 'SHARE HOW YOU FEEL.',
        detail:
          'A pure javascript app where you connect with people who share same ideas and same issues.'
      },
      themall: {
        title: 'Turning Point',
        tag: 'REGROUP.',
        detail:
          'Turning point is a place specially made for singles to meet there soul mates. Built with Node.js and Handlebars. Features the ability to handle millions of data while using the site.'
      }
    };
  
    $('#gallery .button').on('click', function() {
      fillModal(this.id);
      $('.modal-wrap').addClass('visible');
    });
  
    $('.close').on('click', function() {
      $('.modal-wrap, #modal .button').removeClass('visible');
    });
  
    $('.mask').on('click', function() {
      $('.modal-wrap, #modal .button').removeClass('visible');
    });
  
    var carousel = $('#carousel'),
      slideWidth = 700,
      threshold = slideWidth / 3,
      dragStart,
      dragEnd;
  
    setDimensions();
  
    $('#next').click(function() {
      shiftSlide(-1);
    });
    $('#prev').click(function() {
      shiftSlide(1);
    });
  
    carousel.on('mousedown', function() {
      if (carousel.hasClass('transition')) return;
      dragStart = event.pageX;
      $(this).on('mousemove', function() {
        dragEnd = event.pageX;
        $(this).css('transform', 'translateX(' + dragPos() + 'px)');
      });
      $(document).on('mouseup', function() {
        if (dragPos() > threshold) {
          return shiftSlide(1);
        }
        if (dragPos() < -threshold) {
          return shiftSlide(-1);
        }
        shiftSlide(0);
      });
    });
  
    function setDimensions() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        slideWidth = $(window).innerWidth();
      }
      $('.carousel-wrap, .slide').css('width', slideWidth);
      $('.modal').css('max-width', slideWidth);
      $('#carousel').css('left', slideWidth * -1);
    }
  
    function dragPos() {
      return dragEnd - dragStart;
    }
  
    function shiftSlide(direction) {
      if (carousel.hasClass('transition')) return;
      dragEnd = dragStart;
      $(document).off('mouseup');
      carousel
        .off('mousemove')
        .addClass('transition')
        .css('transform', 'translateX(' + direction * slideWidth + 'px)');
      setTimeout(function() {
        if (direction === 1) {
          $('.slide:first').before($('.slide:last'));
        } else if (direction === -1) {
          $('.slide:last').after($('.slide:first'));
        }
        carousel.removeClass('transition');
        carousel.css('transform', 'translateX(0px)');
      }, 700);
    }
  
    function fillModal(id) {
      $('#modal .title').text(modalText[id].title);
      $('#modal .detail').text(modalText[id].detail);
      $('#modal .tag').text(modalText[id].tag);
      if (modalText[id].link)
        $('#modal .button')
          .addClass('visible')
          .parent()
          .attr('href', modalText[id].link);
  
      $.each($('#modal li'), function(index, value) {
        $(this).text(modalText[id].bullets[index]);
      });
      $.each($('#modal .slide'), function(index, value) {
        $(this).css({
          background:
            "url('images/ssl/" + id + '-' + index + ".jpg') center center/cover",
          backgroundSize: 'cover'
        });
      });
    }
  });