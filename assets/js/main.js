// Navbar hide on scroll starts
let prevScrollPos = window.pageYOffset;
const myNavbar = document.querySelector('.navbar');
// console.log(prevScrollPos);
window.addEventListener('scroll', () =>  {
    let currentScrollPos = window.pageYOffset,
        myButtonUp = document.querySelector('#page-up');
    // Add scroll active
    myNavbar.classList.toggle('scroll-active', window.scrollY > 0);
   /* if (prevScrollPos > currentScrollPos) {
        myNavbar.style.top = '0';
    } else {
        myNavbar.style.top = '-100px';
    }
    prevScrollPos = currentScrollPos;*/

    /*if (prevScrollPos >= 400) {
        myButtonUp.style.display = 'block';
        myButtonUp.onclick = function () {
            window.scrollTo(0, 0); // window.scrollTo(x, y);  
        }
    } else {
        myButtonUp.style.display = 'none';
    }*/
});

//function bgNav() {
let bgNav = () =>
	window.scrollY > 0 ? myNavbar.classList.add('scroll-active') : myNavbar.classList.remove('scroll-active');
bgNav();

// carousel delay
$('.carousel').carousel ({
    interval: 7000
});

// Nice scroll
/*$("body").niceScroll({
    cursorcolor:"var(--main-color)",
    cursorwidth:"10px",
    background: "var(--main-linear)",
    scrollspeed: 50,
    cursorborder: "1px solid #fff", // css definition for cursor border
    cursorborderradius: "2px", // border radius in pixel for cursor 
});*/

// Aos animation
AOS.init();

// nav bar 
$('ul.nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});

// Accordion 
const accordionItems = document.querySelectorAll('.questions .item');
accordionItems.forEach(item => {
    item.addEventListener('click', () => {
		if(item.classList.contains('accordion-active')) {
			item.classList.remove('accordion-active');
		} else {
			accordionItems.forEach(item => {
				item.classList.remove('accordion-active');
			});
			item.classList.add('accordion-active');
		}
    }); 
});
/*$(".faq").accordion({
    closeOthers: false
});*/

// Counter 
(function ($) {
	$.fn.countTo = function (options) {
		options = options || {};
		
		return $(this).each(function () {
			// set options for current element
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
			}, options);
			
			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;
			
			// references & variables that will change with each update
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};
			
			$self.data('countTo', data);
			
			// if an existing interval can be found, clear it first
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);
			
			// initialize the element with the starting value
			render(value);
			
			function updateTimer() {
				value += increment;
				loopCount++;
				
				render(value);
				
				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}
				
				if (loopCount >= loops) {
					// remove the interval
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;
					
					if (typeof(settings.onComplete) == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}
			
			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.html(formattedValue);
			}
		});
	};
	
	$.fn.countTo.defaults = {
		from: 0,               // the number the element should start at
		to: 0,                 // the number the element should end at
		speed: 1000,           // how long it should take to count between the target numbers
		refreshInterval: 100,  // how often the element should be updated
		decimals: 0,           // the number of decimal places to show
		formatter: formatter,  // handler for formatting the value before rendering
		onUpdate: null,        // callback method for every time the element is updated
		onComplete: null       // callback method for when the element finishes updating
	};
	
	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
}(jQuery));

jQuery(function ($) {
  // custom formatting example
  $('.count-number').data('countToOptions', {
	formatter: function (value, options) {
	  return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
	}
  });
  
  // start all the timers
  $('.timer').each(count);  
  
  function count(options) {
	var $this = $(this);
	options = $.extend({}, options || {}, $this.data('countToOptions') || {});
	$this.countTo(options);
  }
});