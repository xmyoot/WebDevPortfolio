(function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  }
  // smartresize
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');

var $ = jQuery;


(function(){


  ///////////////////////////////
  // Set Home Slideshow Height
  ///////////////////////////////

  function setHomeBannerHeight() {
    var windowHeight = jQuery(window).height();
    jQuery('#header').height(windowHeight);
  }

  ///////////////////////////////
  // Center Home Slideshow Text
  ///////////////////////////////

  function centerHomeBannerText() {
      var bannerText = jQuery('#header > .center');
      var bannerTextTop = (jQuery('#header').actual('height')/2) - (jQuery('#header > .center').actual('height')/2) - 40;
      bannerText.css('padding-top', bannerTextTop+'px');
      bannerText.show();
  }

  function setHeaderBackground() {
    var scrollTop = jQuery(window).scrollTop(); // our current vertical position from the top

    if (scrollTop > 300 || jQuery(window).width() < 700) {
      jQuery('#header .top').addClass('solid');
    } else {
      jQuery('#header .top').removeClass('solid');
    }
  }




  ///////////////////////////////
  // Initialize
  ///////////////////////////////

  jQuery.noConflict();
  setHomeBannerHeight();
  centerHomeBannerText();

  //Resize events
  jQuery(window).smartresize(function(){
    setHomeBannerHeight();
    centerHomeBannerText();
  });

})();


  ///////////////////////////////
  // Smooth Scroll
  ///////////////////////////////


smoothScroll.init();




  ///////////////////////////////
  // Animate Css
  ///////////////////////////////
var $ = jQuery;

function animationHover(element, animation){
    element = $(element);
    element.hover(
        function() {
            element.addClass('animated ' + animation);
        },
        function(){
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 2000);
        });
}

$(document).ready(function(){
    $('#scrollToContent').each(function() {
        animationHover(this, 'pulse');
    });
});



  ///////////////////////////////
  // Header Fixed
  ///////////////////////////////



var menu = $('#navigation');
var origOffsetY = menu.offset().top;

function scroll() {
   if ($(window).scrollTop() >= origOffsetY) {
       $('#navigation').addClass('nav-wrap');
       $('#services').addClass('exp');
       //$('.content').addClass('menu-padding');
   } else {
       $('#navigation').removeClass('nav-wrap');
       $('#services').removeClass('exp');
       //$('.content').removeClass('menu-padding');
   }



}

 document.onscroll = scroll;


  ///////////////////////////////
  // Testimonial Slide
  ///////////////////////////////

 $(document).ready(function() {

  $("#testimonial-container").owlCarousel({

      navigation : false, // Show next and prev buttons
      slideSpeed : 700,
      paginationSpeed : 400,
      singleItem:true,
  });

});


  ///////////////////////////////
  // google map
  ///////////////////////////////
/*
function initialize()
{
var mapProp = {
  center:new google.maps.LatLng(34.9592,116.4194),
  zoom:5,
  mapTypeId:google.maps.MapTypeId.ROADMAP,
  disableDefaultUI: true,
  scrollwheel: false
  };
var map=new google.maps.Map(document.getElementById("googleMap")
  ,mapProp);
}

google.maps.event.addDomListener(window, 'load', initialize);

*/

  ///////////////////////////////
  // skill tree
  ///////////////////////////////
  
//circle width and height

var w = 600,
	h = 400;
var circleWidth = 50;
//colors
var palette = {

      "lightgray": "#819090",
      "gray": "#708284",
      "mediumgray": "#536870",
      "darkgray": "#475B62",

      "darkblue": "#0A2933",
      "darkerblue": "#042029",
	  "white": "#ffffff",

      "paleryellow": "#FCF4DC",
      "paleyellow": "#EAE3CB",
      "yellow": "#A57706",
      "orange": "#BD3613",
      "red": "#D11C24",
      "pink": "#C61C6F",
      "purple": "#595AB7",
      "blue": "#2176C7",
      "green": "#259286",
      "yellowgreen": "#738A05"
}

var nodes = [
    { name: "HTML", target:[1]},
    { name: "CSS", target: [2]},
    { name: "Javascript", target: [3]},
    { name: "Bootstrap", target: [4]},
    { name: "D3", target: [5]},
    { name: "Wordpress", target: [0]}
];

var links = [
];

for (var i = 0; i < nodes.length; i++){
    if (nodes[i].target != undefined){
        for ( var x = 0; x < nodes[i].target.length; x++){
            links.push({
                source: nodes[i],
                target: nodes[nodes[i].target[x]]
            })
        }
    }
}

var myChart = d3.select('#skillTree')
                .append('svg')
				.attr('width', "100%")
                .attr('height', h)
				
function resize() {
    width = window.innerWidth, height = window.innerHeight;
    svg.attr("width", width).attr("height", height);
    force.size([width, height]).resume();
}
				
var force = d3.layout.force()
                     .nodes(nodes)
                     .links([])
                     .gravity(0.12)
                     .charge(-800)
                     .size([w, h])

var link = myChart.selectAll('line')
                  .data(links).enter().append('line')
                  .attr('stroke', palette.gray)
				  .attr()

var node = myChart.selectAll('circle')
                  .data(nodes).enter()
                  .append('g')
                  .call(force.drag)

node.append('circle')
    .attr('cx', function(d){
      return d.x;
    })
    .attr('cy', function(d){
      return d.y;
    })
    .attr('r', circleWidth)
    .attr('fill', function(d,i){
					  if (i == 0){return palette.darkblue}
					  else if (i == 1){return palette.red}
					  else if (i == 2){return palette.pink}
					  else if (i == 3){return palette.green}
					  else if (i == 4){return palette.yellow}
					  else if (i == 5){return palette.orange}
				  })
	
node.append('text')
	.text(function(d){return d.name})
	.attr('font-family', 'Raleway')
	.attr('fill', palette.white)
	.attr('text-anchor', 'middle')
	.attr('font-size', '1.15em')
	.attr('font-weight', '900')
	
force.on('tick', function(e){
  node.attr('transform', function(d, i){
    return 'translate(' + d.x + ', ' + d.y + ")";
  })
  link.attr('x1', function(d){return d.source.x})
      .attr('y1', function(d){return d.source.y})
      .attr('x2', function(d){return d.target.x})
      .attr('y2', function(d){return d.target.y})
})

force.start()

d3.select(window).on("resize", resize);


 ///////////////////////////////
  // skill tree
  ///////////////////////////////