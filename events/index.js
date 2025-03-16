//monitorEvents(documnets)

//function changeText(){
//let fpara = document.getElementById('fpara');
//fpara.textContent = "Hello Babbar"
//}

//Event listener
//addEventListener
//Syntax:
//eventTarget.addEventListener('eventType','eventFunction')

//let fpara = document.getElementById('fpara');

//fpara.addEventListener('click', changeText);

//removeEventlistener
//Syntax:
//eventTarget.removeEventlistener('eventType','eventFunction')


//Default action

let anchorElement = document.getElementById('fanchor')

anchorElement.addEventListener('click',function(event){
    event.preventDefault();
    anchorElement.textContent='Click done bhai';
})