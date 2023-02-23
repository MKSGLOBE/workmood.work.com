/***************************************************
==================== JS INDEX ======================
****************************************************
00. Preloader
01. Cursor Animations
02. Offcanvas
03. Scroll Top
04. Modals
05. Header 1
06. Header 2
07. Header 3
08. Header 5
09. Header Search
10. Roll Slider
11. Workflow Slider
12. Team Slider
13. Testimonial Slider
14. Testimonial Slider 3
15. Portfolio Slider
16. Service 1
17. Counter
18. Button Hover Animation
19. Button Move Animation
20. Register GSAP
21. Config GSAP
22. Service 6
23. Choose Section
24. Portfolio 5 Animation 
25. Title Animation
26. Title Animation Top
27. Text Animation
28. Text Animation Top
29. Offcanvas Menu
30. Service 3
31. Folks animation
32. Menu Text Animation
33. Main Portfolio Sticky
34. Hero 3 Animation
35. Home Page 2 Animations
36. Award Animation
37. Portfolio Main Slider
38. Portfolio Animation
39. Portfolio Slider 2
40. Portfolio Slider 3
41. Image Moving Animations
42. Counter Animation
43. Workflow Slider Animation | animation__fade
44. Workflow Slider Animation 2 |  fade_bottom
45. Blog animation 
46. Blog animation 2
47. Blog Animation 3
48. Zoom In Animation
49. Service 3 Animation
50. Testimonial 2 Animation
51. Testimonial 3 Image Animation
52. Pricing Table Animation 
53. Service 2 Animation 
54. Hero 1 Animation
55. Service 1 Animation
56. Features 2 Animation 
57. Portfolio 6 Animation 
58. Portfolio 5 Border
59. Portfolio Main Slider
60. Portfolio Slider 6
61. Testimonial Slider 4
62. Team 7
63.Portfolio Slider 7
64. Header 7
65. Service 7 Animation
****************************************************/

(function ($) {
	"use strict";
  
	// Get Device width
	let device_width = window.innerWidth;
  
	/////////////////////////////////////////////////////
	// 20. Register GSAP
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother, TweenMax, ScrollToPlugin);
	/////////////////////////////////////////////////////
  
  
	/////////////////////////////////////////////////////
	// 21. Config GSAP
	gsap.config({
	  nullTargetWarn: false,
	});

  
  
	if (device_width > 100) {
  
	  /////////////////////////////////////////////////////
	  // 24. Portfolio 5 Animation 
	  let skewSetter = gsap.quickTo(".portfolio__item-5 img", "skewY"),
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
  