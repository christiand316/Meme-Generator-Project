const topInput = document.querySelector('input[name="top-text-input"]');
const bottomInput = document.querySelector('input[name="bottom-text-input"]');
const imgInput = document.querySelector('input[name="img-input"]');

let result = undefined;

const form = document.querySelector('#meme1');
const form2 = document.querySelector('#meme2');
const form3 = document.querySelector('#meme3');
const finalSubmit = document.querySelector('#final')

let hold1 = '';
let hold2 = '';
let hold3 = undefined;




const track = document.getElementById("card-track");

form.addEventListener('submit', function(e) {
    e.preventDefault();
    hold1 = topInput.value;
});

form2.addEventListener('submit', function(e) {
    e.preventDefault();
    hold2 = bottomInput.value;
});

form3.addEventListener('submit', function(e) {
    e.preventDefault();
    hold3 = imgInput.value;
});

finalSubmit.addEventListener('submit', function(e) {
    e.preventDefault();
    result = document.querySelector('#result')
    result.appendChild(fillDiv(hold1, hold2))
    result.removeAttribute('id')
    result = undefined;
    document.createElement('div')

    let nextMeme = document.createElement('div');
    nextMeme.setAttribute('id','result')
    nextMeme.setAttribute('draggable','false')

    track.appendChild(nextMeme);
    
});






function fillDiv(top, bottom) {
let generatedMeme = document.createElement('div') ;
generatedMeme.classList.add('card')
    
let memeTopInput = document.createElement('div')
memeTopInput.classList.add('topText')
memeTopInput.innerText = top

let memeBottomInput = document.createElement('div')
memeBottomInput.classList.add('bottomText')
memeBottomInput.innerText = bottom

let memeImageInput = document.createElement('div')
memeImageInput.classList.add('memePicture')

memeImageInput.style.backgroundImage = `url("${hold3}")`;

    //attach input to output div and reset holders
    generatedMeme.appendChild(memeImageInput)
    generatedMeme.appendChild(memeTopInput)
    generatedMeme.appendChild(memeBottomInput)
    
    hold1 = '';
    hold2 = '';
    hold3 = undefined;

//
generatedMeme.addEventListener('click', function(e){
    e.target.parentElement.parentElement.remove();
})

    return generatedMeme;
}










// movement

window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
}
window.onmouseup = () => {
    track.dataset.mouseDownAt = '0';
    track.dataset.prevPercentage = track.dataset.percentage;
}
window.onmousemove = e => {
    if (track.dataset.mouseDownAt === '0') return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
    maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
        nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

        track.dataset.percentage = nextPercentage;

    track.style.transform = `translate(${nextPercentage}%, -50%)`;
}
