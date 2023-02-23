
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
}


//  materail input

$.fn.materializeInputs = function(selectors) {

    // default param with backwards compatibility
    if (typeof(selectors)==='undefined') selectors = "input, textarea, select";

    // attribute function
    function setInputValueAttr(element) {
        element.setAttribute('value', element.value);
    }

    // set value attribute at load
    this.find(selectors).each(function () {
        setInputValueAttr(this);
    });

    // on keyup and change
    this.on("keyup change", selectors, function() {
        setInputValueAttr(this);
    });
};

/**
 * Material Inputs
 */
$('body').materializeInputs();

 
var minVal = 1, maxVal = 20; // Set Max and Min values
// Increase product quantity on cart page
$(".increaseQty").on('click', function(){
		var $parentElm = $(this).parents(".qtySelector");
		$(this).addClass("clicked");
		setTimeout(function(){
			$(".clicked").removeClass("clicked");
		},100);
		var value = $parentElm.find(".qtyValue").val();
		if (value < maxVal) {
			value++;
		}
		$parentElm.find(".qtyValue").val(value);
});
// Decrease product quantity on cart page
$(".decreaseQty").on('click', function(){
		var $parentElm = $(this).parents(".qtySelector");
		$(this).addClass("clicked");
		setTimeout(function(){
			$(".clicked").removeClass("clicked");
		},100);
		var value = $parentElm.find(".qtyValue").val();
		if (value > 1) {
			value--;
		}
		$parentElm.find(".qtyValue").val(value);
	});


    // date picker

    $(function () {
        $("#datepicker").datepicker({ 
              autoclose: true, 
              todayHighlight: true
        }).datepicker('update', new Date());
      });




      // tab
      $(document).ready(function(){
        $('.appu li a').click(function(){
            $('.appu li a').removeClass('activelinkx');
            $(this).addClass('activelinkx');
            var tagid = $(this).data('tag');
            $('.list').addClass('hide');
            $('#'+tagid).removeClass('hide');
        });
    });

      // Tab END
      


      AOS.init({
        duration: 1200,
      })

   // For more information, see greensock.com/docs/v3/Plugins/ScrollTrigger
   var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};


// search

// let inputBox = document.querySelector('.input-box'),
//   searchIcon = document.querySelector('.search'),
//   closeIcon = document.querySelector('.close-icon');

// // ---- ---- Open Input ---- ---- //
// searchIcon.addEventListener('click', () => {
//   inputBox.classList.add('open');
// });
// // ---- ---- Close Input ---- ---- //
// closeIcon.addEventListener('click', () => {
//   inputBox.classList.remove('open');
// });


// scroll

// accordion


$(function() {
  $('.acc__title').click(function(j) {
    
    var dropDown = $(this).closest('.acc__card').find('.acc__panel');
    $(this).closest('.acc').find('.acc__panel').not(dropDown).slideUp();
    
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).closest('.acc').find('.acc__title.active').removeClass('active');
      $(this).addClass('active');
    }
    
    dropDown.stop(false, true).slideToggle();
    j.preventDefault();
  });
});

// END

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 15,
  slidesPerView: 1.2,
  freeMode: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

});



(function ($) {
	"use strict";
  
	// Get Device width
	let device_width = window.innerWidth;
  
	/////////////////////////////////////////////////////
	// 20. Register GSAP
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);
	/////////////////////////////////////////////////////
  


  
  
	if (device_width > 100) {
  
	  /////////////////////////////////////////////////////
	  // 24. Portfolio 5 Animation 
	  let skewSetter = gsap.quickTo( "skewY"),
		clamp = gsap.utils.clamp(-15, 15);
	  const smoother = ScrollSmoother.create({
		smooth: 1.35,
		effects: device_width < 1025 ? false : true,
		smoothTouch: false,
		normalizeScroll: false,
		ignoreMobileResize: true,
		onUpdate: self => skewSetter(clamp(self.getVelocity() / -80)),
		onStop: () => skewSetter(0)
	  });
  

	}
  
  
 
  

  
  
  
  })(jQuery);