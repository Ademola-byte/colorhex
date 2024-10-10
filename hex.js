// const colors = [ 0,  1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

// const button = document.getElementById('button');

// const color = document.querySelector('.span');

// button.addEventListener('click', function(){
//     let randomColor = '#';
//     for (let i = 0; i < 6; i++) {
//         randomColor += colors[getrandomNumber()];
//     }
    
//     color.textContent = randomColor;
//     document.body.style.backgroundColor = randomColor
// })


// function getrandomNumber(){
//     return Math.floor(Math.random() * colors.length);
// }






const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

const button = document.getElementById('button')

const color = document.querySelector('.span')

button.addEventListener('click', function(){
    let randomColor = '#';
    for(i = 0; i<6; i++){
        randomColor += colors[getrandomNumber()];
    }
    color.textContent = randomColor;
    document.body.style.backgroundColor = randomColor


})

function getrandomNumber(){
    return Math.floor(Math.random() * colors.length);
}













