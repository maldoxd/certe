// Initialize app
var myApp = new Framework7();
 
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;
 
// Add view
var mainView = myApp.addView('.view-main', {
  // Because we want to use dynamic navbar, we need to enable it for this view:
  dynamicNavbar: true,
    // Enable Dom Cache so we can use all inline pages
    domCache: true
});
myApp.onPageInit('services', function (page) {
  // Do something here for "about" page
   var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters 
    loop: true,
    
    // If we need pagination
    pagination: '.swiper-pagination',
    
    // Navigation arrows
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    
    // And if we need scrollbar
    scrollbar: '.swiper-scrollbar',
  })        
})

myApp.onPageInit('about', function (page) {
  // Do something here for "about" page
  
		$$('#titleBook').on('click', function () {
		     mainView.router.loadPage('about.html');
		});

  
})
