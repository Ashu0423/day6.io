let colors = ['white','plum','lightgreen','powderblue','purple','rosybrown','salmon','slateblue','skyblue','violet','turquoise','thistle'];

//get button
let button = document.getElementById('button');

//add event listener
button.addEventListener('click', function(){
    //randomizer
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    //get container
    let container = document.getElementById('container');

    container.style.background = randomColor;
})