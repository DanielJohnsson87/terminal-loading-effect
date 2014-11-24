var appWrapper = function() {
    function init() {
        setupPixelBlocks();
    }
    //Trigger menu scroll events 
    function setupPixelBlocks() {
        //Print blocks to cover entire screen
        for (var height = window.innerHeight, width = window.innerWidth, blockWidth = window.innerWidth / 10, blockHeight = window.innerHeight / 20, overlay = document.querySelector(".overlay"), pixelBlock = '<div style="height:' + blockHeight + "px; width: " + blockWidth + 'px;" class="pixelBlock"></div>', i = 0; height / blockHeight * (width / blockWidth) > i; i++) console.log("run"), 
        overlay.innerHTML = overlay.innerHTML + pixelBlock;
    }
    function loadingEffect() {
        var overlay = document.querySelector(".overlay"), pixelBlocks = document.querySelectorAll(".pixelBlock"), content = document.querySelector(".content");
        setTimeout(function() {
            var previousBlock = loadingEffectCount - 1;
            pixelBlocks[loadingEffectCount].className = pixelBlocks[loadingEffectCount].className + " show current", 
            previousBlock >= 0 && (pixelBlocks[previousBlock].className = pixelBlocks[previousBlock].className.replace("current", "")), 
            loadingEffectCount++, 1 === loadingEffectCount ? (content.className = content.className + " show", 
            loadingEffect()) : loadingEffectCount < pixelBlocks.length ? loadingEffect() : loadingEffectCount == pixelBlocks.length && overlay.parentNode.removeChild(overlay);
        }, 5);
    }
    var loadingEffectCount = 0;
    //Public functions
    //Run all init functions
    return init(), {
        loadingEffect: function() {
            loadingEffect();
        }
    };
}();