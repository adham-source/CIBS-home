// Navbar hide on scroll starts
let prevScrollPos = window.pageYOffset;
// console.log(prevScrollPos);
window.addEventListener('scroll', () =>  {
    let currentScrollPos = window.pageYOffset,
        myNavbar = document.querySelector('.navbar'),
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

