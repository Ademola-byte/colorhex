const colors = ["blue", "green", "rgba(133, 122, 200)", "#f1f3f5"]

const button = document.getElementById('button')

const color = document.querySelector('.span');


button.addEventListener("click", function(){
    let randomNumber = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

    
})