/*! Tomcat360.com (c) 2015 
	Author: Renzhao
*/
define("test/invest",["easie","fullPage"],function(t){"use strict";t("easie"),t("fullPage");!function(){console.log("hello world")}(),function(){$(".section1").find(".txt").animate({left:"0"},1200),$(".section1").find(".img").delay(300).animate({right:"0"},1500),$(".section1").find("p").delay(500).animate({bottom:"20%"},1500),$("#invest").fullpage({sectionsColor:["#66cc99","#e0c470","#e1666f","#66a9e1","#b166e1","#f6a054"],navigation:!0,afterLoad:function(t,i){1==i&&($(".section1").find(".txt").animate({left:"0"},1200),$(".section1").find(".img").delay(300).animate({right:"0"},1500),$(".section1").find("p").delay(500).animate({bottom:"20%"},1500)),2==i&&$(".section2").find(".img").fadeIn(1500),3==i&&($(".section3").find(".txt").animate({left:"0"},1200),$(".section3").find("p").delay(300).animate({bottom:"20%"},1200),$(".section3").find(".img").delay(500).animate({right:"100px"},1500)),"4"==i&&($(".section4").find(".img").animate({left:"0"},1200),$(".section4").find(".txt").delay(300).fadeIn(1500))},onLeave:function(t,i){"1"==t&&($(".section1").find(".txt").animate({left:"-120%"},1200),$(".section1").find(".img").delay(300).animate({right:"-120%"},1500),$(".section1").find("p").delay(500).animate({bottom:"-120%"},1500)),"2"==t&&$(".section2").find(".img").fadeOut(1500),"3"==t&&($(".section3").find(".txt").animate({left:"-120%"},1200),$(".section3").find("p").delay(300).animate({bottom:"-120%"},1500),$(".section3").find(".img").delay(500).animate({right:"-120%"},1500)),"4"==t&&($(".section4").find(".img").animate({left:"-120%"},1200),$(".section4").find(".txt").delay(300).fadeOut(1500))}}),$(".fp-tableCell").css({height:"300px"})}()});