var appWrapper = (function() {

	var loadingEffectCount = 0;

	function init() {
		setupPixelBlocks();
	}


	//Trigger menu scroll events 
	function setupPixelBlocks() {
	var height = window.innerHeight,
		width = window.innerWidth,
		blockWidth = window.innerWidth / 10,
		blockHeight = window.innerHeight / 20,
		overlay = document.querySelector('.overlay'),
		pixelBlock = '<div style="height:' + blockHeight + 'px; width: ' + blockWidth + 'px;" class="pixelBlock"></div>';

		
		//Print blocks to cover entire screen
		for(var i = 0; i < (height / blockHeight) * (width / blockWidth); i++) {
			console.log('run');
			overlay.innerHTML = overlay.innerHTML + pixelBlock;
		}
		
	}

	function loadingEffect() {
		var overlay = document.querySelector('.overlay'),
			pixelBlocks = document.querySelectorAll('.pixelBlock'),
			content = document.querySelector('.content');


		setTimeout(function() {
			var previousBlock = loadingEffectCount - 1;
			pixelBlocks[loadingEffectCount].className = pixelBlocks[loadingEffectCount].className + ' show current';
			

			if(previousBlock >= 0) {
				pixelBlocks[previousBlock].className = pixelBlocks[previousBlock].className.replace('current', '');
			}

			loadingEffectCount++;

			if(loadingEffectCount === 1) {
				content.className = content.className + ' show';
				loadingEffect();
			} else if (loadingEffectCount < pixelBlocks.length) {
				loadingEffect();
			} else if (loadingEffectCount == pixelBlocks.length) {
				overlay.parentNode.removeChild(overlay);
			}


		},5);

	}


	//Run all init functions
	init();

	//Public functions
	return {
		loadingEffect: function() {
			loadingEffect();
		}
	};


})();

