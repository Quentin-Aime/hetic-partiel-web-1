var elScrollToTop = document.querySelector('#backtotop');

window.addEventListener('scroll', function(){
	if (this.pageYOffset != 0) {
		if (!(elScrollToTop.classList.contains("visible"))) {
			elScrollToTop.classList.add('visible');
		}
	}
	else {		
		elScrollToTop.classList.remove('visible');
	}
})

/*elScrollToTop.addEventListener('click', function() {
	while (window.pageYOffset > 0) {
		console.log('lol');
		window.setTimeout(function() {
			window.pageYOffset -= 20;
		}, 100)
		if (window.pageYOffset < 0) {
			window.pageYOffset = 0;
		}
	}
})*/