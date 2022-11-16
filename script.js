var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;
var images = ['1.png', '2.png', '3.png', '4.png'];

var count = 40;
// var blurArray = ['0px','5px'];


setInterval(changeImage,1000);

function changeImage () {
    var imageRandom = Math.floor(Math.random() * images.length);

    const image = document.getElementById("image");
    image.style.backgroundImage = "url("+ images[imageRandom] +")";
    

}


function createElementRandom() {
    var body = document.querySelector('body');
    for(var i = 0; i < count; i++) {
        var randomLeft = Math.floor(Math.random() *width);
        var randomTop = Math.floor(Math.random() *height);
        var widthElement = Math.floor(Math.random() * 50) + 10;
        var timeAnimation = Math.floor(Math.random() *8) + 5;
        // var blur = Math.floor(Math.random() *2);
        

        var span = document.createElement("span");
        span.style.color = '#fff';
        span.style.width = widthElement + 'px';
        span.style.height = widthElement + 'px';
        span.style.marginLeft = randomLeft + 'px';
        span.style.marginTop = randomTop + 'px';
        // span.style.filter = 'blur(' + blurArray[blur] +')';
        span.style.animation = 'move '+timeAnimation+'s ease-in infinite';
        body.appendChild(span);



    }
}



createElementRandom();