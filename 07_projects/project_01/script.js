const boxes = document.querySelectorAll(".box")
const body = document.querySelector("body")

boxes.forEach(function(box){
    console.log(box);
    box.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'box1'){
            body.style.backgroundColor = 'grey';
        }
        else if(e.target.id === 'box2'){
            body.style.backgroundColor = 'white';
        }
        else if(e.target.id === 'box3'){
            body.style.backgroundColor = 'blue';
        }
        else if(e.target.id === 'box4'){
            body.style.backgroundColor = 'yellow';
        }
    })
});